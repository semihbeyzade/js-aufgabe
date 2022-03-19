
  class TV {
    #channel = 'Dw'
    #volume = 5
    constructor(brand) {
     this.brand = brand
    }
    increaseTheVolume(){
     return `${this.#volume + 1}`

    }
    decreaseTheVolume(){
     return `${this.#volume - 1}`
    }
    nextChannel(){
      return this.#channel = 'ZDF'

    }
    previousChannel(){
     return this.#channel = 'Fox'
      
    }
    getInfoAboutTv(){
     return `The ${this.brand} TV is currently showing channel ${this.#channel}, with a volume of ${this.#volume} `
    }
  }
  
let channel1 = new TV('Panasonic')
let channel2 = new TV('Samsung')
console.log(channel1.increaseTheVolume());
console.log(channel1.decreaseTheVolume());
console.log(channel1.nextChannel());
console.log(channel1.previousChannel());
console.log(channel1.getInfoAboutTv());

console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++`);

console.log(channel2.increaseTheVolume());
console.log(channel2.decreaseTheVolume());
console.log(channel2.nextChannel());
console.log(channel2.previousChannel());
console.log(channel2.getInfoAboutTv());