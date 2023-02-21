'use strict'

let items = {

    "first":{
        "title": "first",
        "price": 20,
        "selled": 1000,
        "rate": 5
    },

    "second":{
        "title": "second",
        "price": 11,
        "selled": 1200,
        "rate": 4
    },

    "third":{
        "title": "third",
        "price": 50,
        "selled": 2000,
        "rate": 3
    }
}

let content = document.querySelector('.content')

let price_btn = document.querySelector('.price_btn')
price_btn.addEventListener("click", sortByPrice)

//  Вставка из объекта с атрибутами html
for (const key in items) {
    content.innerHTML += `<div class="item" price="${items[key]["price"]}" selled="${items[key]["selled"]}" rate="${items[key]["rate"]}">${items[key]["title"]}</div>`
}

function sortByPrice(){
    
    for(let i = 0; i < content.children.length; i++){
        for(let j = 0; j < content.children.length; i++){
            if(+content.children[i].getAttribute('price') > +content.children[j].getAttribute('price')){
                
            }
        }
    }
}