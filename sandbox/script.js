//Variabler

let userAge = 10; // variabel som kan endres, trenger ikke bruke "" på tall
let userData = [];
const adminAge = 20; //variabel som ikke kan endres
const hugeNumber = 15345930488888888888888888888234823490820934238409n; //big int, avsluttes med n
let navn = "Espen";
let singleQuote = 'Hei ' + navn + ', ha en fin dag!' // kan bruke enkle eller doble anførselstegn
let doubleQuote = `Hei ${navn}, ha en fin dag!`; // backticks for å bruke variabler i string
let longString = `Handlelista for helgen: Pepsi Max,
Potetgull, 
Taco, 
Grændis
`; // kan bruke backticks for å skrive på flere linjer
let lightOn = false; // boolean
let isLessThan = 2 < 5; //returnerer true
let nothing = null; // ingenting
let height;
console.log(height); //undefined, udefinert variabel
typeof 1; //returnerer "number"
let ord = "bokhylle";
typeof ord; //returnerer "string"
console.log(adminAge); 

//Operatorer

1 + 2; //returnerer 3
"4" + 9; //returnerer "49"
5 - 4; //returnerer 1
3 * 3; //returnerer 9
15 / 5; //returnerer 3
9 % 4; //returnerer 1
2 ** 3; //returnerer 8 - opphøyd i

let number = 3;
n += 3; //returnerer 6
n *= 2; //returnerer 12

++number; //13 øker først, så returnerer
--number; //12 minker først, så returnerer

numnber++; //12 returnerer først, så øker
number--; //13 returnerer først, så minker

//Sammenligningsoperatorer
5 < 4; //returnerer false, 5 er ikke mindre enn 4
3 > 2; //returnerer true, 3 er større enn 2

9 <= 3; //returnerer false, 9 er ikke mindre eller lik 3
6 >= 6; //returnerer true, 6 er lik 6
8 == 7; //returnerer false, 8 er ikke lik 7

//Sjekker om datatype er lik
'1' == 1; //returnerer true, fordi det er samme verdi
'1' === 1; //returnerer false, fordi det er ikke samme datatype
'1' != 1; //returnerer false, fordi det er samme verdi
'1' !== 1; //returnerer true, fordi det er ikke samme datatype
0 == false; //returnerer true, fordi 0 er falsy
0 === false; //returnerer false, fordi 0 er number og false er boolean

//Logiske operatorer
let klokke = 18;

//Hvis klokka er mindre enn 18 eller over 18 så er det sant
if (klokke < 18 || klokke > 18) {
    console.log("Middag!");
}

let dag = 'mandag';

//Hvis klokka er lik 18 og dag er lik mandag, så er det sant.
if (klokke == 18 || dag === mandag) {
    console.log("Pasta time!!");
}

let tirsdag = true;
console.log(!tirsdag); //false, returnerer motsatt

//Conditionals
let pizza = 'Grandiosa';

if (pizza === 'BigOne') {
    console.log('Nam!');
} else if (pizza === 'Grandiosa') {
    console.log('Mmm')
} else {
    console.log('Jaja, blir pasta da.')
}


//Ternery

let pizzaAgain = 'Grandiosa';
let pizzaValg = (pizza === 'BigOne') ? 'Nam!' : 'Nei, takk!';
console.log(pizzaValg);

//Switch

let pizzaPlease = 'Dr.Oetker';

switch(pizzaPlease) {
    case 'Grandiosa':
        console.log('Kjærlighet ved første blikk!');
        break;

    case 'BigOne':
        console.log('More of the good stuff!');
        break;

    case 'Dr.Oetker':
        console.log("Quality is the Best Recipe!")
        break;

    default:
        console.log("Hjemmelagd pizza er best!");
}

//Arrays

let dataTypeArray = [true, 'string', 23];

//hente ut første element
console.log(dataTypeArray[0]);

//antall elementer
console.log(dataTypeArray.length);
//Array metoder
dataTypeArray.push('legger til denne stringen');
dataTypeArray.pop(); //fjerner siste element og returnerer det

//foreach - gjør dette for hvert element i array

const liste = [56, 43, 72, 61];

liste.forEach((element) => {
    console.log(2 *element);
});

//filter - lager ny array med alle elementer som består testen

const minListe = [56, 26, 43, 72, 61, 3, 19];
//Ny array med alle elementer mindre enn 45
const filtrertArray = minListe.filter((element) =>  {
    return element < 45;
});

//map . for hvert element i arrayen skal noe gjøres og leggges til i ny array. endrer ikke orginal array

const mapList = [56, 43, 72, 61];

const nyListe = mapList.map((element) => {
    2 * element;
});

//objekt 

const objekt = {
    nøkkel : verdi, 
    nøkkel1 : verdi1, 
};

const person = {
    navn: 'Espen',
    alder: 28,
    yrke: 'utvikler',
};

console.log(person.navn); //Espen

//mulig å putte arrays i objekter - kalles nested arrays

const object = {
    navn: 'Espen',
    alder: 28,
    yrke: 'utvikler',
    bosted: [ {
        id: 1,
        adresse: 'Liksomveien 1',
        postnummer: 1234,
        sted: 'Norge',
    },
    {
        id: 2,
        adresse: 'Falskeveien 2',
        postnummer: 5678,
        sted: 'Norge',
    }]
};

