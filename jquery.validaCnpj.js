jQuery.fn.validacnpj = function(){
  this.change(function(){
    CNPJ = $(this).val();
    if(!CNPJ){ return false;}
    erro = new String;
    if(CNPJ == "00.000.000/0000-00"){ erro += "CNPJ inválido\n\n";}
    CNPJ = CNPJ.replace(".","");
    CNPJ = CNPJ.replace(".","");
    CNPJ = CNPJ.replace("-","");
    CNPJ = CNPJ.replace("/","");

    var a = [];
    var b = new Number;
    var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
    for(i=0; i<12; i++){
      a[i] = CNPJ.charAt(i);
      b += a[i] * c[i+1];
    }
    if((x = b % 11) < 2){
      a[12] = 0
    }else{
      a[12] = 11-x
    }
    b = 0;
    for(y=0; y<13; y++){
      b += (a[y] * c[y]);
    }
    if((x = b % 11) < 2){
      a[13] = 0;
    }else{
      a[13] = 11-x;
    }
    if((CNPJ.charAt(12) != a[12]) || (CNPJ.charAt(13) != a[13])){ erro +="Dígito verificador com problema!";}
    if (erro.length > 0){
      $(this).val('');
      alert(erro);
      setTimeout(function(){ $(this).focus()},50);
    }
    return $(this);
  });
}