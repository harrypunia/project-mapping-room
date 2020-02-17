import * as $ from "three";

class Light {
  constructor(color, opacity, loc) {
    this.mesh = new $.DirectionalLight(color, opacity);
    this.mesh.position.set(...loc.getPosArr());
    this.mesh.rotation.set(...loc.getRotArr());
  }
}

export default Light;