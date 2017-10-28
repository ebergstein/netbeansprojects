/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function SimpleShader(vertexShaderID, fragmentShaderID){
    this.mCompiledShader = null;
    this.mShaderVertexPositionAttribute = null;
    var gl = gEngine.Core.getGL();
    var vertexShader = this._loadAndCompileShader(vertexShaderID, gl.VERTEX_SHADER);
    var fragmentShader = this._loadAndCompileShader(fragmentShaderID, gl.FRAGMENT_SHADER);
    this.mCompiledShader = gl.createProgram();
    gl.attachShader(this.mCompiledShader, vertexShader);
    gl.attachShader(this.mCompiledShader, fragmentShader);
    gl.linkProgram(this.mCompiledShader);
    if(!gl.getProgramParameter(this.mCompiledShader, gl.LINK_STATUS)){
        alert("Error linking shader");
        return null;
    }
    this.mShaderVertexPositionAttribute = gl.getAttribLocation(this.mCompiledShader, "aSquareVertexPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, gEngine.VertexBuffer.getGLVertexRef());
    gl.vertexAttribPointer(this.mShaderVertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
}

SimpleShader.prototype._loadAndCompileShader = function(id, shaderType){
    var shaderText, shaderSource, compliedShader;
    var gl = gEngine.Core.getGL();
    shaderText = document.getElementById(id);
    shaderSource = shaderText.firstChild.textContent;
    compiledShader = gl.createShader(shaderType);
    gl.compileShader(compiledShader);
    if(!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)){
        alert("A shading compiling error occurred:" + gl.getShaderInfoLog(compiledShader));
    }
    return compiledShader;
};

SimpleShader.prototype.activateShader = function(){
    var gl = gEngine.Core.getGL();
    gl.useProgram(this.mCompiledShader);
    gl.enableVertexAttribArray(this.mShaderVertexPositionAttribute);
};

SimpleShader.prototype.getShader = function(){ return this.mCompiledShader; };