deck_url = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'



//1



axios.get(deck_url)
.then(res =>{
    deck_id = res.data.deck_id
    return axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
})
.then(res =>{
    console.log(res.data.cards[0].value, " of " , res.data.cards[0].suit )
})

//2
axios.get(deck_url)
.then(res =>{
    deck_id = res.data.deck_id
    return axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
})
.then(res =>{
    console.log(res.data.cards[0].value, " of " , res.data.cards[0].suit )
    console.log(res.data.cards[1].value, " of " , res.data.cards[1].suit )

})



//3
btn = document.querySelector("#btn")

btn.addEventListener('click',(e)=>{
    e.preventDefault()
axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
.then(res=>{
    let img = res.data.cards[0].images.png
    console.log(img)
    var imgtag = document.createElement('img')
    imgtag.setAttribute('src', img)
    document.querySelector('#content').append(imgtag)
})

})