import { WFS_URL } from '../config';

class Wfs {
  constructor() {
    this.url = WFS_URL;
  }

  getFeature() {
    console.log(`getFeature(): ${this.url}`);
  }

}

export default Wfs;