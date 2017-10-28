/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var gGL = null;

function initializeGL(){
    var canvas = document.getElementById("GLCanvas");
    gGL = canvas.getContext("webgl") || canvas.getContext("experimentalwebgl");
    if(gGL !== null){
        gGL.clearColor(0.0, 0.8, 0.0,1.0);
        initSquareBuffer();
        initSimpleShader("VertexShader", "FragmentShader");
    }
    else{
        document.write("<br><b>WebGL is not supported</b>");
    }
}

function drawSquare(){
    gGL.clear(gGL.COLOR_BUFFER_BIT);
    gGL.useProgram(gSimpleShader);
    gGL.enableVertexAttribArray(gShaderVertexPositionAttribute);
    gGL.drawArrays(gGL.TRIANGLE_STRIP, 0, 4);
}

function doGLDraw(){
    initializeGL();
    drawSquare();
}


