/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function MyGame(htmlCanvasID){
    gEngine.Core.initializeWebGL(htmlCanvasID);
    this.mConstColorShader = new SimpleShader("src/GLSLShaders/SimpleVS.glsl", "src/GLSLShaders/SimpleFS.glsl");
    this.mWhiteSq = new Renderable(this.mConstColorShader);
    this.mWhiteSq.setColor([1,1,1,1]);
    this.mRedSq = new Renderable(this.mConstColorShader);
    this.mRedSq.setColor([1,0,0,1]);
    gEngine.Core.clearCanvas([0, 0.8, 0, 1]);
    this.mWhiteSq.getXForm().setPosition(-0.25, 0.25);
    this.mWhiteSq.getXForm().setRotationInRad(0.2);
    this.mWhiteSq.getXForm().setSize(1.2, 1.2);
    this.mWhiteSq.draw();
    this.mRedSq.getXForm().setXPos(0.25);
    this.mRedSq.getXForm().setYPos(-0.25);
    this.mRedSq.getXForm().setRotationInDegree(45);
    this.mRedSq.getXForm().setHeight(0.4);
    this.mRedSq.getXForm().setWidth(0.4);
    this.mRedSq.draw();
}