
// String és Number
 document.write("ezt JS-ből írtam <br> ")
document.write("ez már jól megy <br>")
console.log("HTML oldal script")
console.log(5+1)
console.log(45-85)
console.log(52*54)
console.log(654/54)
console.log(13%4)
console.log("szöveg" -12)
console.log(5>=2)
console.log(5 ==5)
console.log(5 !=5)
console.log((5+3) <= (8 * 6 -15))
console.log("első " + "második")
console.log('valami szöveg')
console.log(15 == "15")
console.log(15==="15") 


let szam = 15
const masikszam = 18 


let szam1=20;
let szam2=30;
let eredmeny=(szam1+szam2)
console.log(eredmeny)


 
function osszeadas(a, b) {
    let osszeadando1 = a
    let osszeadando2 = b
     return osszeg = osszeadando1 + osszeadando2
     
}
osszeadas(12, 35) 

function osszegkiir() {
    document.write("Összeadás eredménye<br>" , szam, "+", masikszam, "=", osszeadas(szam, masikszam), "<br><hr>")
} 

osszegkiir()


 function kerulet(a, b) {
    let hosszusag = a
    let szelesseg = b
    let kerulet = hosszusag *2  + szelesseg *2
    document.write("téglalap kerülete=", kerulet, "<br><hr>")
}
kerulet(10, 5) 

function terulet(a, b) {
    let hosszusag = a
    let szelesseg = b
    let terulet = a*b
    document.write("téglalap területe=", terulet, "<br><hr>")
    
    }
    terulet(10, 5) 

 function teglalap(a , b){
        let oldal1 = a
        let oldal2 = b
        let terulet = oldal1 * oldal2
        let kerulet = (oldal1 + oldal2) *2
        document.write( "A téglalap területe=" , terulet, "<br>", "A teglalap kerületee= " , kerulet , "<br><hr>")
    }
    teglalap(15 , 8)




 function szorzas(a, b) {
    return a * b
}
document.write("A " , szam,  " és a " , masikszam, " szorzata: " , szorzas(szam, masikszam), "<br><hr>")


 
let szam10 = 20
let szam11 = 30

function kivonas(a , b) {
    return a-b
}
function osztas(a , b) {
            return a/b
    }

     

function osszegbeir() {
    document.write("Összeadás eredménye<br>" , szam10, "+", szam11, "=", osszeadas(szam10, szam11), "<br>")
} 
osszegbeir() 
function szorzasbeir() {
    document.write("szorzás eredménye<br>" , szam10 , "*" , szam11 , "=", szorzas(szam10, szam11) , "<br>")
}
szorzasbeir()
function kivonasbeir() {
    document.write("kivonás eredménye<br>", szam10 ,"-", szam11, "=", kivonas(szam10, szam11), "<br>")
}
kivonasbeir()
function osztasbeir() {
    document.write("az osztás eredménye<br>" ,szam10, ":" ,szam11, "=", osztas(szam10,szam11) ,"<br><hr>")
    }
    osztasbeir()