import * as $ from "three";
import Room from "./Room";

class Env {
  constructor() {
    this.group = new $.Group();
    this.room = new Room();
    this.init();
  }

  add = obj => this.group.add(obj);

  init() {
    this.add(this.room.group);
  }

  render() {
    this.room.render();
  }
}

export default Env;