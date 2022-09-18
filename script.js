const form = document.querySelector('form')
const button = document.querySelector('button')
const pontuacao = document.querySelector('.pontuacao')

const respostasCorrestas = ["A","B","A","B"]

form.addEventListener('submit', getRespostasUser)


function getRespostasUser(event) {
    event.preventDefault()

    const respostasUser= [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    ]

    verificaResposta(respostasUser)
}

function verificaResposta (respostasUser){
    let score =0

    if(respostasUser.includes('')){
        alert('Selecione todas as respostas!')
    }else{
    
        respostasUser.forEach((item,i) =>{
            if(item === respostasCorrestas[i]){
                score+=25
            }
        })
        scrollToTop()
        renderPontuation(score)
    }
}

function scrollToTop(){
    window.scrollTo(0, 0)
}


function renderPontuation(score) {
    pontuacao.style.display='flex';
    
    for (let i = 0; i <= score; i++) {
   
        setTimeout(() => {
            pontuacao.innerHTML= `<h2 style="font-size: 30px;" >Sua pontuação foi de ${i}</h2>`
        }, i * 20);
    }
 
}