var canvas;
var gl;
var program;
var vPosition;

var letter1vertices, letter2vertices;
var buffer1, buffer2;

var translation = [0.0, 0.0];
var scale = [1.0, 1.0];
var color = [0.5, 0.5, 0.5]; // Varsayılan gri renk

window.onload = function init() {
  canvas = document.getElementById("gl-canvas");

  gl = WebGLUtils.setupWebGL(canvas);
  if (!gl) {
    alert("WebGL isn't available");
  }

  //  Configure WebGL
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(1.0, 1.0, 1.0, 1.0);

  //  Load shaders and initialize attribute buffers
  program = initShaders(gl, "vertex-shader", "fragment-shader");
  gl.useProgram(program);

  vPosition = gl.getAttribLocation(program, "vPosition");

  // Create geometry data for the letters "Y" and "U"
  letter1vertices = [
    vec2(-0.5, -0.4),
    vec2(0.0, 0.4),
    vec2(-0.5, 0.4),
    vec2(0.5, -0.4),
  ];

  letter2vertices = [
    vec2(-0.5, 0.4),
    vec2(0.0, 0.4),
    vec2(0.5, 0.4),
    vec2(-0.5, -0.4),
    vec2(0.5, -0.4),
  ];

  // Load the data into the GPU
  buffer1 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer1);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(letter1vertices), gl.STATIC_DRAW);

  buffer2 = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer2);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(letter2vertices), gl.STATIC_DRAW);

  // Event listeners for sliders to adjust translation, scale, and color
  document.getElementById("posX").oninput = function (event) {
    translation[0] = parseFloat(event.target.value);
    render();
  };
  document.getElementById("posY").oninput = function (event) {
    translation[1] = parseFloat(event.target.value);
    render();
  };
  document.getElementById("scaleX").oninput = function (event) {
    scale[0] = parseFloat(event.target.value);
    render();
  };
  document.getElementById("scaleY").oninput = function (event) {
    scale[1] = parseFloat(event.target.value);
    render();
  };
  document.getElementById("redSlider").oninput = function (event) {
    color[0] = parseFloat(event.target.value);
    render();
  };
  document.getElementById("greenSlider").oninput = function (event) {
    color[1] = parseFloat(event.target.value);
    render();
  };
  document.getElementById("blueSlider").oninput = function (event) {
    color[2] = parseFloat(event.target.value);
    render();
  };

  render(); // Initial render
};

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Set uniforms for translation, scale, and color
  var translationLocation = gl.getUniformLocation(program, "u_translation");
  gl.uniform2fv(translationLocation, translation);

  var scaleLocation = gl.getUniformLocation(program, "u_scale");
  gl.uniform2fv(scaleLocation, scale);

  var colorLocation = gl.getUniformLocation(program, "u_color");
  gl.uniform3fv(colorLocation, color);

  // Draw the letter "Y"
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer1);
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter1vertices.length);

  // Draw the letter "U"
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer2);
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, letter2vertices.length);
}
