<script>
function mascaraDinheiro(v)
{
    v=v.replace(/\D/g,"")         //Remove tudo o que n343o 351 d355gito
    v=v.replace(/^(0)(0)/g,"$2")  // Remove zeros 340 esquerda
    v=v.replace(/^(\d\d)$/g,"0.$1")
    v=v.replace(/^(0)([1-9].[0-9])/g,"$2")
    v=v.replace(/(\d)(\d\d)$/g,"$1.$2")
    v=v.replace(/(\d*)/g,"$1")
    if (v.length == 1)
            v="0.0"+v;
    
    if(isNaN(parseFloat(v))) return "R$ 0,00";
    v = parseFloat(v).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    return v
	
}
</script>
  <input type='text' 

onkeypress='javascript:this.value = mascaraDinheiro(this.value)'
                    onkeyup='javascript:this.value = mascaraDinheiro(this.value)'
                    onkeydown='javascript:this.value = mascaraDinheiro(this.value)' />
                 
                      
                     
