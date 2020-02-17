import Light from "../components/Light";
import Location from "../components/Location";
import Env from "../env/Env";
import Camera from "./Camera";
import Renderer from "./Renderer";
import Scene from "./Scene";

class App {
  constructor() {
    this.camera = new Camera(40);
    this.scene = new Scene();
    this.renderer = new Renderer();
    this.env = new Env();
    this.lightA = new Light(0xffffff, 0.7, new Location(100, 100, 100, 0, 0, 0));
    this.lightB = new Light(0xffffff, 0.2, new Location(-100, 100, 100, 0, 0, 0));
  }

  init = () => {
    this.camera.init();
    this.renderer.init();
    this.scene.add(this.env.group);
    this.scene.add(this.lightA.mesh);
    this.scene.add(this.lightB.mesh);
  };

  render = () => {
    this.renderer.mesh.render(this.scene.mesh, this.camera.mesh);
    this.env.render();
    requestAnimationFrame(this.render);
  };
}

export default new App();