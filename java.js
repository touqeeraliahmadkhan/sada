function showResult(){
    let goatZakat = document.getElementById('zakat').value;
    let result;
    if(goatZakat<=39){
        result="0 goat"
    }
    else if(goatZakat<=120){
        result="1 goat"
    }
    
    else if (goatZakat<=200){
        result="2 Goat"
    }
    else if(goatZakat<=399){
        result="3 Goat"
    }
    else if (goatZakat<=500 ){
        result="4 Goat"
    }
    else if (goatZakat<=600){
        result="5 Goat"
    }
    else if (goatZakat<=700){
        result="6 Gost"
    }
    else if (goatZakat<=800){
        result="7 Gost"
    }
    else if (goatZakat<=900){
        result="8 Gost"
    }
    else if (goatZakat<=1000){
        result="9 Gost"
    }





















    document.getElementById('showResult').innerText=result;
} 