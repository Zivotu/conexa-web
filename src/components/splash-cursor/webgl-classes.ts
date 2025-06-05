import { createProgram, getUniforms, compileShader, hashCode } from './webgl-utils';

export class Material {
  vertexShader: any;
  fragmentShaderSource: string;
  programs: any[];
  activeProgram: any;
  uniforms: any;
  gl: WebGL2RenderingContext;

  constructor(gl: WebGL2RenderingContext, vertexShader: any, fragmentShaderSource: string) {
    this.gl = gl;
    this.vertexShader = vertexShader;
    this.fragmentShaderSource = fragmentShaderSource;
    this.programs = [];
    this.activeProgram = null;
    this.uniforms = {};
  }

  setKeywords(keywords: string[]) {
    let hash = 0;
    for (let i = 0; i < keywords.length; i++) hash += hashCode(keywords[i]);
    let program = this.programs[hash];
    if (program == null) {
      let fragmentShader = compileShader(
        this.gl,
        this.gl.FRAGMENT_SHADER,
        this.fragmentShaderSource,
        keywords
      );
      program = createProgram(this.gl, this.vertexShader, fragmentShader);
      this.programs[hash] = program;
    }
    if (program === this.activeProgram) return;
    this.uniforms = getUniforms(this.gl, program);
    this.activeProgram = program;
  }

  bind() {
    this.gl.useProgram(this.activeProgram);
  }
}

export class Program {
  uniforms: any;
  program: any;
  gl: WebGL2RenderingContext;

  constructor(gl: WebGL2RenderingContext, vertexShader: any, fragmentShader: any) {
    this.gl = gl;
    this.uniforms = {};
    this.program = createProgram(gl, vertexShader, fragmentShader);
    this.uniforms = getUniforms(gl, this.program);
  }

  bind() {
    this.gl.useProgram(this.program);
  }
}