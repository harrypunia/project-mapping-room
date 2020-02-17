import * as $ from "three";

class Box {
  constructor(loc, size, mat) {
    Object.assign(this, {loc, size});
    this.geo = new $.BoxGeometry(...size.getArr());
    this.mat = new $.MeshPhongMaterial(mat);
    this.mesh = new $.Mesh(this.geo, this.mat);
    this.mesh.position.set(...loc.getPosArr());
    this.mesh.rotation.set(...loc.getRotArr());
  }
}

export default Box;