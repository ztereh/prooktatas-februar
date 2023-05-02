function ellenorzes(){
    cim= reg.mail.value
    if(cim.length == 0){
        alert('nem adtad meg az e-mail címed!')
    }
    ertek=reg.password.value
    if (ertek.length == 0)
    alert('Üres a jelszó mező')

    jelszohossz=reg.password.value
    if(jelszohossz.length <8 && jelszohossz.length>0)
    alert('A jelszó kevesebb, mint 8 karakter')

    jelszoegyenlo=reg.password.value, reg.password1.value
    if(reg.password.value != reg.password1.value){
        alert('a két jelszó nem egyezik')
    }
    
    ir=reg.irszam.value
    if (isNaN(ir)){
        alert('nem szam')
    }
    szulev=reg.születésiéved.value
    if (szulev.length !=4){
    alert('születési évnek több vagy kevesebb, mint 4 számot írtál be')
    }

szulminmax=reg.születésiéved.value
if(szulminmax <1900 || szulminmax >2023){
    alert('születési év 1900 és 2023 között lehetséges')
}
}


