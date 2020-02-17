import * as $ from "three";
import Box from "../components/Box";
import Location from "../components/Location";
import Size from "../components/Size";

class Room {
  constructor(size) {
    this.group = new $.Group();
    this.walls = [];
    this.couch = null;
    this.fall = false;
    this.init();
  }

  init() {
    this.generate();
    for (let wall of this.walls) this.group.add(wall.mesh);
    this.group.add(this.couch.mesh);
    this.group.rotation.x = 0;
    this.group.position.y = 0;
  }

  render() {
    if (this.couch.mesh.position.y > 0) this.fall = true;
    if (this.couch.mesh.position.y < -20) this.fall = false;
    this.fall ? this.couch.mesh.position.y -= 0.5 : this.couch.mesh.position.y += 0.5;
  }

  generate = () => {
    this.walls[0] = new Box(new Location(-18, 0, 0, 0, .78, 0), new Size(50, 55, 2), {color: 0x00ff00, wireframe: false});
    this.walls[1] = new Box(new Location(18, 0, 0, 0, 2.35, 0), new Size(50, 55, 2), {color: 0x00ff00, wireframe: false});
    this.walls[2] = new Box(new Location(0, -28, 18, 1.57, 0, .78), new Size(50, 50, 2), {color: 0xffffff, wireframe: false});
    this.couch = new Box(new Location(0, -18, 18, 1.57, 0, .78), new Size(10, 10, 10), {color: 0x00ff00, wireframe: false});
  };
}

export default Room;