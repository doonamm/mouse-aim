const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
const TILE_SIZE = 14;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const SCR_WIDTH = canvas.offsetWidth;
const SCR_HEIGHT = canvas.offsetHeight;
var SCR_LEFT = canvas.offsetLeft;
var SCR_TOP = canvas.offsetTop;
const SomeColors = [
    'orange',
    'red',
    'green',
    'blue',
    'yellow',
    'violet',
    'brown',
    'purple',
    'gray',
    'cyan',
    'darksalmon'
]
var frameDelay = 18;
var interval = null;
var count = 0;
var celebCount = 5;

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
const PLAYER_ORI_W = 28;
const PLAYER_ORI_H = 28;
const ORI_PLAYER_OFFSET = function(){
    return {
        w: PLAYER_ORI_W,
        h: PLAYER_ORI_H,
        x: (SCR_WIDTH - PLAYER_ORI_W)/2,
        y: (SCR_HEIGHT - PLAYER_ORI_H)/2,
        color: 'green',
        speed: 7,
    }
}

//bullet
const ORI_BULLET_OFFSET = function(){
    return{
        w: 10,
        h: 10,
        color: 'yellow',
        speed: '15',
        timeExist: {
            isSet: true,
            time: 60
        }
    }
}
const ENEMY_BULLET_OFFSET = function(){
    return{
        w: 12,
        h: 12,
        color: 'black',
        speed: '6',
        timeExist: {
            isSet: true,
            time: 100
        }
    }
}
const Bullet_list = [];

//enemy
const ORI_ENEMY_OFFSET = function(){
    return { 
        w: 28,
        h: 28,
        color: 'red',
        speed: 4,
    }
}
const ENEMY_DELAY_ATK_MIN = 100;
const ENEMY_DELAY_ATK_MAX = 200;
const ORI_ENEMY_COUNT = 3;
const Enemy_list = [];
var enemy_level = 1;

//hook
const ORI_HOOK_OFFSET = function(){
    return{
        w: 30,
        h: 25,
        color: 'orange',
        spacing: 25,
        speed: 14,
        paddingWidth: 4 
    }
}

//main
const player = new Player(ORI_PLAYER_OFFSET());
const hook = new Hook({...ORI_HOOK_OFFSET(), baseObject: player});
player.addHook(hook);
AddPlayerEvent(player);
InitEnemies(Enemy_list, ORI_ENEMY_COUNT, player);
ScreenResize();
document.addEventListener('mousemove', mouse.onMouseMove.bind(mouse));
window.addEventListener('resize', ScreenResize);

interval = setInterval(Update, frameDelay);

