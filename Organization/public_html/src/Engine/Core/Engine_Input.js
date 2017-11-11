/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var gEngine = gEngine || {};

var kKeys = {
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Space: 32,
    Zero: 48,
    One: 49,
    Two: 50,
    Three: 51,
    Four: 52,
    Five: 53,
    Six: 54,
    Seven: 55,
    Eight: 56,
    Nine: 57,
    A: 65,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    I: 73,
    J: 74,
    K: 75, 
    L: 76,
    R: 82,
    S: 83,
    W: 87,
    LastKeyCode: 222
};

var mKeyPreviousState = [];
var mIsKeyPressed = [];
var mIsKeyClicked = [];

var _onKeyDown = function(event){mIsKeyPressed[event.keyCode] = true;};
var _onKeyUp = function(event){mIsKeyPressed[event.keyCode] = false;};

var initialize = function(){
    var i;
    for(i = 0; i < kKeys.LastKeyCode; i++){
        mIsKeyPressed[i] = false;
        mKeyPreviousState[i] = false;
        mIsKeyClicked[i] = false;
    }
    window.addEventListener("keyup", _onKeyUp);
    window.addEventListener("keydown", _onKeyDown);
};

var update = function(){
    var i;
    for(i = 0; i < kKeys.LastKeyCode; i++){
        mIsKeyClicked[i] = (!mKeyPreviousState[i]) && mIsKeyPressed[i];
        mKeyPreviousState[i] = mIsKeyPressed[i];
    }
};

var isKeyPressed = function(keyCode){
    return mIsKeyPressed[keyCode];
};

var isKeyClicked = function(keyCode){
    return (mIsKeyClicked[keyCode]);
};

gEngine.Input = (function(){
    var mPublic = {
        initialize: initialize,
        update: update,
        isKeyPressed: isKeyPressed,
        isKeyClicked: isKeyClicked,
        keys: kKeys
    };
    return mPublic;
}());