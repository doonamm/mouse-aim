const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const SCR_WIDTH = canvas.offsetWidth;
const SCR_HEIGHT = canvas.offsetHeight;
const SCR_LEFT = canvas.offsetLeft;
const SCR_TOP = canvas.offsetTop;
const SPLIT_SCREEN = 240;
var frameDelay = 20;
var interval = null;

//mouse
const mouse = {
    x: 0,
    y: 0,
    onMouseMove: function(e){
        this.x = e.clientX - SCR_LEFT;
        this.y = e.clientY - SCR_TOP;
    }
}

//player
const PLAYER_ORI_W = 30;
const PLAYER_ORI_H = 30;
const ORI_PLAYER_OFFSET = function(){
    return {
        w: PLAYER_ORI_W,
        h: PLAYER_ORI_H,
        x: (SCR_WIDTH - PLAYER_ORI_W)/2,
        y: (SCR_HEIGHT - PLAYER_ORI_H)/2,
        color: 'green',
        speed: 12,
    }
}
const player = new Player(ORI_PLAYER_OFFSET());

//bullet
const ORI_BULLET_OFFSET = function(){
    return{
        w: 10,
        h: 10,
        color: 'yellow',
        speed: '15',
        timeExist: {
            isSet: true,
            time: 50
        }
    }
}
const ENEMY_BULLET_OFFSET = function(){
    return{
        w: 12,
        h: 12,
        color: 'black',
        speed: '8',
        timeExist: {
            isSet: true,
            time: 90
        }
    }
}
const Bullet_list = [];

//enemy
const ORI_ENEMY_OFFSET = function(){
    return { 
        w: 30,
        h: 30,
        color: 'red',
        speed: 6,
    }
}
const ENEMY_DELAY_ATK_MIN = 40;
const ENEMY_DELAY_ATK_MAX = 80;
const ORI_ENEMY_COUNT = 3;
const Enemy_list = [];

//hook
const ORI_HOOK_OFFSET = function(){
    return{
        w: 12,
        h: 25,
        color: 'orange',
        spacing: 25,
        speed: 10,
        paddingWidth: 4 
    }
}
const hook = new Hook({...ORI_HOOK_OFFSET(), baseObject: player});

//main
AddPlayerEvent(player);
player.addHook(hook);
InitEnemies(Enemy_list, ORI_ENEMY_COUNT, player);
document.addEventListener('mousemove', mouse.onMouseMove.bind(mouse));
interval = setInterval(Update, frameDelay);


