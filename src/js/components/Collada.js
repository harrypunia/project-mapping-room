import ColladaLoader from "three-collada-loader";

class Collada {
  constructor() {
    this.loader = new ColladaLoader();
    this.scene = null;
  }

  config = scene => this.scene = scene;

  load(path, onLoad) {
    this.loader.load(path, obj => {
      onLoad(obj.scene);
      this.scene.add(obj.scene);
    });
  }
}

export default new Collada();