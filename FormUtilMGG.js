function campoNumericoMGG(v){

    v=v.replace(/\D/g,"");
    return v;

}

function mascaraCEPMGG(v){

    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{5})(\d)/,"$1-$2");
    return v;

}

function mascaraCNPJMGG(v){

    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/,"$1.$2");
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2");
    v=v.replace(/(\d{4})(\d)/,"$1-$2");
    return v;

}

function mascaraCPFMGG(v){

    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return v;

}

function mascaraDinheiroMGG(v){

    v=v.replace(/\D/g,"");
    v=v.replace(/^(0)(0)/g,"$2");
    v=v.replace(/^(\d\d)$/g,"0.$1");
    v=v.replace(/^(0)([1-9].[0-9])/g,"$2");
    v=v.replace(/(\d)(\d\d)$/g,"$1.$2");
    v=v.replace(/(\d*)/g,"$1");
    if (v.length == 1) v="0.0"+v;
    if(isNaN(parseFloat(v))) return "R$ 0,00";
    v = parseFloat(v).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return v;
	
}

function mascaraTelefoneMGG(v){
 
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;

}

function validaEmailMGG(v){

    strMail = v;
    re = /^[^@]+@[^@]+.[a-z]{2,}$/i;
    if(strMail.search(re) == -1) return false;
    return true;

}

function validaCEPMGG(cep){

    //SÃO 8 CARACTERES MAIS "-"  XXXXX-XXX 
    if(cep.length == 9) return true;
    return false;

}

function validaCPFMGG(v){

    var i;
    exp = /\.|\-/g;
    s = v.replace(exp, "");

    if (s == "00000000000" || 
        s == "11111111111" || 
        s == "22222222222" ||
        s == "33333333333" || 
        s == "44444444444" || 
        s == "55555555555" ||
        s == "66666666666" || 
        s == "77777777777" || 
        s == "88888888888" ||
        s == "99999999999") return false;

    var c = s.substr(0,9);
    var dv = s.substr(9,2);
    var d1 = 0;

    for (i = 0; i < 9; i++) d1 += c.charAt(i)*(10-i);
    if (d1 == 0) return false;

    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(0) != d1) return false;

    d1 *= 2;
    for (i = 0; i < 9; i++) d1 += c.charAt(i)*(11-i);

    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(1) != d1) return false;

    return true;

}

function validaCNPJMGG(v){

    var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;

    cnpj = v;
    exp = /\D/g;
    cnpj = cnpj.replace(exp, "");
    
    if (cnpj.length < 14 && cnpj.length < 15) return false;

    digitos_iguais = 1;
    for (i = 0; i < cnpj.length - 1; i++){

        if (cnpj.charAt(i) != cnpj.charAt(i + 1)){
            
            digitos_iguais = 0;
            break;

        }

    }
    if(digitos_iguais) return false; 

    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--){

        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
            
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--){

        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
        pos = 9;

    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) return false;

    return true;
    
}
    
