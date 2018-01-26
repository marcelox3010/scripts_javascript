/*

    MÁSCARA PARA CPF
    
    EXEMPLO DE COMO CHAMAR:
    <input type='text' name='cpf1' id='id_cpf1'  maxlength='14'
            						onkeypress='javascript:this.value = mascaraCPF(this.value)'>

*/

function mascaraCPF(v){

          v=v.replace(/\D/g,"");
          v=v.replace(/(\d{3})(\d)/,"$1.$2");
          v=v.replace(/(\d{3})(\d)/,"$1.$2");                                                                               
          v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");                             
          return v;
         
}
