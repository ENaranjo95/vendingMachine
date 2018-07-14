var plus = document.getElementsByClassName("fa-plus");
var trash = document.getElementsByClassName("fa-trash");
var button = document.getElementsByTagName("button")
var submit = document.getElementById('submit')
var submitTwo = document.getElementById("submitNew")
let album;
let cash = 0;

Array.from(plus).forEach(function(element) {
  console.log(plus)
  element.addEventListener('click', function(){
    const album = this.parentNode.parentNode.childNodes[1].innerText
    const quantity = parseInt(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('admin', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'album': album,
        'quantity': quantity
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log('works')
        const album = this.parentNode.parentNode.childNodes[1].innerText
        fetch('remove', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'album': album
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
//user input event listener
submit.addEventListener('click', (e) => {
  e.preventDefault()
  var number = parseInt(document.getElementById('num').value)
  console.log(number)
  if(number === 01){
    choice("Scorpion")
  }else if(number === 02){
    choice("Kids See Ghosts")
  }
  else if(number === 03){
    choice("DAMN")
  }
  else if(number === 04){
    choice("2014 Forest Hill Drive")
  }
  else if( number === 05){
    choice("Daytona")
  }
  else{
    alert('Not A Option!')
  }
});

function choice(album, price){
  fetch('vend', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'album': album,
      'price': price
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

// var $$$$$ = Object.create(Album.prototype)

// submitTwo.addEventListener('click', function(e){
//   e.preventDefault()
//   var createAlbum = document.getElementById('newAlbum')
//   var createPrice = parseFloat(document.getElementById('newPrice'))
//
//   class Album {
//     constructor(album, price){
//       this.album = album;
//       this.quantity = 0;
//       this.price = price;
//     }
//   }

//   function(createAlbum, createPrice){
//     var `${createAlbum}` = new Album {
//       this.album = `${createAlbum}`;
//       this.price = `${createPrice}`;
//       this.quantity = 0;
//     function inventory(){
//     if(this.quantity > 0){
//     fetch('vend', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'album': album
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   }else{
//     alert(`This ${this.album} is out of stocks.`)
//   }
//   }
//     }
//   }
// })
