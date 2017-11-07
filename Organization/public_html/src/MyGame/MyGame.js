/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function MyGame(htmlCanvasID){
    gEngine.Core.initializeWebGL(htmlCanvasID);
    var gl = gEngine.Core.getGL();
    this.mConstColorShader = new SimpleShader("src/GLSLShaders/SimpleVS.glsl", "src/GLSLShaders/SimpleFS.glsl");
    this.mBlueSq = new Renderable(this.mConstColorShader);
    this.mBlueSq.setColor([0.25,0.25,0.95,1]);
    this.mRedSq = new Renderable(this.mConstColorShader);
    this.mRedSq.setColor([1,0.25,0.25,1]);
    this.mTLSq = new Renderable(this.mConstColorShader);
    this.mTLSq.setColor([0.9,0.1,0.1,1]);
    this.mTRSq = new Renderable(this.mConstColorShader);
    this.mTRSq.setColor([0.1,0.9,0.1,1]);
    this.mBRSq = new Renderable(this.mConstColorShader);
    this.mBRSq.setColor([0.1,0.1,0.9,1]);
    this.mBLSq = new Renderable(this.mConstColorShader);
    this.mBLSq.setColor([0.1,0.1,0.1,1]);
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1]);
    gl.viewport(20, 40, 600, 300);
    gl.scissor(20, 40, 600, 300);
    gl.enable(gl.SCISSOR_TEST);
    gEngine.Core.clearCanvas([0.8, 0.8, 0.8, 1.0]);
    gl.disable(gl.SCISSOR_TEST);
    var viewMatrix = mat4.create();
    var projMatrix = mat4.create();
    mat4.lookAt(viewMatrix, [20, 60, 10], [20, 60, 0], [0, 1, 0]);
    mat4.ortho(projMatrix, -10, 10, -5, 5, 0, 1000);
    var vpMatrix = mat4.create();
    mat4.multiply(vpMatrix, projMatrix, viewMatrix);
    this.mBlueSq.getXForm().setPosition(20, 60);
    this.mBlueSq.getXForm().setRotationInRad(0.2);
    this.mBlueSq.getXForm().setSize(5, 5);
    this.mBlueSq.draw(vpMatrix);
    this.mRedSq.getXForm().setPosition(20, 60);
    this.mRedSq.getXForm().setSize(2, 2);
    this.mRedSq.draw(vpMatrix);
    this.mTLSq.getXForm().setPosition(10, 65);
    this.mTLSq.draw(vpMatrix);
    this.mTRSq.getXForm().setPosition(30, 65);
    this.mTRSq.draw(vpMatrix);
    this.mBRSq.getXForm().setPosition(30, 55);
    this.mBRSq.draw(vpMatrix);
    this.mBRSq.getXForm().setPosition(10, 55);
    this.mBRSq.draw(vpMatrix);
}