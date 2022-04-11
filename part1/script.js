

let numUrl = 'http://numbersapi.com'

let numBtn = document.querySelector('#numenter')
let numInput = document.querySelector('#num')


//1
axios.get(`${numUrl}/${5}?json`).then(data => {
    console.log(data);
  });

//2

let nums = [4,5,7]
axios.get(`${numUrl}/${nums}?json`).then(res=>{
    console.log(res)
})


//3
numBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    let num = numInput.value
    let promises = []
    for(let i = 0; i < 4; i++){
        promises.push(axios.get(`${numUrl}/${num}?json`))
    }

    Promise.all(promises).then(facts => {
        
        for(fact of facts){
            document.querySelector('#content').append(`<p>${fact.data.text}</p>`)
        }
      });

    
   
})