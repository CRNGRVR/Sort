'use strict'

let items = {

    "first":{
        "title": "first",
        "price": 5,
        "selled": 1000,
        "rate": 5
    },

    "second":{
        "title": "second",
        "price": 4,
        "selled": 1200,
        "rate": 4
    },

    "third":{
        "title": "third",
        "price": 3,
        "selled": 2000,
        "rate": 3
    },

    "f":{
        "title": "f",
        "price": 2,
        "selled": 2000,
        "rate": 3
    },

    "fi":{
        "title": "fi",
        "price": 1,
        "selled": 2000,
        "rate": 3
    }
}

let content = document.querySelector('.content')

let price_btn = document.querySelector('.price_btn')
price_btn.addEventListener("click", sortByPrice)

let rate_btn = document.querySelector('.rate_btn')
price_btn.addEventListener("click", sortByRate)

let sells_btn = document.querySelector('.sells_btn')
price_btn.addEventListener("click", sortByPrice)

//  Вставка из объекта с атрибутами html
for (const key in items) {
    content.innerHTML += `<div class="item" price="${items[key]["price"]}" selled="${items[key]["selled"]}" rate="${items[key]["rate"]}">${items[key]["title"]}</div>`
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

            if(+content.children[i].getAttribute('sells') > +content.children[j].getAttribute('sells')){

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