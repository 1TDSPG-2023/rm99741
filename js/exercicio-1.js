const bgBtn = document.querySelector('#background-btn')

bgBtn.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

bgBtn.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'white'
})

const itemForm = document.querySelector('#item-formulario')
const itemInput = document.querySelector('#item')
const itemList = document.querySelector('#item-lista')
itemForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (itemInput.value === '') return // se o input estiver vazio, não faz nada
    const newItem = document.createElement('li')
    newItem.innerText = itemInput.value
    itemList.appendChild(newItem)
    itemInput.value = ''
})

const wolfImg = document.querySelector('#lobo-img')
const wolfBtn = document.querySelector('#lobo-botao')
wolfBtn.addEventListener('click', () => {
    let position = wolfImg.src.indexOf('lobo') + 4 // pega a posição do número
    position = Number(wolfImg.src.charAt(position)) // pega o número
    position = position === 6 ? 1 : position + 1
    wolfImg.src = `./img/lobo${position}.jpg`
})

const msgText = document.querySelector('#mensagem')
const msgBtn = document.querySelector('#mensagem-botao')
msgBtn.addEventListener('click', () => {
    msgText.innerText = 'Essas são fotos de lobos!'
    msgBtn.disabled = true
})

const gitImg = document.querySelector('#esconder-img')
const gitBtn = document.querySelector('#esconder-botao')
gitBtn.addEventListener('click', () => {
    const isHidden = gitImg.style.opacity === '0'
    gitImg.style.opacity = isHidden ? '1' : '0'
    gitBtn.innerText = isHidden ? 'Esconder Imagem' : 'Mostrar Imagem'
})