// alert('connected!')

var numSquare = 6
var squares = document.querySelectorAll(".square") ; 
var colors = ColorsGenerator(numSquare) ; 
var pickedcolor = pickedColor() ; 
var modebtn = document.querySelectorAll(".mode") ; 

document.querySelector('#resetbtn').addEventListener('click' , function(){
    reset();
});

for(var i = 0 ; i < modebtn.length ; i++){
    modebtn[i].addEventListener('click' , function(){
        // modebtn[0].classList.add('selected');
        // modebtn[1].classList.remove('selected');
        this.classList.add('selected'); 

        // if(this.textContent === 'EASY'){
        //     numSquare = 3 ; 
        // }else{
        //     numSquare = 6 ; 
        // }
        this.textContent === 'EASY'? numSquare = 3 : numSquare = 6 ; // 三元運算寫法
        reset() ; 
    })
}

// document.querySelector("#easybtn").addEventListener('click' , function(){
//     document.querySelector("#easybtn").classList.add('selected') ; 
//     document.querySelector("#hardbtn").classList.remove('selected') ; 

//     numSquare = 3 ; 
//     colors = ColorsGenerator(numSquare) ; 
//     pickedcolor = pickedColor() ; 
//     document.querySelector("#colorAnswer").textContent = pickedcolor ; 
//     for(var i = 0 ; i < squares.length ; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i] ;
//         }else{
//             squares[i].style.display = 'none' ; 
//         } ; 
//     }
//     document.querySelector("h1").style.backgroundColor = "#52ACAA" ; 
// })

// document.querySelector("#hardbtn").addEventListener('click' , function(){
//     document.querySelector("#easybtn").classList.remove('selected') ; 
//     document.querySelector("#hardbtn").classList.add('selected') ; 

//     numSquare = 6
//     colors = ColorsGenerator(numSquare) ; 
//     pickedcolor = pickedColor() ; 
//     document.querySelector("#colorAnswer").textContent = pickedcolor ; 
//     for(var i = 0 ; i < squares.length ; i++){
//         squares[i].style.backgroundColor = colors[i] ; 
//         squares[i].style.display = 'block' ; 
//     } ; 
//     document.querySelector("h1").style.backgroundColor = "#52ACAA" ; 
// })



document.querySelector("#colorAnswer").textContent = pickedcolor ; 
for(var i = 0 ; i < colors.length ; i++){
    squares[i].style.backgroundColor = colors[i] ; 
    // click the square
    squares[i].addEventListener('click' , function(){
        if(this.style.backgroundColor === pickedcolor){
            // 1. if color is correct , change all square to correct color
            changeColor() ; 
            document.querySelector('.message').textContent = 'Correct!' ; 
            document.querySelector('#resetbtn').textContent = 'Play Again' ; 
        }else{
            // 2. if color is wrong , change the color of square to background color
            this.style.backgroundColor =  document.querySelector("body").style.backgroundColor ; 
            document.querySelector('.message').textContent = 'Try Again' ; 
        }    
});
}




function changeColor(){
    document.querySelector("h1").style.backgroundColor = pickedcolor ; 
    squares.forEach(function(element) {
        element.style.backgroundColor = pickedcolor;
      });
}


function pickedColor(){
    return colors[Math.floor(Math.random() * colors.length)] ; 
}

function ColorsGenerator(num){
    arr = [] ; 
    for(var i = 0 ; i < num ; i++){
        arr.push(randomColor()) ; 
    }
    return arr ; 
}

function randomColor(){
    var r = Math.floor(Math.random()*256);          // Random between 0-255
    var g = Math.floor(Math.random()*256);          // Random between 0-255
    var b = Math.floor(Math.random()*256);          // Random between 0-255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'; // Collect all to a string
}

function reset(){
    colors = ColorsGenerator(numSquare) ; 
    pickedcolor = pickedColor() ; 
    document.querySelector("#colorAnswer").textContent = pickedcolor ; 
    document.querySelector('.message').textContent = '' ; 
    this.textContent = 'new color' ; 
    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.display = 'block' ; 
            squares[i].style.backgroundColor = colors[i] ;
        }else{
            squares[i].style.display = 'none' ; 
        } ; 
        squares[i].style.backgroundColor = colors[i] ; 
    } ; 

    document.querySelector("h1").style.backgroundColor = "#52ACAA" ; 
}

