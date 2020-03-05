import collada from "../components/Collada";

class Room {
  constructor(size) {
    this.init();
    this.couch1 = null;
    this.couch2 = null;
    this.couch3 = null;
  }

  init() {
    collada.load("img/couch1.dae", dae => {
      dae.scale.x = dae.scale.y = dae.scale.z = 1;
      dae.position.x = 10000;
      dae.rotation.y = -1.57;
      dae.position.z = -100;
      this.couch1 = dae;
    });
    collada.load("img/couch2.dae", dae => {
      dae.scale.x = dae.scale.y = dae.scale.z = 1;
      dae.position.x = 10000;
      dae.rotation.y = -1.57;
      dae.position.z = -100;
      this.couch2 = dae;
    });
    collada.load("img/couch2.dae", dae => {
      dae.scale.x = dae.scale.y = dae.scale.z = 1;
      dae.position.x = 10000;
      dae.rotation.y = -1.57;
      dae.position.z = -100;
      this.couch3 = dae;
    });
  }

  render() {
  }

  toggleCouch = which => {
    const couch = `couch${which}`;
    this.couch1.position.x = 10000;
    this.couch2.position.x = 10000;
    this.couch3.position.x = 10000;
    this[couch].position.x = 0;
  };
}

export default Room;