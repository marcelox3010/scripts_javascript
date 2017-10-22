/*

    FUNÇÃO PARA VALIDAR EMAIL EM UM FORMULÁRIO HTML
    FUNCTION TO VALIDATE EMAIL IN A HTML FORM

*/
function validaEmail(email){

    strMail = email;
    re = /^[^@]+@[^@]+.[a-z]{2,}$/i;

    if(strMail.search(re) == -1){
    
         return false;
    
    }else{

        return true;

    }
            
}