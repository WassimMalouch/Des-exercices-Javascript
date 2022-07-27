let nom=document.querySelector("#Nom");
let salaire=document.querySelector("#salaire");
const gender = document.querySelectorAll('input[name="g"]');
const charge = document.querySelectorAll('input[name="c"]');
const bonus = document.querySelectorAll('input[name="r"]');
let btn=document.querySelector("#btn");



function RadioSelected(Radioname){
    let selectedSize;
    for (const radioButton of Radioname) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
return(selectedSize);
}


function verif(){
    if(nom.value=="" )
        return false;
    if(isNaN(Number(salaire.value)) || Number(salaire.value)==0 )
        return false;
    if(RadioSelected(gender)!='F' && RadioSelected(gender)!='M')
        return false;
    if(RadioSelected(charge)!='3' && RadioSelected(charge)!='4')
        return false;
    if(RadioSelected(bonus)!='100' && RadioSelected(bonus)!='150')
        return false;
return true;
}








function calculSalaire(){
    s=Number(salaire.value);
    let x=s-((s*0.18)+(s*0.05)+(s*0.07));
    console.log(x);
    console.log(s);

    if(RadioSelected(gender)=='F' )
    x=x+s*0.02
    if(RadioSelected(charge)== '3')
    x=x+s*0.01
    else if(RadioSelected(charge)== '4')
    x=x+s*0.02    
    if(RadioSelected(bonus)== '100')
    x=x+100
    else if(RadioSelected(bonus)== '150')
    x=x+150

return x;
}




btn.addEventListener("click" , () => {


if (verif()){
        alert(nom.value + " votre salaire est " + calculSalaire() + "$");     
}
});



