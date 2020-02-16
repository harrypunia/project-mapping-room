import * as $ from 'three';

class Scene {
  constructor() {
    this.mesh = new $.Scene();
  }

  add (obj) {
    this.mesh.add(obj);
  }
}

export default Scene;