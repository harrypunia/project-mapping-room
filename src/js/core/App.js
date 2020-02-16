import Camera from "./Camera";
import Renderer from "./Renderer";
import Scene from "./Scene";

class App {
  constructor() {
    this.camera = new Camera(70);
    this.scene = new Scene();
    this.renderer = new Renderer();
  }

  init = () => {
    this.camera.init();
    this.renderer.init();
  };

  render = () => {
    this.renderer.mesh.render(this.scene.mesh, this.camera.mesh);
    requestAnimationFrame(this.render);
  };
}

export default App;