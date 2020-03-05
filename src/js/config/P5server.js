class P5server {
  constructor(port) {
    this.serial = new p5.SerialPort();
    this.portName = port;
    this.data = 0;
  }

  init = () => {
    this.serial.on("data", this.fetch);
    this.serial.on("error", this.error);
    this.serial.open(this.portName, {
      baudRate: 9600
    });
  };

  error = err => {
    console.log("Something went wrong with the serial port. " + err);
  };

  fetch = () => {
    const inString = this.serial.readStringUntil("\r\n");
    if (inString.length > 0) {
      this.data = Number(inString);
    }
  };

  draw = func => func(this.data);
}

export default P5server;