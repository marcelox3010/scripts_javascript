/*

    FUNÇÃO PARA VALIDA CNPJ
    SE RETORNAR FALSE O CNPJ NÃO É VÁLIDO. SE RETORNAR TRUE O CNPJ É VÁLIDO.
    
    FUNCTION TO VALIDATE CNPJ    
    IF RETURNS FALSE THE CNPJ NUMBER IS NOT VALID. IF RETURNS TRUE THE CNPJ IS VALID.

*/


function valida_cnpj(cnpj){
      var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
      
      
       cnpj = document.getElementById('cnpj').value;
      
     
       exp = /\D/g;
          cnpj = cnpj.replace( exp, "" );
      
      
       digitos_iguais = 1;
      if (cnpj.length < 14 && cnpj.length < 15)
            return false;
      for (i = 0; i < cnpj.length - 1; i++)
            if (cnpj.charAt(i) != cnpj.charAt(i + 1))
                  {
                  digitos_iguais = 0;
                  break;
                  }
      if (!digitos_iguais)
            {
            tamanho = cnpj.length - 2
            numeros = cnpj.substring(0,tamanho);
            digitos = cnpj.substring(tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--)
                  {
                  soma += numeros.charAt(tamanho - i) * pos--;
                  if (pos < 2)
                        pos = 9;
                  }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
               {
            alert('CNPJ inválido - 1 ');
               return false;}

            tamanho = tamanho + 1;
            numeros = cnpj.substring(0,tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--)
                  {
                  soma += numeros.charAt(tamanho - i) * pos--;
                  if (pos < 2)
                        pos = 9;
                  }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                  {
            alert('CNPJ inválido - 2 ');
               return false;}

            return true;
            }
      else{
            alert('CNPJ inválido - 3');
               return false;
               }
      }
