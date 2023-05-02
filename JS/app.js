/*for (let i=0; i<11; i++){
    document.write(i, ". sor <br>" )
}

let j = 1
while (j<11){
document.write(j, ", sor <br>")
j++
} */

/*szam1 = prompt("kérek egy számot")
szam2 = prompt("kérek egy másik számot")

megerosit = confirm("Biztos kiszámolod?")

if ( szam1 > szam2 && megerosit==true){
    alert(szam1 + "nagyobb, mint" + szam2)
} else if (szam1 < szam2) {
    alert(szam1 +  " kisebb, mint " + szam2)
}
else {
    alert(" a két szám egyenlő <br><hr>")
} +/

document.write("<hr>")

/*kor1 = 20

if (kor1 < 18) {
    document.write( "nem léphetsz be")
} else if (kor1 > 18) {
    document.write("beléphetsz")

} else {
    document.write("Gratulálunk, hogy 18 lettél, beléphetsz") 
}*/


document.write("<hr>")

/*for (let i=100; i<200; i++){
    if (i%3==0)
    document.write(i, "<br>")
} */

/*szam6 = prompt("kérem a hosszusagot")
szam7 = prompt("kérem a szelesseget")
    alert ("terulet"  + szam6*szam7) */
    


document.write("<hr>")

/*szam4 = Number(prompt("kérek egy számot"))
szam5 = Number(prompt("kérek egy másik számot"))
if (szam4> szam5) {
    alert("a két szám különbsége" + (szam4-szam5))
       } else if (szam4 < szam5){
        alert("a két szám különbsége"+ (szam5-szam4))
       } else {
        alert("A különbség 0")
       } */

document.write("<hr>")

/*const pi = 3.14
let r = Number(prompt("adja meg a kör sugarát"))
korszamolas = confirm ("ez biztos a kör sugara?")
if (korszamolas==true){
    alert("a kör területe" + (r*r*pi))
}else alert("ez nem kör") */



