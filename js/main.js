var elform = document.querySelector('.form');
var elinput = document.querySelector('.input');
var elselect = document.querySelector('.select');
var eltitle = document.querySelector('.title')

var DOLOR_SUM = 11225;
var RUBLE_SUM = 184;
var EVRO_SUM =11684;




elform.addEventListener('submit',function(evt){
    evt.preventDefault(); 
    
    var elinputi = +elinput.value;
    var DOLLOR = elinput.value / DOLOR_SUM;
    var RUBL = elinput.value / RUBLE_SUM;
    var EVRO = elinput.value / EVRO_SUM;





    if(elselect.value == 1){
    eltitle.textContent = `${elinputi } SO'M = $ ${DOLLOR.toFixed(4)}`

    }  else if(elselect.value == 2){
        eltitle.textContent = `${elinputi } SO'M = ₽  ${RUBL.toFixed(4)}`
    
        } else if(elselect.value == 3
            ){
            eltitle.textContent = `${elinputi } SO'M = € ${EVRO.toFixed(4)}`
        
        }  else if(elselect.value == isNaN(Number)==true){
            eltitle.textContent = 'son kiriting'; 
        }






   

    else{
        eltitle.textContent=('Qiymatlar tanlanmadi');
    }
   

    // console.log(+elselect.value / +elinput.value);
});

