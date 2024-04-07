const canvas = document.getElementById("gl-canvas");
const gl = canvas.getContext("webgl");

// Get references to sliders and color picker
const colorPicker = document.getElementById("color-picker");
const xSlider = document.getElementById("x-slider");
const ySlider = document.getElementById("y-slider");
const scaleSlider = document.getElementById("scale-slider");

// Function to create a shader
function createShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!success) {
    console.error("Error compiling shader:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

// Vertex shader source
const vertexShaderSource = `
  attribute vec2 a_position;
  attribute vec3 a_color;
  uniform vec2 u_translation;
  uniform float u_scale;
  varying vec3 v_color;

  void main() {
    vec2 translatedPosition = a_position * u_scale + u_translation;
    gl_Position = vec4(translatedPosition, 0.0, 1.0);
    v_color = a_color;
  }
`;

// Fragment shader source
const fragmentShaderSource = `
  precision mediump float;
  varying vec3 v_color;

  void main() {
    gl_FragColor = vec4(v_color, 1.0);
  }
`;

// Create vertex and fragment shaders
const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

// Create shader program
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
const success = gl.getProgramParameter(program, gl.LINK_STATUS);
if (!success) {
  console.error("Error linking program:", gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

gl.useProgram(program);

// Get attribute locations
const aPosition = gl.getAttribLocation(program, "a_position");
const aColor = gl.getAttribLocation(program, "a_color");

// Get uniform locations
const uTranslation = gl.getUniformLocation(program, "u_translation");
const uScale = gl.getUniformLocation(program, "u_scale");

// Define initial letter vertices (replace with your initials)
const letterA = [
  // Bottom left
  -0.5,
  -0.5,
  0.0,
  1.0,
  0.0, // Blue color

  // Top left
  -0.5,
  0.5,
  0.0,
  1.0,
  0.0,

  // Top right
  0.2,
  0.5,
  0.0,
  1.0,
  0.0,

  // Bottom right
  0.2,
  -0.2,
  0.0,
  1.0,
  0.0,

  // Middle right
  0.2,
  0.2,
  0.0,
  1.0,
  0.0, // Connect top and bottom parts
  -0.5,
  0.0,
  0.0,
  1.0,
  0.0, // Connect left side
];
