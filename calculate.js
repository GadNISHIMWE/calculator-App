const inputNumber1=document.querySelector('#number1')
const inputNumber2=document.querySelector('#number2')
const answerInputBox=document.querySelector('.answer-input')
const addBtn= document.querySelector('#add-btn')
const calculateBtn= document.querySelector('.calculate-btn')
const clearBtn=document.querySelector('.clear-button')
const hourPart = document.querySelector('.hour-part')
const result = 0
const addValue = (num1,num2) =>{
    num1 = inputNumber1.Value
    num2 = inputNumber2.value
    result= num1 + num2
    answerInputBox.innerText = `answer is,${result}`
}

addBtn.onclick = () =>
    addValue()

    clearBtn.addEventListener ('onclick',() =>{
        localStorage.clear
        inputNumber1.innerHTML = ''
        inputNumber2.innerHTML = '' })

        const hourPartElement = (message) =>{
            <div class="message-timestamp">${message.d}</div>
        }

        // function timeline(){
        //    const d = new Date("july 21, 1983 01:15:00");
        //    let hour = d.getHours();

        // }
        const sendMessage = (e) => {
            e.preventDefault()
        
        const d = new Date().toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', hour12: true})
        const message={
            d
        }
        hourPart.innerHTML += hourPartElement(message)
    }
    hourPart.addEventListener('onload', sendMessage)
        
   

