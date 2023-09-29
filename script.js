window.addEventListener('DOMContentLoaded', () => {
  
    let gridArr
    let box1
    let box2 
    let box3 
    let box4 
    let box5 
    let box6 
    let box7 
    let box8
    let box9 
    let box1Value
    let box2Value
    let box3Value 
    let box4Value 
    let box5Value 
    let box6Value 
    let box7Value 
    let box8Value
    let box9Value 
    let scoreX
    let scoreO

    function getInfo(){
        let x =document.getElementById('x')
        let o =document.getElementById('o')
        let restart = document.getElementById('restart')
         box1 = document.getElementById('gridBox1')
         box2 = document.getElementById('gridBox2')
         box3 = document.getElementById('gridBox3')
         box4 = document.getElementById('gridBox4')
         box5 = document.getElementById('gridBox5')
         box6 = document.getElementById('gridBox6')
         box7 = document.getElementById('gridBox7')
         box8 = document.getElementById('gridBox8')
         box9 = document.getElementById('gridBox9')
        box1Value=box1.textContent
        box2Value=box2.textContent
        box3Value=box3.textContent
        box4Value=box4.textContent 
        box5Value=box5.textContent
        box6Value=box6.textContent 
        box7Value=box7.textContent
        box8Value=box8.textContent
        box9Value=box9.textContent
        scoreX=0
        scoreO =0
        let grid = document.querySelectorAll('gridBox')
        gridArr=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
    }


         function detectClick(){
        getInfo();
        let currentFocus = x
        x.focus();
        gridArr.forEach((item,index)=>{
            item.addEventListener('click', ()=>{
                itemText=item.textContent;
             if(itemText===""){
                    if(currentFocus===x){
                    item.textContent="x";
                    }
                    else if(currentFocus===o){
                    item.textContent='o';
                    }
                 if(currentFocus===x){
                    currentFocus=o;
                    o.focus();
                  }
                 else if(currentFocus===o){
                        currentFocus=x;
                       x.focus();
                 }
              }
              winingFormula();
              if(checkTie()){
                console.log("tie");
                restartGame();
              }
            })
        })
        btnRestart();
        }

        function restartGame(){
            gridArr.forEach((item)=>{
                item.textContent='';
            })
        }
       
        function btnRestart(){
                getInfo();
                restart.addEventListener('click',()=>{
                gridArr.forEach((item)=>{
                    item.textContent="";

            })
        });
    }
        function winingFormula(){
            getInfo();
            if(
                (box1Value==="x" && box2Value==="x" && box3Value==="x") ||
                (box4Value==="x" && box5Value==="x" && box6Value==="x") ||
                (box7Value==="x" && box8Value==="x" && box9Value==="x") ||
                (box1Value==="x" && box4Value==="x" && box7Value==="x") ||
                (box2Value==="x" && box5Value==="x" && box8Value==="x") ||
                (box3Value==="x" && box6Value==="x" && box9Value==="x") ||
                (box1Value==="x" && box5Value==="x" && box9Value==="x") ||
                (box3Value==="x" && box5Value==="x" && box7Value==="x")
            )
            {
                scoreX= scoreX+1
                restartGame();
            }
            else if(
                (box1Value==="o" && box2Value==="o" && box3Value==="o") ||
                (box4Value==="o" && box5Value==="o" && box6Value==="o") ||
                (box7Value==="o" && box8Value==="o" && box9Value==="o") ||
                (box1Value==="o" && box4Value==="o" && box7Value==="o") ||
                (box2Value==="o" && box5Value==="o" && box8Value==="o") ||
                (box3Value==="o" && box6Value==="o" && box9Value==="o") ||
                (box1Value==="o" && box5Value==="o" && box9Value==="o") ||
                (box3Value==="o" && box5Value==="o" && box7Value==="o")
            )
            {
                scoreO = scoreO+1
                restartGame();
            }
        }
        function checkTie(){
            for(let item of gridArr){
                if (item.textContent===""){
                    return false
                }
            }
                return true
        }
        function displayScore(){
            let scoreBoardX=document.getElementById('scoreX')
            let scoreBoardO=document.getElementById('scoreO')
            scoreBoardX.textContent= "X has "+ scoreX + "wins";
            scoreBoardO.textContent= "O has "+ scoreO+ "wins";
        }

    detectClick();
    displayScore();
});


