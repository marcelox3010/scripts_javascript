/*

    MÁSCARA PARA O CAMPO CEP

*/

function MascaraCep(v){
            
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{5})(\d)/,"$1-$2");
              
    return v;

}