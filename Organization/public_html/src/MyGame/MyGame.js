/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function MyGame(htmlCanvasID){
    this.mConstColorShader = null;
    this.mWhiteSq = null;
    this.mRedSq = null;
    this.mCamera = null;
    gEngine.Core.initializeWebGL(htmlCanvasID);
    this.initialize();
}

MyGame.prototype.initialize = function(){
    this.mCamera = new Camera(vec2.fromValues(20, 60), 20, [20, 40, 600, 300]);
    this.mCamera.setBackgroundColor([0.8, 0.8, 0.8, 1]);
    this.mConstColorShader = new SimpleShader("src/GLSLShaders/SimpleVS.glsl", "src/GLSLShaders/SimpleFS.glsl");
    this.mWhiteSq = new Renderable(this.mConstColorShader);
    this.mWhiteSq.setColor([1,1,1,1]);
    this.mRedSq = new Renderable(this.mConstColorShader);
    this.mRedSq.setColor([1,0,0,1]);
    this.mWhiteSq.getXForm().setPosition(20, 60);
    this.mWhiteSq.getXForm().setRotationInRad(0.2);
    this.mWhiteSq.getXForm().setSize(5,5);
    this.mRedSq.getXForm().setPosition(20, 60);
    this.mRedSq.getXForm().setSize(2, 2);
    gEngine.GameLoop.start(this);
};

MyGame.prototype.update = function(){
    var whiteXform = this.mWhiteSq.getXForm();
    var deltaX = 0.05;
    if(whiteXform.getXPos() > 30){
        whiteXform.setPosition(10, 60);
    }
    whiteXform.incXPosBy(deltaX);
    whiteXform.incRotationByDegree(1);
    var redXform = this.mRedSq.getXForm();
    if(redXform.getWidth() > 5){
        redXform.setSize(2,2);
    }
    redXform.incSizeBy(0.05);
};

MyGame.prototype.draw = function(){
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1]);
    this.mCamera.setupViewProjection();
    this.mWhiteSq.draw(this.mCamera.getVPMatrix());
    this.mRedSq.draw(this.mCamera.getVPMatrix());
};