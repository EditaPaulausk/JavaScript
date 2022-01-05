// Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 

console.log("Ciklas:")
let skaičius = 1;
while(skaičius <= 10) {
    console.log(skaičius);
    skaičius=skaičius+1;
}

// Naudodami for loop, konsolėje parašykite nuo 10 iki 1. 

console.log("For ciklas:");
for(let i = 10; i >= 1; i--){
    console.log(i);
}

/* Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių. 
let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;
Štai kaip atrodys pirmos dvi eilutės:
Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių! */

console.log("Sprendimas:")
let numMenuo = 0;
let numAvys= 4;
let kiekMenSpausdinti = 12;
while(numMenuo <= kiekMenSpausdinti) {
    numMenuo=numMenuo+1;
    numAvys=numAvys*=4;

    console.log("Po " + numMenuo + " mėnesio(-ių) bus " + numAvys + " avys(-ių)!");

}

// Atlikite užduotį JS 03 su for loop
//For ciklas
let numMenuo = 0;
let numAvys= 4;
let kiekMenSpausdinti = 12;
console.log("For ciklas:");
for(let i = 0; i < 12; i++){
    numMenuo+=1;
    numAvys*=4;
    console.log("Po " + numMenuo + " mėnesio(-ių) bus " + numAvys + " avys(-ių)!");
}

// JS užduotis 5

/* Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0; */

let currentGen = 1;
let totalGen= 19;
let totalMW=0;
console.log("JS 5 užduotis");
while(currentGen <= 4) {
    totalMW=totalMW+62;
    console.log("Generatorius #" + currentGen + " įjungtas, pridėjo 62 MW, viso generuojama " + totalMW + "MW!");
    currentGen++;
}

for(currentGen; currentGen <= 19; currentGen++) {
        totalMW=124+totalMW;
        console.log("Generatorius #" + currentGen + " įjungtas, pridėjo 124 MW, viso generuojama " + totalMW + "MW!");
    
}

// JS užduotis 06

/* Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0; */


let totalGen= 19;
let totalMW=0;

console.log("JS 6 užduotis");

for(currentGen = 1; currentGen <= 19; currentGen++) {
    if(currentGen % 2 == 0) {
        if(currentGen <=4) {
            totalMW=totalMW+62;
            console.log ("Generatorius #" + currentGen + " įjungtas, pridėjo 62 MW, viso generuojama " + totalMW + "MW!");
        }
        else if(currentGen <=19) {
            totalMW=totalMW+124;
            console.log ("Generatorius #" + currentGen + " įjungtas, pridėjo 124 MW, viso generuojama " + totalMW + "MW!");
        }
    }

    else{      
        console.log("Generatorius #" + currentGen + " išjungtas.");
    }
}



// JS užduotis 07

/* Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
} */



let num=10;
while (num>0) {
    
    console.log(num);
    num-=2;
}



// JS užduotis 08

// Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.


console.log("JS 8 užduotis")

function maxOf2(a, b) {
    if(a<b) {
        return b
    }
    else(a>b); {
        return a
    }
}
let mynumber = maxOf2(8, 9);
console.log(mynumber);



// JS užduotis 09
/* Šiuo metu Lietuvoje yra 26 laipsniai pagal Farenheitą,
naudodamiesi JavaScript apskaičiuokite kokia temperatūra yra pagal Celsijų.

Būtinos sąlygos:
- Turime "string" kintamąjį su tekstu "Lietuvoje šiuo metu laipsnių pagal Celsijų"
- Negalima rašyti jokio papildomo teksto
- Temperatūra pagal Celsijų turi būti nurodyta vienas skaičius po kablelio
- Temperatūra turi būti konvertuojama iš Farenheito į Celsijų
- Rezultatą išvesti konsolėje

Rezultatas:
Lietuvoje šiuo metu -3.3 laipsnių pagal Celsijų */


console.log("JS 9 užduotis")

