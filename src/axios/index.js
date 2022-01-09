// import axios from 'axios';

class Axios {
  constructor() {
    this.number = -1;
  }

  setRandomInt(max) {
    this.number = Math.floor(Math.random() * max);
  }

  getRandom0or1() {
    // this.number = await axios.get('http://www.randomnumberapi.com/api/v1.0/random?min=0&max=1&count=1');
    this.setRandomInt(2);
    return this.number;
  }
}

export default Axios;
