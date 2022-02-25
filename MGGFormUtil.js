function campoNumerico(v){

    v=v.replace(/\D/g,"");
    return v;

}

function mascaraCEP(v){

    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{5})(\d)/,"$1-$2");
    return v;

}

function mascaraCNPJ(v){

    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/,"$1.$2");
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2");
    v=v.replace(/(\d{4})(\d)/,"$1-$2");
    return v;

}

function mascaraCPF(v){

    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return v;

}

function mascaraDinheiro(v)
{

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

function mascaraTelefone(v){
 
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;

}

function validaEmail(email){

    strMail = email;
    re = /^[^@]+@[^@]+.[a-z]{2,}$/i;
    if(strMail.search(re) == -1) return false;
    return true;

}

function validaCPF(cpf){

    obj = cpf;
    var i;
    exp = /\.|\-/g;
    s = obj.value.replace( exp, "" );

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

function valida_cnpj(cnpj){

    var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;

    cnpj = document.getElementById('cnpj').value;
    exp = /\D/g;
    cnpj = cnpj.replace( exp, "" );
    digitos_iguais = 1;
    if (cnpj.length < 14 && cnpj.length < 15) return false;

    for (i = 0; i < cnpj.length - 1; i++)
    if (cnpj.charAt(i) != cnpj.charAt(i + 1))
    {
        digitos_iguais = 0;
        break;
    }
    if (!digitos_iguais){

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

    else return false;

}
    