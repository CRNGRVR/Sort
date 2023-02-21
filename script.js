'use strict'

let items = {

    "first":{
        "title": "First",
        "price": 5,
        "selled": 100,
        "rate": 1
    },

    "second":{
        "title": "Second",
        "price": 4,
        "selled": 100,
        "rate": 2
    },

    "third":{
        "title": "Third",
        "price": 3,
        "selled": 600,
        "rate": 3
    },

    "four":{
        "title": "Four",
        "price": 2,
        "selled": 400,
        "rate": 6
    },

    "five":{
        "title": "Five",
        "price": 1,
        "selled": 500,
        "rate": 1
    }
}


let content = document.querySelector('.content')

let price_btn = document.querySelector('.price_btn')
price_btn.addEventListener("click", sortByPrice)

let rate_btn = document.querySelector('.rate_btn')
rate_btn.addEventListener("click", sortByRate)

let sells_btn = document.querySelector('.sells_btn')
sells_btn.addEventListener("click", sortBySells)

//  Вставка из объекта с атрибутами html
for (const key in items) {
    content.innerHTML += `<div class="item" price="${items[key]["price"]}" selled="${items[key]["selled"]}" rate="${items[key]["rate"]}"><div class="text">${items[key]["title"]}</div></div>`
}


function sortByPrice(){

    for(let i = 0; i < content.children.length; i++){
        for(let j = i; j < content.children.length; j++){

            if(+content.children[i].getAttribute('price') > +content.children[j].getAttribute('price')){

                //  Эта переменная хранит заменённое значение для возвращения обратно в список
                let replaceNode = content.replaceChild(content.children[j], content.children[i])
                insertAfter(replaceNode, content.children[i])
            }
        }
    }
}

function sortByRate(){

    for(let i = 0; i < content.children.length; i++){
        for(let j = i; j < content.children.length; j++){

            if(+content.children[i].getAttribute('rate') > +content.children[j].getAttribute('rate')){

                //  Эта переменная хранит заменённое значение для возвращения обратно в список
                let replaceNode = content.replaceChild(content.children[j], content.children[i])
                insertAfter(replaceNode, content.children[i])
            }
        }
    }
}

function sortBySells(){

    for(let i = 0; i < content.children.length; i++){
        for(let j = i; j < content.children.length; j++){

            if(+content.children[i].getAttribute('selled') > +content.children[j].getAttribute('selled')){

                //  Эта переменная хранит заменённое значение для возвращения обратно в список
                let replaceNode = content.replaceChild(content.children[j], content.children[i])
                insertAfter(replaceNode, content.children[i])
            }
        }
    }
}


function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}