//function
function Update(){
    ResetMap();

    //hook
    hook.render();

    //player
    player.render();
    player.move();
    player.shoot();

    //bullet
    for(const id in Bullet_list){
        Bullet_list[id].render();
        Bullet_list[id].autoMove();

        if(Bullet_list[id].timeExist.isSet){
            Bullet_list[id].timeExist.time--;
            if(Bullet_list[id].timeExist.time<0){
                Bullet_list.splice(id, 1);
            }
        }
    }

    //enemy
    for(const id in Enemy_list){ 
        Enemy_list[id].render();
        Enemy_list[id].autoMove();
        Enemy_list[id].autoAttackPlayer();
    }
}
function DrawPadding(baseObject, desObject, paddingWidth, color='brown'){
    const angle = GetAngle(baseObject, desObject);
    const anglePos = {
        left:  angle + 90*Math.PI/180,
        right: angle - 90*Math.PI/180
    };
    const deltaLeft = {
        x: Math.round(paddingWidth * Math.cos(anglePos.left)),
        y: Math.round(paddingWidth * Math.sin(anglePos.left))
    }
    const deltaRight = {
        x: Math.round(paddingWidth * Math.cos(anglePos.right)),
        y: Math.round(paddingWidth * Math.sin(anglePos.right))
    }
    const centerBaseObj = {
        x: baseObject.x + baseObject.w/2,
        y: baseObject.y + baseObject.h/2,
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerBaseObj.x + deltaLeft.x, centerBaseObj.y + deltaLeft.y);
    ctx.lineTo(desObject.x + deltaLeft.x, desObject.y + deltaLeft.y);
    ctx.lineTo(desObject.x + deltaRight.x, desObject.y + deltaRight.y);
    ctx.lineTo(centerBaseObj.x + deltaRight.x, centerBaseObj.y + deltaRight.y);
    ctx.closePath();
    ctx.fill();
}
function InitEnemies(enemyList, amount, aimTarget){
    if(!aimTarget){
        console.log('Need a target');
        return;
    }
    for(let i = 0; i < amount; i++){
        enemyList.push(InitRandomEnemy(aimTarget));
    }
}
function InitRandomEnemy(aimTarget){
    if(!aimTarget)
        return null;
    let x, y;
    const data = ORI_ENEMY_OFFSET();
    const side = RandomInRange(0, 3);
    // 0: top, 1: right, 2: bottom, 3: left
    switch(side){
        case 0:
            x = RandomInRange(0, SCR_WIDTH - data.w);
            y = 0;
            break;
        case 1:
            x = SCR_WIDTH - data.w;
            y = RandomInRange(0, SPLIT_SCREEN - data.h);
            break;
        case 2:
            x = RandomInRange(0, SCR_WIDTH - data.w);
            y = SPLIT_SCREEN - data.h;
            break;
        case 3:
            x = 0;
            y = RandomInRange(0, SPLIT_SCREEN - data.h);
            break;
    }
    //0 radius -> 360 radius
    const angle = RandomInRange(0, 360);

    return new Enemy({
        ...data, 
        x: x, 
        y: y, 
        angle: angle,
        aimTarget: aimTarget
    });
}
function InitBullet(baseObject, target, custom){
    const angle = GetAngle(baseObject, target);
    const data = custom || ORI_BULLET_OFFSET();
    return new AutoMoveObject({
        ...data, 
        angle: angle, 
        x: baseObject.w/2 + baseObject.x - ORI_BULLET_OFFSET().w/2,
        y: baseObject.h/2 + baseObject.y - ORI_BULLET_OFFSET().w/2,
    });
}
function AddPlayerEvent(playerObj){
    document.addEventListener('mousedown', playerObj.onMouseDown);
    document.addEventListener('mouseup', playerObj.onMouseUp);
    document.addEventListener('keydown', playerObj.onKeyDown);
    document.addEventListener('keyup', playerObj.onKeyUp);
}
function GetAngle(baseObject, desObject){
    const delX = desObject.x - (baseObject.w/2 + baseObject.x);
    const delY = desObject.y - (baseObject.w/2 + baseObject.y);
    return Math.atan2(delY, delX);//convert to degree: Math.atan2(delY, delX)*180/Math.PI
}
function Hook(data){
    GameObject.call(this, data);
    this.baseObject = data.baseObject || null;
    this.spacing = data.spacing || 0;
    this.speed = data.speed || 0;
    this.paddingWidth = data.paddingWidth || 0;
    this.angle = data.angle || 0;
    this.isHooking = false;
    this.isMoveToward = false;
    this.render = ()=>{
        this.updatePosition();
        this.drawTriangle();
        DrawPadding(this.baseObject, this, this.paddingWidth); 
        this.checkMapCollision();
    }
    this.checkMapCollision = ()=>{
        if(this.x < 0 || this.y < 0 || this.x > SCR_WIDTH - this.w || this. y > SCR_HEIGHT){
            this.isMoveToward = false;
        }
    }
    this.updatePosition = ()=>{
        if(this.isHooking && this.isMoveToward){ 
            this.x += Math.cos(this.angle)*this.speed;
            this.y += Math.sin(this.angle)*this.speed;
        }
        else if(this.isHooking && !this.isMoveToward){ 
            this.angle = GetAngle(this.baseObject, this);
            this.x -= Math.cos(this.angle)*this.speed*2;
            this.y -= Math.sin(this.angle)*this.speed*2;

            const baseObjCenter = {
                x: this.baseObject.x + this.baseObject.w/2,
                y: this.baseObject.y + this.baseObject.h/2
            }
            const space = Math.sqrt(Math.pow(this.x - baseObjCenter.x, 2) + Math.pow(this.y - baseObjCenter.y, 2));
            if(space <= this.spacing){
                this.isHooking = false;
                this.isMoveToward = false;
            }
        }
        else{
            this.angle = GetAngle(this.baseObject, mouse);
            const baseObjCenter = {
                x: this.baseObject.x + this.baseObject.w/2,
                y: this.baseObject.y + this.baseObject.h/2
            }
            this.x = baseObjCenter.x + Math.cos(this.angle)*this.spacing;
            this.y = baseObjCenter.y + Math.sin(this.angle)*this.spacing;
        }
    }
    this.triggerHook = ()=>{
        this.isHooking = true;
        this.isMoveToward = true;
    }
    this.drawTriangle = ()=>{
        const anglePos = {
            left:  this.angle + 90*Math.PI/180,
            right: this.angle - 90*Math.PI/180
        };
        const deltaLeft = {
            x: Math.round(this.w * Math.cos(anglePos.left)),
            y: Math.round(this.w * Math.sin(anglePos.left))
        }
        const deltaRight = {
            x: Math.round(this.w * Math.cos(anglePos.right)),
            y: Math.round(this.w * Math.sin(anglePos.right))
        }
        const deltaHeight = {
            x: Math.round(this.h * Math.cos(this.angle)),
            y: Math.round(this.h * Math.sin(this.angle))
        }

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x + deltaLeft.x, this.y + deltaLeft.y);
        ctx.lineTo(this.x + deltaRight.x, this.y + deltaRight.y);
        ctx.lineTo(this.x + deltaHeight.x, this.y + deltaHeight.y);
        ctx.closePath();
        ctx.fill();
    }
}
function Enemy(data){
    AutoMoveObject.call(this, data);
    this.aimTarget = data.aimTarget;
    this.delayAttack = RandomInRange(ENEMY_DELAY_ATK_MIN, ENEMY_DELAY_ATK_MAX);
    this.autoAttackPlayer = ()=>{
        if(this.delayAttack < 0){
            this.delayAttack = RandomInRange(ENEMY_DELAY_ATK_MIN, ENEMY_DELAY_ATK_MAX);
            //get center of target's horizontal
            const aimX = this.aimTarget.x + this.aimTarget.w/2;
            const randomAimX = RandomInRange(aimX - this.aimTarget.w*2, aimX + this.aimTarget.w*2);
            const aimPos = { 
                x: randomAimX,
                y: this.aimTarget.y + this.aimTarget.h/2,
            }
            Bullet_list.push(InitBullet(this, aimPos, ENEMY_BULLET_OFFSET()));
        }
        else{
            this.delayAttack--;
        }
    }
    this.checkMapCollision = ()=>{
        if(this.x < 0){
            this.x = 0;
            this.spX = - this.spX;
        }
        else if(this.x > SCR_WIDTH - this.w){
            this.x  = SCR_WIDTH - this.w;
            this.spX = - this.spX;
        }
        if(this.y < 0){
            this.y = 0;
            this.spY = - this.spY;
        }
        else if (this. y > SPLIT_SCREEN - this.h){
            this.y = SPLIT_SCREEN - this.h;
            this.spY = - this.spY;
        }
    }
}
function AutoMoveObject(data){
    GameObject.call(this, data);
    this.speed = data.speed;
    this.spX = Math.cos(data.angle)*this.speed;
    this.spY = Math.sin(data.angle)*this.speed;

    this.autoMove = (e)=>{
        this.x += this.spX;
        this.y += this.spY;
        this.checkMapCollision();
    }
    this.checkMapCollision = ()=>{
        if(this.x < 0){
            this.x = 0;
            this.spX = - this.spX;
        }
        else if(this.x > SCR_WIDTH - this.w){
            this.x  = SCR_WIDTH - this.w;
            this.spX = - this.spX;
        }
        if(this.y < 0){
            this.y = 0;
            this.spY = - this.spY;
        }
        else if (this. y > SCR_HEIGHT - this.h){
            this.y = SCR_HEIGHT - this.h;
            this.spY = - this.spY;
        }
    }
}
function Player(data){
    GameObject.call(this, data);
    this.speed = data.speed || 0;
    this.hook  = null;
    this.status = {
        left: false,
        right: false,
        up: false,
        down: false,
        shooting: false,
    }
    this.addHook = (hook)=>{
        this.hook = hook;
    }
    this.triggerHook = ()=>{
        if(this.hook !== null && !this.hook.isHooking){
            this.hook.triggerHook();
        }
    }
    this.checkMapCollision = ()=>{
        if(this.x < 0){
            this.x = 0;
        }
        else if(this.x > SCR_WIDTH - this.w){
            this.x  = SCR_WIDTH - this.w;
        }
        if(this.y < SPLIT_SCREEN){
            this.y = SPLIT_SCREEN;
        }
        else if (this. y > SCR_HEIGHT - this.h){
            this.y = SCR_HEIGHT - this.h;
        }
    }
    this.move = function(){
        if(this.status.left === true){
            this.x -= this.speed;
        }
        if(this.status.right === true){
            this.x += this.speed;
        }
        if(this.status.up === true){
            this.y -= this.speed;
        }
        if(this.status.down === true){
            this.y += this.speed;
        }
        this.checkMapCollision();
    }
    this.moveReverse = function(){
        if(this.status.left === true){
            this.y += this.speed;
        }
        if(this.status.right === true){
            this.y -= this.speed;
        }
        if(this.status.up === true){
            this.x -= this.speed;
        }
        if(this.status.down === true){
            this.x += this.speed;
        }
        this.checkMapCollision();
    }
    this.shoot = function(){
        if(this.status.shooting){
            Bullet_list.push(InitBullet(this, mouse));
        }
    }
    this.onMouseDown = (e)=>{
        if(!this.status.shooting)
            this.status.shooting = true;
    }
    this.onMouseUp = (e)=>{
        if(this.status.shooting)
            this.status.shooting = false;
    }
    this.onKeyDown = (e)=>{
        switch(e.code){
            case 'KeyA':
            case 'ArrowLeft':
                this.status.left = true;
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.status.right = true;
                break;
            case 'KeyW':
            case 'ArrowUp':
                this.status.up = true;
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.status.down = true;
                break;
            case 'Space':
                this.triggerHook();
                break;
        }
    }
    this.onKeyUp = (e)=>{
        switch(e.code){
            case 'KeyA':
            case 'ArrowLeft':
                this.status.left = false;
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.status.right = false;
                break;
            case 'KeyW':
            case 'ArrowUp':
                this.status.up = false;
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.status.down = false;
                break;
        }
    }
}
function GameObject(data){
    this.x = data.x || 0;
    this.y = data.y || 0;
    this.w = data.w || 0;
    this.h = data.h || 0;
    this.color = data.color || 'black';
    this.timeExist = data.timeExist || {isSet: false, time: -1};
    this.render = function(){
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.restore();
    }
}
function RandomInRange(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}
function ResetMap(){
    //clear map
    ctx.clearRect(0, 0, SCR_WIDTH, SCR_HEIGHT);
    //draw split map line
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, SPLIT_SCREEN);
    ctx.lineTo(SCR_WIDTH, SPLIT_SCREEN);
    ctx.stroke();
}