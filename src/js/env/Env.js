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
    window.addEventListener("click", () => {
      const rng = Math.ceil(Math.random() * 2);
      this.room.toggleCouch(rng);
    });
  }

  render() {
    this.room.render();
  }
}

export default Env;