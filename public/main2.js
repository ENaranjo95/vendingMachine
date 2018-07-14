// This javascript deals with calling on objects
const name = "Edwin"
var plus = document.getElementsByClassName("fa-plus");
var trash = document.getElementsByClassName("fa-trash");
var button = document.getElementsByTagName("button")
var submit = document.getElementById('submit')
let bank = 0;

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

submit.addEventListener('click', (e) => {
  e.preventDefault()
  var number = parseInt(document.getElementById('num').value)
  console.log(number)
  if(number === 01){
    console.log(`This album ${scorpion.name} is valued at this ${scorpion.price}`)
    scorpion.inventory(scorpion.name, scorpion.price)
    scorpion.profit(name, scorpion.price)
  }else if(number === 02){
    console.log(`This album ${kod.name} is valued at this ${kod.price}`)
    kod.inventory(kod.name, kod.price)
    kod.profit(name, kod.price)
  }
  else if(number === 03){
    console.log(`This album ${forest.name} is valued at this ${forest.price}`)
    forest.inventory(forest.name, forest.price)
    forest.profit(name, forest.price)
  }else if(number === 04){
    console.log(`This album ${damn.name} is valued at this ${damn.price}`)
    damn.inventory(damn.name, damn.price)
    damn.profit(name, damn.price)
  }else if( number === 05){
    console.log(`This album ${kids.name} is valued at this ${kids.price}`)
    kids.inventory(kids.name, kids.price)
    kids.profit(name, kids.price)
  }else{
    alert('Not A Option!')
  }
});

let scorpion = {
  name: "Scorpion",
  quantity: 0,
  price: 10.99,

  inventory: function(album, price){
    console.log(price)
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
  },
  profit: function(name, price){
    fetch('mula', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
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
}

let kod = {
  name: "KOD",
  quantity: 0,
  price: 10.99,

  inventory: function(album, price){
    console.log(price)
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
  },
  profit: function(name, price){
    fetch('mula', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
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
}

let forest = {
  name: "2014 Forest Hill Drive",
  quantity: 0,
  price: 10.99,

  inventory: function(album, price){
    console.log(price)
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
  },
  profit: function(name, price){
    fetch('mula', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
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
}

let damn = {
  name: "Damn",
  quantity: 0,
  price: 10.99,

  inventory: function(album, price){
    console.log(price)
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
  },
  profit: function(name, price){
    fetch('mula', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
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
}

let kids = {
  name: "Kids See Ghosts",
  quantity: 0,
  price: 10.99,

  inventory: function(album, price){
    console.log(price)
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
  },
  profit: function(name, price){
    fetch('mula', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
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
}
