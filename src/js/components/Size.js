class Size {
  constructor(w, h, d) {
    Object.assign(this, {w, h, d});
  }

  getArr = () => ([this.w, this.h, this.d]);
}

export default Size;