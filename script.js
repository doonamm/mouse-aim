const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const SCR_WIDTH = canvas.offsetWidth;
const SCR_HEIGHT = canvas.offsetHeight;
const SCR_LEFT = canvas.offsetLeft;
const SCR_TOP = canvas.offsetTop;
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
const INIT_PLAYER = {
    w: PLAYER_ORI_W,
    h: PLAYER_ORI_H,
    x: (SCR_WIDTH - PLAYER_ORI_W)/2,
    y: (SCR_HEIGHT - PLAYER_ORI_H)/2,
    color: 'green',
    speed: 12,
}
const player = new Player(INIT_PLAYER);

//enemy
const INIT_ENEMY = {
    w: 30,
    h: 30,
    color: 'red',
    speed: 7,
    angle: 50,
    x: 50,
    y: 50
}
const enemy = new AutoMoveObject({...INIT_ENEMY});

//bullet
var INIT_BULLET = function(){
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
const Bullet_list = [];

//main
document.addEventListener('mousedown', player.onMouseDown);
document.addEventListener('mouseup', player.onMouseUp);
document.addEventListener('keydown', player.onKeyDown);
document.addEventListener('keyup', player.onKeyUp);
document.addEventListener('mousemove', mouse.onMouseMove.bind(mouse));

interval = setInterval(Update, frameDelay);




//function
function Update(){
    ctx.clearRect(0, 0, SCR_WIDTH, SCR_HEIGHT);

    player.render();
    player.move();
    player.shoot();

    enemy.render();
    enemy.autoMove();

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
}
function InitBullet(baseObject){
    const angle = GetAngle(baseObject, mouse);
    return new AutoMoveObject({
        ...INIT_BULLET(), 
        angle: angle, 
        x: baseObject.w/2 + baseObject.x - INIT_BULLET().w/2,
        y: baseObject.h/2 + baseObject.y - INIT_BULLET().w/2
    });
}
function GetAngle(baseObject, desObject){
    const delX = mouse.x - (player.w/2 + player.x);
    const delY = mouse.y - (player.w/2 + player.y);
    return Math.atan2(delY, delX)*180/Math.PI;
}
function AutoMoveObject(data){
    GameObject.call(this, {
        x: data.x,
        y: data.y,
        w: data.w,
        h: data.h,
        color: data.color,
        timeExist: data.timeExist
    });
    this.speed = data.speed;
    this.spX = Math.cos(data.angle*Math.PI/180)*this.speed;
    this.spY = Math.sin(data.angle*Math.PI/180)*this.speed;

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
    GameObject.call(this, {
        x: data.x, 
        y: data.y, 
        w: data.w, 
        h: data.h,
        color: data.color
    });
    this.speed = data.speed || 0;
    this.status = {
        left: false,
        right: false,
        up: false,
        down: false,
        shooting: false,
    }
    this.checkMapCollision = ()=>{
        if(this.x < 0){
            this.x = 0;
        }
        else if(this.x > SCR_WIDTH - this.w){
            this.x  = SCR_WIDTH - this.w;
        }
        if(this.y < 0){
            this.y = 0;
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