/*oldal1 = Number(prompt("kérek egy számot"))
oldal2 = Number(prompt("Kérek egy másik számot"))
oldal3 = Number(prompt("kérek egy harmadik számot"))

megerosit = confirm ("3 azonos számot adtál meg?")
megerosit2 = confirm ("Az első két szám megegyezik?")
megerosit3 = confirm ("a 2. és 3.szám megegyezik?")
megerosit4 = confirm ("a 3. és az 1. szám megyegyezik?")

if (oldal1 + oldal2 > oldal3 && megerosit==true ){
    alert("ez egy egyenlő oldalú háromszög")
}       
                        
        
        else  if(( oldal3 + oldal1) <= oldal2) {
            alert("Mivel a 3. és 1. szám összege nem nagyobb a 2.számnál, ezért nem lesz belőle háromszög")
             }
             else  if(( oldal1 + oldal2) <= oldal3) {
                alert("Mivel az első két szám összege nem nagyobb a 3.számnál, ezért nem lesz belőle háromszög")
                 }
                 else  if(( oldal2 + oldal3) <= oldal1) {
                    alert("Mivel a 2. és 3. szám összege nem nagyobb a 1.számnál, ezért nem lesz belőle háromszög")
                     }
                     else if ((oldal1 + oldal2) > oldal3 && megerosit2==true){
                        alert("ha az 1. és 2. szám megegyezik, ez egy egyenlő szárú háromszög")
                    }    
        else if ((oldal1 + oldal2) > oldal3) {
           alert("ha az első 2 számot adjuk össze, ez egy általános háromszög")
        }
             
                

 if (oldal2 + oldal3 > oldal1 && megerosit==true ){
                alert("ez egy egyenlő oldalú háromszög")
            }       
                                    
                    
                    else  if(( oldal3 + oldal1) <= oldal2) {
                        alert("Mivel a 3. és 1. szám összege nem nagyobb a 2.számnál, ezért nem lesz belőle háromszög")
                         }
                    
                         else  if(( oldal2 + oldal3) <= oldal1) {
                        alert("Mivel a 2. és 3. szám összege nem nagyobb a 1.számnál, ezért nem lesz belőle háromszög")
                         }
                         else  if(( oldal1 + oldal2) <= oldal3) {
                            alert("Mivel a 1. és 2. szám összege nem nagyobb a 3.számnál, ezért nem lesz belőle háromszög")
                             }
                             else if ((oldal2 + oldal3) > oldal1 && megerosit3==true){
                                alert("Ha a 2. és 3. szám megegyezik,ez egy egyenlő szárú háromszög")
                             }
                                else if ((oldal1 + oldal2) > oldal3 && megerosit2==true){
                                    alert("ha az 1. és 2. szám megegyezik, ez egy egyenlő szárú háromszög")
                            }   else if ((oldal2 + oldal3) > oldal1) {
                                alert("ha a 2. és a 3. számot adjuk össze, ez egy általános háromszög")
                             } 

 if (oldal3 + oldal1 > oldal2 && megerosit4==true ){
                            alert("ez egy egyenlő oldalú háromszög")
                        }                                                                         
                                
                                else  if(( oldal1 + oldal2) <= oldal3) {
                                    alert("Mivel az első két szám összege nem nagyobb a 3.számnál, ezért nem lesz belőle háromszög")
                                     }
                                     else  if(( oldal3 + oldal1) <= oldal2) {
                                    alert("Mivel a 3.és 1 összege nem nagyobb a 2.számnál, ezért nem lesz belőle háromszög")
                                     }
                                     else  if(( oldal2 + oldal3) <= oldal1) {
                                        alert("Mivel a 2. és 3. szám összege nem nagyobb a 1.számnál, ezért nem lesz belőle háromszög")
                                         }
                                         else if ((oldal3 + oldal1) > oldal2 && megerosit4==true){
                                            alert("ha az 3. és 1.szám megegyezik, ez egy egyenlő szárú háromszög")
                                        }    
                                        else if ((oldal1 + oldal2) > oldal3 && megerosit2==true){
                                            alert("ha az 1. és 2. szám megegyezik, ez egy egyenlő szárú háromszög")
                                        }
                                        else if ((oldal3 + oldal1) > oldal2) {
                                           alert("ha a 3.és az 1.számot adjuk össze, ez egy általános háromszög")
                                        } */


                                      /*  let haromszog1= Number(prompt("A háromszög első oldala"))
                                        let haromszog2= Number(prompt("A háromszög második oldala"))
                                        let haromszog3= Number(prompt("A háromszög harmadik oldala"))
                                        
                                        if((haromszog1+haromszog2)>haromszog3 && (haromszog1+haromszog3)>haromszog2 && (haromszog2+haromszog3)> haromszog1) {
                                            if(haromszog1==haromszog2 && haromszog1==haromszog3){
                                                document.write("Egyenlő oldalú háromszög")
                                            }
                                            else if(haromszog1==haromszog2){
                                            document.write("Egyenlő szárú háromszög")
                                        } 
                                            else if(haromszog3==haromszog2) {
                                            document.write("Egyenlő szárú háromszög")
                                        }
                                            else if(haromszog3==haromszog1){
                                            document.write("Egyenlő szárú háromszög")
                                        }   
                                            else {
                                            document.write("Általános háromszög")
                                        }
                                    }
                                        
                                        if ((haromszog1+haromszog2)<=haromszog3) {
                                            alert("Ez nem lehet háromszög")
                                        } else if ((haromszog1+haromszog3)<=haromszog2) {
                                            alert("Ez nem lehet háromszög")
                                        }else if ((haromszog3+haromszog2)<=haromszog1) {
                                            alert("Ez nem lehet háromszög")
                                        } */
                                    
/*let a= Number(document.getElementsByName("oldal1")[0].value)
 let elso = document.getElementsById('kiiras')
 elso.innerHTML = a
 elso.style.backgroundColor="yellow"
 elso.style.color = "red"
 elso.style.fontsize = "3rem" 
  document.getElementsByTagName("h1")[0].style.display="none" */
 





