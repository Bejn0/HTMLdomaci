function validacijaForme() {
    let ime = document.forms["MojaForma"]["name"].value;
    let mejl = document.forms["MojaForma"]["email"].value;
    let tEria = document.forms["MojaForma"]["poruka"].value;
    
    if (ime == "") {
      alert("Polje 'Ime' mora biti popunjeno");
      return false;
    }else if(mejl==""){
        alert("Polje 'Email' mora biti popunjeno");
        return false;
    }else if(tEria==""){
      alert("Polje 'Poruka' mora biti popunjeno");
      return false;
  }else if(String(mejl).includes("@") && (String(mejl).includes("gmail") || String(mejl).includes("hotmail"))){
    return true;
  }else{
    alert("Polje 'Email' nije ispravo popunjeno!");
  }
  }