class Band {
    constructor(name,genre,topHits,singer,drummer,guitarist,bassPlayer){
        this.name = name
        this.genre = genre
        this.topHits = topHits
        this.singer = singer
        this.drummer = drummer
        this.guitarist = guitarist
        this.bassPlayer = bassPlayer
    }
  music(){
       
      return `${this.name} grösste Hits waren: ${this.topHits.join(' , ')}`
  }

  set ändereWerte(wert){
      this.drummer = wert
  }

  get ändereWerte(){
      return this.änderewerte
  }

  set fügeNeueSongs(wert){
     this.topHits.push(wert)
  }
  get fügeNeueSongs(){
    
   return this.fügeneuesongs
  }
}

const band1 = new Band('Abbas', "", ['Dancing Quenn', 'Waterloo', 'Fernando'],"" , "","" ,"" ) 
console.log(band1.music());

band1.drummer = 'Marvin'
console.log(band1.drummer);

band1.fügeNeueSongs = 'Diamond'
band1.fügeNeueSongs = 'Umbrella'
console.log(band1.topHits);