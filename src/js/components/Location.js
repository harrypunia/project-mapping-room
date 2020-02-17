class Location {
  constructor(x, y, z, rx, ry, rz) {
    Object.assign(this, {x, y, z, rx, ry, rz});
  }

  getPosArr = () => ([this.x, this.y, this.z]);

  getRotArr = () => ([this.rx, this.ry, this.rz]);
}

export default Location;