/*function haromszog() {

let haromszog1 = Number(document.getElementsByName('oldal1')[0].value)
let haromszog2 = Number(document.getElementsByName('oldal2')[0].value)
let haromszog3 = Number(document.getElementsByName('oldal3')[0].value)
let uzenet= document.getElementById('kiiras')

if((haromszog1+haromszog2)>haromszog3 && (haromszog1+haromszog3)>haromszog2 && (haromszog2+haromszog3)> haromszog1) {
    if(haromszog1==haromszog2 && haromszog1==haromszog3){
        uzenet.innerHTML="Egyenlő oldalú háromszög"
    }
    else if(haromszog1==haromszog2){
    uzenet.innerHTML="Egyenlő szárú háromszög"
} 
    else if(haromszog3==haromszog2) {
    uzenet.innerHTML="Egyenlő szárú háromszög"
}
    else if(haromszog3==haromszog1){
    uzenet.innerHTML="Egyenlő szárú háromszög"
}   
    else {
    uzenet.innerHTML="Általános háromszög"
}
}

if ((haromszog1+haromszog2)<=haromszog3) {
    uzenet.innerHTML=("Ez nem lehet háromszög")
} else if ((haromszog1+haromszog3)<=haromszog2) {
    uzenet.innerHTML=("Ez nem lehet háromszög")
}else if ((haromszog3+haromszog2)<=haromszog1) {
    uzenet.innerHTML=("Ez nem lehet háromszög")
}
} */

/* function myFunction(x) {
    x.style.background = "yellow"
}

if (a==b || a==c || b==c )
let elsodocumentid = "kiiras" 

let a = Number(document.getElementsByName("oldal1") [0] .value)
let elso2 = document.getEl */

let lista = ["kenyér", "víz", "tej", "liszt"]
let szamok = [12, 3215, 65456]
document.write(lista + "<br>")
lista.push("olaj", "tészta", "vaj")
document.write(lista)
lista.unshift("első")
document.write(lista + "<br>")
lista.pop()
document.write(lista + "<br>")
lista.shift()
document.write(lista + "<br>")
document.write(lista[4] + "<br>")
lista[4] = "csoki"
document.write(lista + "<br>")
document.write(lista[4] + "<br>")
document.write(lista.length + "<br>")

for(let i=0; i<szamok.length; i++){
    szamok[i] *=2}
    document.write(szamok + "<br>")

    for(let i=0; i< lista.length; i++){
        lista[i] +=" db"
    }
    document.write(lista + "<br>")
    //objektumok
    let= konyvem = {
        "cím" :"Egri csillagok",
        "szerző": "Gárdonyi Géza",
        "kiadás": 1901
    }
    document.write(konyvem["kiadás"] + "<br>")
    konyvem.kiadás = 1902
    document.write(konyvem["kiadás"] + "<br>")
   
   let = pizza = {
    "alapanyag": "eredeti olasz alapanyagok",
    "név": "sajtos pizza",
    "rendelésszáma": "három",
    "felszolgáló": "Zoli",
    "fizetésmódja": "kp"
   }
   document.write(pizza["fizetésmódja"] + "<br>")
   pizza.fizetésmódja =" kártya"
   document.write(pizza["fizetésmódja"] + "<br>")


   /*const autok = {
    rendszam: "abc123456",
    szin: "feher",
    kiadasEve: 2021,
    alvazszam: 123456789,
    elado: false,
    adatok:function(){
        return "Az autóm rendszáma: " + this.rendszam + ", a színe pedig: " +this.szin +". A kiadás éve: " +this.kiadasEve + ", alváz száma:" + this.alvazszam +"."
    }
   }
   document.getElementById("kiiras").innerHTML = autok.adatok()
*/


/*let bucketlist =["regényt írni", "megtanulni olaszul", "elutazni Új-Zélandra", "búvárkodni"]
bucketlist.push("megnézni a sarki fényt", "megtanulni gitározni", "ejtőernyőzni")
bucketlist.unshift("vegetáriánussá válni", "legalább 3 hónapra Franciaországba költözni")
bucketlist.pop()
bucketlist.shift()
console.log(bucketlist)*/
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}