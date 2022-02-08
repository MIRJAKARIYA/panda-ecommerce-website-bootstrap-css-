//making all h2 lightblue
const lightblue = document.getElementsByTagName('h1');
for(const light of lightblue){
    light.style.color = 'lightblue'
}

//backpack section background color change
document.getElementById('bags').style.backgroundColor = 'tomato';

//changing card border radius to 30px
const cards = document.getElementsByClassName('card');
for(let i = 0;i<cards.length;i++){
    cards[i].style.borderRadius = '30px';
}
//function for simple output in console
document.getElementById('shoe1').addEventListener('click',simpleOutput);
function simpleOutput(){
    console.log('hi shoe 1 button is clicked');
}

//buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়।
const allButtonClass = document.getElementsByClassName('removecc');
console.log(allButtonClass);
for(const button of allButtonClass){
    button.addEventListener('click',function(event){
        event.target.style.display = 'none';
    })
}

//enabling sbmit button when required condition is fulfilled
const forminput = document.getElementById('exampleFormControlInput1');
const sumbmitButton = document.getElementById('submit--button');
forminput.addEventListener('keyup',function(event){
    if(event.target.value == 'email'){
        sumbmitButton.removeAttribute('disabled');
    }
    else{
        sumbmitButton.setAttribute('disabled',true);
    }
})