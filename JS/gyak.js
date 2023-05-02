

/*let feltet1 = ["gomba", "olívabogyó", "sajt", "paradicsomos alap"]
document.write("összetevők:" + feltet1  + "<br>")*/





/*let = pizza1 = {
    "alapanyag": "eredeti olasz alapanyagok",
    "név": "sajtos pizza",
    "rendelésszáma": "három",
    "felszolgáló": "Zoli",
    "fizetésmódja": "kp"
    
   }
   document.write(pizza1["alapanyag"] + "<br>") */

const pizzak = [{
    név:"Hawaii",
    méret: 28,
    szószalap:"paradicsomos",
    feltétek:"sonka, ananász, szósz",
    adatok : function(){
        return "Ez a pizza egy: " + this.név + "pizza, mérete: " +this.méret + " cm " + this.szószalap + "alapszósszal és a következő feltétekkel: " +this.feltétek
    },
    adatok2 : function(){
        return "<h1>" + this.név
    }
    },{
        név : "Hawaii extra",
        méret : 35,
        szószalap : "csípős paradicsomos",
        feltétek : "sonka, ananász, szósz, erős paprika, gomba ",
        adatok : function(){
            return "Ez a pizza egy: " + this.név + "pizza, mérete: "+ this.méret + "cm " +this.szószalap + "alapszósszal, és a következő feltétekkel: " + this.feltétek
        },
        adatok2 : function(){
            return "<h1>" + this.név
        }
    },{
        név: "Hawaii álom",
        méret : 45,
        szószalap : "választható",
        feltétek: "sonka, ananász, erős paprika, gomba",
        adatok : function(){
            return "Ez a pizza egy: " + this.név + "pizza, mérete :" + this.méret + "cm " + this.szószalap + "szósszal, és a következő feltétekkel: " + this.feltétek
        },
        adatok2 : function(){
            return "<h1>" + this.név
        }

    }

]




for (let i=0 ; i< pizzak.length; i++){
    document.getElementById("kiiras" +i).innerHTML = pizzak[i].adatok 
}

  