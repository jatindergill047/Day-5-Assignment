// var myForm = document.getElementById("myForm");
// console.log(myForm);

var myForm = document.form;
console.log(myForm);


var score = 0;
var subBtn = document.getElementById('subButton');

subBtn.addEventListener('click', function(event) {
    
    event.preventDefault();
    var err = document.getElementById('error');
    err.innerHTML = "";
    
    
    var que1= document.getElementById('que-1').value;
    
    if(que1 == 'Ottawa' || que1 == 'ottawa') {
        score++;
        console.log('right'); 
    }
     if(que3 == ""){
        err.innerHTML = "You must Asnwer all the Quetions";
        err.style.color = 'red'; 
        return false;
    }

    

    var que2 = document.getElementById('que-2').value;
    if(que2 == 'Canada' || que2 == 'canada') {
        score++;     
        console.log('right'); 
    }
     if(que2 == ""){
        err.innerHTML = "You must Asnwer all the Quetions";
        err.style.color = 'red'; 
        return false;        
    }
    
    var que3 = document.getElementById('que-3').value;
   
    if(que3 == 'Arpanet' || que3 == 'arpanet') {
        score++;     
        console.log('right'); 
    }
     if(que3 == ""){
        err.innerHTML = "You must Asnwer all the Quetions";
        err.style.color = 'red'; 
        return false;

    }

    var radioButton = document.getElementsByName('radio');
        if(radioButton[0].checked){
        score++;          
        }
        else {
            for(var i = 0; i<radioButton.length; i++) {
                if(!radioButton[i].checked)
                {
                    err.innerHTML = "You must Asnwer all the Quetions";
                    err.style.color = 'red';
                }                
            }
        console.log("Wrong radio")
        }
    
    var checkBox = document.getElementsByName('que-5');
        if(checkBox[1].checked || checkBox[3].checked ||  checkBox[4].checked){
        console.log("ans is  Wrong")
        }
        else if (!checkBox[1].checked || !checkBox[3].checked ||  !checkBox[4].checked) {
            if(checkBox[2].checked && checkBox[0].checked){
                score++;          
                console.log("yes")     
            }
            else {
                 console.log(" yes else Wrong")
            }
        }
        else {
                console.log(" else Wrong")
        }
    console.log("Your Score is ", score);
    document.getElementById('finalScore').innerHTML = "You Score is - " + score;
    score = 0;
    
    return(true);

});
         




