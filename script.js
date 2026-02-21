let btn = document.querySelectorAll('#btn')
let display = document.getElementById('display')
let clearOne = document.getElementById('clear')
let del = document.getElementById('delete')
let goRes = document.getElementById('goRes')

let result = ''

btn.forEach(function(el) {
	el.addEventListener('click', () => {
	console.log('Вы нажали на кнопку!' + el)
	result = result + el.textContent
	display.textContent = result
	})
})

clearOne.addEventListener('click', () => {
	display.textContent = display.textContent.slice(0, -1)
})

del.addEventListener('click', () => {
	result = ''
	display.textContent = 0
})

goRes.addEventListener('click', () => {
	display.textContent = eval(display.textContent)
	result = display.textContent
})