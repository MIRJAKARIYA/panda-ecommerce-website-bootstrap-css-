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

//image chainging on mouseenter
const oldImgArray = ['images/shoes/shoe-1.png','images/shoes/shoe-2.png','images/shoes/shoe-3.png','images/bags/bag-1.png','images/bags/bag-2.png','images/bags/bag-3.png']
const imgArray = ['extra-image/extra1.jpg','extra-image/extra2.jpeg','extra-image/extra3.jpg','extra-image/extra4.jpeg','extra-image/extra5.jpg','extra-image/extra6.jpg'];
const imgChange = document.getElementsByClassName('img-change');
for(let i = 0;i<imgChange.length;i++){
    imgChange[i].addEventListener('mouseenter',function(event){
        event.target.setAttribute('src',imgArray[i]);
    });
    imgChange[i].addEventListener('mouseleave',function(event){
        event.target.setAttribute('src',oldImgArray[i]);
    });
};

//changing the subscribe section background color on double click
const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick',function(event){
    const targetId = event.target.getAttribute('id');
    if(targetId == 'subscribe'){
        subscribe.classList.toggle('backgroundChange');
    }
})