function toCelsius(farenheit) {
    return(5/9)*(farenheit-32)
}
let celsius=toCelsius(26);
let koreguotas=(celsius.toFixed(1));
let tekstas="Lietuvoje šiuo metu laipsnių pagal Celsijų.";
let tekstas1=(tekstas.substring(0, 20));
let tekstas2=(tekstas.substring(19));
let pilnasTekstas=tekstas1+koreguotas+tekstas2;
console.log(pilnasTekstas);




// JS užduotis 10
/* Turime masyvą, kuriame yra trumpos tekstinės eilutės (pateikta apačioje). Mūsų užduotis:
1. Sukurti funkciją, kuri rastų ilgiausią žodį tekstinėje eilutėje
2. Panaudojant šią funkciją išvesti kiekvienos eilutės ilgiausią žodį (rezultatas turi būti viena tekstinė eilutė)
3. Išvedant žodžius panaudoti tarpą tarp žodžių
4. Išvedimas turi būti dinamiškas (pasikeitus masyve esančių eilučių skaičiui - vis tiek gautume kiekvienos eilutės ilgiausią žodį)
5. Rezultatą išvesti konsolėje */


/*funkcija grąžins vieno sakinio ilgiausią žodį*/
function ilgiausiasZodis(sakinys) {  
  let zodziai = sakinys.split(" ");  /*masyvas = zodziu sarasas*/
  let ilgiausioZodzioIndeksas = 0;
  let maxIlgis = 0;
  for (let i = 0; i<zodziai.length; i++) {
    let einamasisZodis = zodziai[i];
    let einamojoZodzioIlgis = einamasisZodis.length;
    if (einamojoZodzioIlgis > maxIlgis) {
        maxIlgis = einamojoZodzioIlgis;
        ilgiausioZodzioIndeksas = i;
    }
  }
  return zodziai[ilgiausioZodzioIndeksas];
}


let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];
let rezultatas = "";
for (let i = 0; i < posts.length; i++) {
  rezultatas = rezultatas + ilgiausiasZodis(posts[i]) + " ";

}

console.log(rezultatas);


// Bonus - JS užduotis 11
/* Įmonė nori įsigyti 2 baltus arba juodus tos pačios rūšies kompiuterius (būtinai vienos spalvos), kurių bendra kaina neviršytų 1600 €. Sugeneruokite sąrašą kompiuterių, kuriuos galite pasiūlyti.

Masyvas su objektais:

let pcs = [
{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
{ "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
];

Būtinos sąlygos:
- Panaudokite bent po vieną ciklą ir sąlyginį sakinį,
- Rezultatas išvedamas konsolėje,
- Line break naudokite "\n".

Rezultatas turėtų atrodyti taip:

Galimi variantai:

Modelis: hp monstras
Kaina: 1600
Spalvos: juoda

Modelis: dell apskritimas
Kaina: 1394
Spalvos: balta

Modelis: acer peizažas
Kaina: 1240
Spalvos: balta ir juoda */


// sprendimas

console.log("JS 11 užduotis");

let pcs = [
  { "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
  { "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
  { "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
  { "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
  { "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
  { "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
  { "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
  ];

function galimasVariantas (kompiuteris) {
  let rezultatas = "";
  if ((kompiuteris.spalva.juoda > 1 || kompiuteris.spalva.balta > 1) && kompiuteris.kaina * 2 <= 1600) {
    rezultatas = rezultatas + "Modelis: " + kompiuteris.modelis + "\n";
    rezultatas = rezultatas + "Kaina: " + kompiuteris.kaina * 2 + "\n";
    if (kompiuteris.spalva.balta > 1 && kompiuteris.spalva.juoda > 1) {
      rezultatas = rezultatas + "Spalvos: balta ir juoda" + "\n";
    }
    else if(kompiuteris.spalva.balta > 1){
      rezultatas = rezultatas + "Spalvos: balta" + "\n";
    }
    else {
      rezultatas = rezultatas + "Spalvos: juoda" + "\n";
    }
  }
  return rezultatas;
}

let galutinisRezultatas = "";
for (let i = 0; i < pcs.length; i++) {
  galutinisRezultatas = galutinisRezultatas + galimasVariantas(pcs[i]) + "\n";
}

console.log(galutinisRezultatas);