console.log(object); //returnerer hele objektet
console.logobject.bosted; //returnerer arrayen
console.log(object.bosted[0].adresse); //returnerer Liksomveien 1

//Løkker

//for

for (let i= 0; i <= 6; i++) {
    console.log(i);
}

//Nested loops
for (let ytre = 0; ytre < 5; ytre ++) {
    for (let indre = 0; indre < 6; indre ++) {
        console.log(`${ytre}, så ${indre}`);
    }
}

//while

// så lenge det er true, gjør dette. eksempelet er false når i er større enn 6 og løkken stopper
let i = 0;

while (i < 6) {
    console.log(i);
    ++i;
}

//gå gjennom array med for-løkke
const handleliste = ['bananer', 'yoghurt', 'nugatti'];

for(let i = 0; i < handleliste.length; i++) {
    console.log(handleliste[i]);
}

//Funksjoner
function hello() {
    console.log('Hello');
}

hello();

function addition(number1, number2) {
    return number1 + number2 
}

addition(45, 32); // 77

//Arrow function, ny måte å skrive en funksjon på

const addition = (number1, number2) => number1 + number2;
//Kun 1 parameter, ny måte
const additionAgain = number => number + 2;
//gamle måte:
function additionOld(number) {
    return number + 2;
}

//dersom mer enn en linje, krøllparantes
const aFunction = () => {
    hei + 2;
    hei + 1;
}

//Scope, scope refererer til hvor verdier og funksjoner kan nås
//Global scope, funksjonen eller verdien kan brukes hvor som helst
const isStudent = true;

const studentCheck = () => {
    //isStudent kan brukes her
};

//isStudent kan brukes her

//BLock scope, kan kun brukes innenfor funksjonen den er satt i.

const studentCheckk = () => {
    const isStudent = true;
    

    //isStudent kan brukes her
};

//ikke her


//metoder i DOM (document object module) - der JS brukes opp mot html

//.createElement(), lager et tomt element
const newSection = document.createElement('section');

//.textContent, brukes til å sette tekst til et element. Kan også hente tekstlig innhold fra et element
const newSection2 = document.createElement('h1');
newSection2.textContent = 'En overskrift';

//.getElements, flere varianter

//.getElementsById(), henter første element med lik ID
//HTML
<h1 id="page-title">En tittel</h1>
//JS
let title = content.document.getElementById("page-title");

//.getElementsByTagName(); henter alle elementer (en liste) med lik tag
//HTML 
{/* <h2>Overskrift</h2>
<h2>Enda en overskrift</h2> */}
//JS 
let headings1 = document.getElementsByTagName('h2');

//getElementsByClassName(); henter alle elementer (en liste) med lik klasse
//HTML
<button class="btn-save">Lagre</button>
//JS
let saveBtn = document.getElementsByClassName('btn-save');

//querySelector, henter første HTML-element som matcher tag, id eller klasse
//HTML tag
let firstHeading = document.querySelector('h1');
//klasse, legg merke til punktum 
let menuBtn = document.querySelector('.menuBtn');
//id, legg merke til hashtag
let menuBtnAgain = document.querySelector('#menuBtn');

//querySelectorAll(), henter alle elementer enten på tag, id eller klasse
//html tag
let allHeadings = document.querySelectorAll('h1');
//klasse
let menuBtnA = document.querySelectorAll('.menuBtnA');
//id 
let menuBtnB = document.querySelectorAll('#menuBtnB');

//innerHTML, brukes til å hente ut eller lage innhold
//henter ut
<p id="id">Tekst</p>
const id = document.getElementById("id");
console.log(id.innerHTML) // TEKST
//endrer innhold
id.innerHTML = "Oppdatert tekst"
console.log(id.innerHTML) // oppdatert tekst

//appendChild, legger et "barn" under en "forelder"
//Henter første section på ID
let aboutUsSection = document.querySelector('#about-us');
//lager en tittel
let aboutHeading = document.createElement('h1');
//putter heading inn i section
aboutUsSection.appendChild(aboutHeading);
//removeChild, fjerner et barn fra foreldrenode

//Metoder brukt til å manipulere string
//.toUpperCase() og toLowerCase(), endrer string til kun store eller små bokstaver. kan brukes rett på stringen eller variabelen
let big = 'En string mED stoRe og Små Bokstaver'.toUpperCase(); // EN STRING MED STORE OG SMÅ BOKSTAVER
let small = 'En annen string MED storE og Små BoKstaver'.toLowerCase(); // en string med store og små bokstaver
//det samme under
console.log(small.toLowerCase());

//.trim(), fjerner whitespace mellomrom og tab fra begge sider av stringen
let spaces = '                        unødvendige mellomrom                ';
console.log(spaces.trim());
// finnes også trimStart() og trimEnd(), der sistnevnte kan være lur for å fjerne mellomrom eller tabs på slutten av inpuit i et skjema.

//Metoder brukt på arrays
//.length og hente verdi på index
const baseArray = [1, 2, 50];
const firstValue = baseArray[0]; // 1
const arrLength = baseArray.length; // 3
const lastValue = baseArray[baseArray.length -1];

//includes og indexOf, includes brukes til å undersøke om en array inneholder en bestemt verdi. indexOf brukes til å finne index til en verdi. 
const baseArrayAgain = [1, 2, 3];
const includes = baseArray.includes(2);