//function
function Update(){
    ResetMap();

    //hook
    hook.render();
    hook.updateObjectHooking();

    //player
    player.render();
    player.move();
    player.shoot();

    CheckCollisionTileset(player);

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
        if(hook.isMoveToward){
            if(CheckCollisionBetween(Enemy_list[id], hook)){
                hook.setHookedObject(Enemy_list[id]);
            }
        }
        if(Enemy_list[id].isStun && CheckCollisionBetween(Enemy_list[id], player)){
            Enemy_list.splice(id, 1);
        }
    }

    //another
    count++;
    if(Enemy_list.length === 0 && celebCount>=0 && count%10 === 0){
        player.specialSkill();
        celebCount--;
    }
    else if (Enemy_list.length === 0 && celebCount < 0 && count%20 === 0){
        InitEnemies(Enemy_list, ++enemy_level + 3, player);
        celebCount = 5;
        count = 0;
    }
}
function CheckCollisionTileset(obj){
    const x = Math.floor(obj.x / TILE_SIZE);
    const y = Math.floor(obj.y / TILE_SIZE);
    if(x < 0 || y < 0 || obj.x + obj.w > map[0].length*14 || obj.y + obj.h > map.length*14)
        return true;
    if(map[y][x] || map[y+1][x+1] || map[y+1][x] || map[y][x+1])
        return true;
    return false;
}
function ScreenResize(e){
    SCR_LEFT = canvas.offsetLeft;
    SCR_TOP = canvas.offsetTop;
    const CV_W = window.innerWidth;
    const CV_H = window.innerHeight;
    const deltaSize = CV_W < CV_H ? CV_W - 4 + 'px' : CV_H - 4 + 'px';
    canvas.style.width = deltaSize;
    canvas.style.height = deltaSize; 
}
function CheckCollisionBetween(obj1, obj2){
    return (
        obj1.x < obj2.x + obj2.w
        && obj1.y < obj2.y + obj2.h
        && obj2.x < obj1.x + obj1.w
        && obj2.y < obj1.y + obj1.h
    ) 
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
            y = RandomInRange(0, SCR_HEIGHT - data.h);
            break;
        case 2:
            x = RandomInRange(0, SCR_WIDTH - data.w);
            y = SCR_HEIGHT - data.h;
            break;
        case 3:
            x = 0;
            y = RandomInRange(0, SCR_HEIGHT - data.h);
            break;
    }
    //0 radius -> 360 radius
    const angle = RandomInRange(0, 720);

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
        y: baseObject.h/2 + baseObject.y - ORI_BULLET_OFFSET().h/2,
    });
}
function AddPlayerEvent(playerObj){
    document.addEventListener('contextmenu', playerObj.onContextMenu);
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
function RandomInRange(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}
function ResetMap(){
    //clear map
    ctx.clearRect(0, 0, SCR_WIDTH, SCR_HEIGHT);
    //draw split map line
    const em = 3.5;
    const a = 154 - em;
    const b = 560 - em;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = em;
    ctx.beginPath();
    ctx.moveTo(a, a);
    ctx.lineTo(b, a);
    ctx.lineTo(b, b);
    ctx.lineTo(a, b);
    ctx.lineTo(a, a - em/2);
    ctx.stroke();
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
    this.hookedObj = null;
    this.render = ()=>{
        this.updatePosition();
        this.drawTriangle();
        DrawPadding(this.baseObject, this, this.paddingWidth); 
        this.checkMapCollision();
    }
    this.checkMapCollision = ()=>{
        if(this.x < 0 || this.y < 0 || this.x > SCR_WIDTH - this.w/2 || this. y > SCR_HEIGHT){
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
            this.x -= Math.cos(this.angle)*this.speed*3;
            this.y -= Math.sin(this.angle)*this.speed*3;

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
    this.setHookedObject = (obj)=>{
        obj.isStun = true;
        this.hookedObj = obj;
        this.isMoveToward = false;
    }
    this.updateObjectHooking = ()=>{
        if(this.hookedObj !== null){
            this.hookedObj.x = this.x - this.hookedObj.w/2;
            this.hookedObj.y = this.y - this.hookedObj.h/2;
            if(!this.isHooking && !this.isMoveToward){
                this.hookedObj = null;
            }
        }
    }
}
function Enemy(data){
    AutoMoveObject.call(this, data);
    this.saveSpeed = this.speed;
    this.aimTarget = data.aimTarget;
    this.delayAttack = RandomInRange(ENEMY_DELAY_ATK_MIN, ENEMY_DELAY_ATK_MAX);
    this.autoAttackPlayer = ()=>{
        if(this.isStun)
            return;
        if(this.delayAttack < 0){
            this.delayAttack = RandomInRange(ENEMY_DELAY_ATK_MIN, ENEMY_DELAY_ATK_MAX);
            //get center of target's horizontal
            const aimX = this.aimTarget.x + this.aimTarget.w/2;
            const randomAimX = RandomInRange(aimX - this.aimTarget.w*3, aimX + this.aimTarget.w*3);
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
    this.autoMove = ()=>{
        if(this.isStun)
            return;
        const oldX = this.x;
        const oldY = this.y;

        this.x += this.spX;
        if(CheckCollisionTileset(this)){
            this.x = oldX;
            this.spX = -this.spX;
        }

        this.y += this.spY;
        if(CheckCollisionTileset(this)){
            this.y = oldY;
            this.spY = -this.spY;
        }
    }
}
function AutoMoveObject(data){
    GameObject.call(this, data);
    this.speed = data.speed;
    this.spX = Math.cos(data.angle)*this.speed;
    this.spY = Math.sin(data.angle)*this.speed;
    this.isStun = false;
    this.autoMove = (e)=>{
        if(this.isStun)
            return;
        this.x += this.spX;
        this.y += this.spY;
        this.checkMapCollision();
    }
    this.checkMapCollision = ()=>{
        if(this.isStun)
            return;
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
    this.move = function(){
        const oldX = this.x;
        const oldY = this.y;
        if(this.status.left === true){
            this.x -= this.speed;
        }
        if(this.status.right === true){
            this.x += this.speed;
        }
        if(CheckCollisionTileset(this)){
            this.x = oldX;
        }
        if(this.status.up === true){
            this.y -= this.speed;
        }
        if(this.status.down === true){
            this.y += this.speed;
        }
        if(CheckCollisionTileset(this)){
            this.y = oldY;
        }
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
            const dataBullet = ORI_BULLET_OFFSET();
            const randomColor = SomeColors[RandomInRange(0, SomeColors.length - 1)];
            Bullet_list.push(InitBullet(this, mouse, {...dataBullet, color: randomColor}));
        }
    }
    this.specialSkill = function(){
        const centerX = this.w/2 + this.x - ORI_BULLET_OFFSET().w/2;
        const centerY = this.h/2 + this.y - ORI_BULLET_OFFSET().h/2
        const color = SomeColors[RandomInRange(0, SomeColors.length - 1)];
        for(let i = 0; i < 360; i+=5){
            Bullet_list.push(new AutoMoveObject({
                ...ORI_BULLET_OFFSET(),
                color: color,
                angle: (i)*Math.PI/180,
                x: centerX,
                y: centerY,
                speed: 5,
                timeExist: {
                    isSet: true,
                    time: 140
                }
            }));
        }
    }
    this.onContextMenu = (e)=>{
        e.preventDefault();
        this.specialSkill();
    }
    this.onMouseDown = (e)=>{
        if(e.button !== 2 && !this.status.shooting)
            this.status.shooting = true;
    }
    this.onMouseUp = (e)=>{
        if(e.button !== 2 && this.status.shooting)
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
