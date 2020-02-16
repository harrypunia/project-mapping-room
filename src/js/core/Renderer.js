import * as $ from "three";

class Renderer {
  constructor() {
    this.mesh = new $.WebGLRenderer({antialias: true});
  }

  init() {
    this.mesh.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.mesh.domElement);
  }
}

export default Renderer;