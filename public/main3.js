// This javascript is about creating objects, storing in an array and then adding it to the database
const create = document.getElementById('create')
const vendingMachine = []

create.addEventListener('click', function(){
let album = getElementById('album').value
let price = getElementById('price').value

class Album {
  constructor(album, price){
    this.album = album;
    this.quantity = 0;
    this.price = price;
  }

  inventory(){
    fetch('vend', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'album': `${this.album}`
        console.log(`${this.album}`)
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  }
}
});


const scorpion = new Album("Scorpion", 10.99)
const kod = new Album("KOD", 10.99)
const forestHill = new Album("2014 Forest Hill Drive", 12.99)
const damn = new Album("DAMN", 14.99)
const kids = new Album("Kids See Ghosts", 12.99)
