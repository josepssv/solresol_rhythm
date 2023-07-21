var mias = {
    1: 1,
    2: 0.5,
    4: 0.25,
    8: 0.125,
    16: 0.0625,
    32: 0.03125,
    64: 0.015625,
    dd2: 0.875,
    d2: 0.75,
    dd4: 0.4375,
    d4: 0.375,
    "4t": 0.21875,
    dd8: 0.21875,
    d8: 0.1875,
    "8t": 0.109375,
    "16t": 0.0546875,
    dd16: 0.109375,
    d16: 0.09375,
};


const braille = {
    0: ["⠼⠚", "3456 245"],
    1: ["⠼⠁", "568319"],
    2: ["⠼⠃", "568654"],
    3: ["⠼⠉", "3456 14"],
    4: ["⠼⠙", "3456 145"],
    5: ["⠼⠑", "3456 15"],
    6: ["⠼⠋", "3456 124"],
    7: ["⠼⠛", "3456 1245"],
    8: ["⠼⠓", "3456 125"],
    9: ["⠼⠊", "3456 24"],
    " ": [null, null],
    //" ": [' ', '0'],
    a: ["⠁", "1"],
    b: ["⠃", "12"],
    c: ["⠉", "14"],
    d: ["⠙", "145", "8", "Do", "C"],
    e: ["⠑", "15", "8", "Re", "D"],
    f: ["⠋", "124", "8", "Mi", "E"],
    g: ["⠛", "1245", "8", "Fa", "F"],
    h: ["⠓", "125", "8", "Sol", "G"],
    i: ["⠊", "24", "8", "La", "A"],
    j: ["⠚", "245", "8", "Si", "B"],
    k: ["⠅", "13"],
    l: ["⠇", "123"],
    m: ["⠍", "134"],
    n: ["⠝", "1345", "2", "Do", "C"],
    o: ["⠕", "135", "2", "Re", "D"],
    p: ["⠏", "1234", "2", "Mi", "E"],
    q: ["⠟", "12345", "2", "Fa", "F"],
    r: ["⠗", "1235", "2", "Sol", "G"],
    s: ["⠎", "234", "2", "La", "A"],
    t: ["⠞", "2345", "2", "Si", "B"],
    u: ["⠥", "136"],
    v: ["⠧", "1236"],
    w: ["⠺", "2456", "1", "Si", "B"],
    x: ["⠭", "1346"],
    y: ["⠽", "13456"],
    z: ["⠵", "1356"],
    ",": ["⠂", "2"],
    ";": ["⠆", "23"],
    ":": ["⠒", "25"],
    ".": ["⠲", "256"],
    "?": ["⠦", "236"],
    "!": ["⠖", "235"],
    "‘": ["⠄⠦", "3 236"],
    "“": ["⠘⠦", "45 236"],
    "”": ["⠘⠴", "45 356"],
    "’": ["⠄⠴", "3 356"],
    "(": ["⠐⠣", "5 126"],
    ")": ["⠐⠜", "5 345"],
    "/": ["⠸⠌", "456 34"],
    "\\": ["⠸⠡", "456 16"],
    "–": ["⠠⠤", "6 36"],
    "—": ["⠐⠠⠤", "13276"],
    th: ["⠹", "1456", "4", "Do", "C"],
    tw: ["⠱", "156", "4", "Re", "D"],
    ed: ["⠫", "1246", "4", "Mi", "E"],
    er: ["⠻", "12456", "4", "Fa", "F"],
    ou: ["⠳", "1256", "4", "Sol", "G"],
    ow: ["⠪", "1256", "4", "La", "A"],
    you: ["⠽", "1256", "1", "Do", "C"],
    as: ["⠵", "1356", "1", "Re", "D"],
    and: ["⠯", "1256", "1", "Mi", "E"],
    for: ["⠿", "123456", "1", "Fa", "F"],
    of: ["⠷", "12356", "1", "Sol", "G"],
    the: ["⠮", "2346", "1", "La", "A"],
    with: ["⠾", "23456", "1", "Si", "B"],
};

const percusion = {
    kick: { C: 36, D: 38, E: 40, F: 41, G: 43, A: 45, B: 47 },
    snare: { C: 38, D: 40, E: 42, F: 43, G: 45, A: 47, B: 49 },
    hihat: { C: 42, D: 44, E: 46, F: 47, G: 49, A: 51, B: 53 },
    tom: { C: 48, D: 50, E: 52, F: 53, G: 55, A: 57, B: 59 },
    cymbal: { C: 49, D: 51, E: 53, F: 54, G: 56, A: 58, B: 60 },
};

var drumMap = [{}, {}, {}, {}, {}, {}, {}];

drumMap[2] = percusion.kick;
drumMap[3] = percusion.snare;
drumMap[4] = percusion.hihat;
drumMap[5] = percusion.tom;
drumMap[6] = percusion.cymbal;

const percussion = {
    cymbal: [42, 44, 46, 51, 53, 54, 55, 56, 57, 58, 59],
    kick: [35, 36],
    drum: [41, 43, 45, 47, 48, 50],
    bongo: [60, 61],
    snare: [38, 40]

};

const doMajorOctave2 = [0, 36, 38, 40, 41, 43, 45, 47];

function makeBrailleInstruments() {
    var percin1 = percussion.kick
    var percin2 = percussion.cymbal
    var rade1 = 0
    var rade2 = 0
    var b = Math.floor(parseInt(Math.random() * 6 + 1))
    if (b == 1) { percin1 = percussion.kick }
    if (b == 4) { percin1 = percussion.drum }
    if (b == 2) { percin1 = percussion.bongo }
    if (a == 5) { percin1 = percussion.drum }
    if (b == 3 || b == 6) { percin1 = percussion.kick }


    var mabi = []
    rade1 = Math.floor(parseInt(Math.random() * percin1.length))
    rade2 = Math.floor(parseInt(Math.random() * percin2.length))
    for (var i = 0; i < 2; i++) {
        var b = Math.floor(parseInt(Math.random() * 6 + 1))
        mabi[i] = []
        for (var a = 0; a < 10; a++) {
            //rade = Math.floor(parseInt(Math.random() * (47 - 35) + 35))
            //mabi[i].push(rade)
            if (i == 0) { mabi[i].push(percin1[rade1]) }
            if (i == 1) { mabi[i].push(percin2[rade2]) }
        }
    }
    return mabi
}

var drumBraille = makeBrailleInstruments()

var noteVowel = {
    a: "mi",
    e: "fa",
    i: "re",
    o: "si",
    u: "sol",
};

var pattMetroInstr =
    '{"whole":[44,42],"half":[44,45],"quarter":[42,44],"eight":[53,55], "sixteen":[40,66]}';


const abc = "C C# D D# E F F# G G# A A# B".split(" ");



function toBraille(phrase) {
    let result = [
        [],
        []
    ];


    for (let i = 0; i < phrase.length; i++) {
        const char = phrase[i].toLowerCase();

        if (char.slice(-1) == ',') {
            result[0].push(',')
            result[1].push(',')
            continue;
        }

        if (braille.hasOwnProperty(char)) {
            const brailleChar = braille[char][0];
            const brailleNum = braille[char][1];
            if (brailleChar !== null) {
                result[0].push(brailleChar);
                result[1].push(brailleNum)
            } else {

                result[0].push(' ')
                result[1].push(' ')

            }
        }
    }

    return result
}




var scoreR = [];
var overInputWord12 = false;
var doremis = ["Lamifare", "solmisisi"];
var abcs = ["AEFD", "GEBB"];
var tracks = [];
var escribe;
var keysSolresol;
var DrumOrNotes = [10, 10, 10]
var BPMtempo = 120;
var nrep1 = ''
var nrep2 = '00'
var endSepar = '0000'
var endPhrase = '00000000'
var iword = [];
var chainCodesConcept = {}
var dataSong = {
    con1t: "Dictionary",
    doremi: "Solresol",
    abc: "ABC",
    CVconcept: "C-V--",
    tempo: "120",
    metronomeVolume: "80 0 0 0",
    nTimesCoda: "4",
    metronomeInstruments: {
        whole: [30, 40],
        half: [44, 45],
        quarter: [30, 40],
        eight: [30, 40],
    },
    instruments: "4 1",
};

const properNames = [
    "Adam",
    "Alice",
    "Ava",
    "Benjamin",
    "Brooklyn",
    "Charlotte",
    "Chicago",
    "Daniel",
    "David",
    "Emma",
    "Ethan",
    "Gabriel",
    "He",
    "Her",
    "Him",
    "His",
    "Isabella",
    "Jackson",
    "James",
    "London",
    "Los Angeles",
    "Madison",
    "Melbourne",
    "Mia",
    "Michael",
    "New York",
    "Noah",
    "Oliver",
    "Paris",
    "Sarah",
    "Andrea",
    "Sophie",
    "Jose",
    "Rene",
    "Victoria",
];


function preload() {
    solresol = loadJSON(
        "https://raw.githubusercontent.com/josepssv/solresol_rhythm/main/solresol_02.json"
    );
}

function setup() {

    noCanvas();
    createMetaTag();
    keysSolresol = Object.keys(solresol);
    var bsolven = select("#buttonSolveNames");
    bsolven.mouseClicked(function() {
        drumBraille = makeBrailleInstruments()
        doText()
        randomizeRhythmsNames();
        iniCompo();
    });

    select("#brandomR").mouseClicked(function() {
        drumBraille = makeBrailleInstruments()
        doRandomText()
        iniCompo();
    });
    doText()
    //randomizeRhythmsNames();
    doRandomText()
    iniCompo();
}

function keyPressed() {
    if (keyCode === RETURN) {
        if (overInputWord12) {
            select("#infotrack").html("");
        }
    }
}

//////



function doRandomProperName() {
    iword = [];
    var randomIndex1 = 8 + Math.floor(Math.random() * (keysSolresol.length - 8));
    iword.push(keysSolresol[randomIndex1]);
    var randomIndex2 = 8 + Math.floor(Math.random() * (keysSolresol.length - 8));
    iword.push(keysSolresol[randomIndex2]);

    select("#inputWord12").value(iword[0] + ' ' + iword[1]);
    //select("#inputWord2").value(iword[1]);

    makeInstruments();
}



function chainIndexCodes(ind, arr, clave, rep, ends) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const elemind = ind[i]
        if (element.includes(clave[0].toString())) {
            result += elemind;
        } else {
            if (element == ' ') { result += ends } else {
                result += '0';
            }
        }
        if (element.includes(clave[1].toString())) {
            result += elemind;
        } else {
            if (element == ' ') { result += ends } else {
                result += '0';
            }
        }

        result += rep;

    }
    result += ends;
    return result;
}

function chainCodes(arr, clave, rep, ends) {
    let result = '';
    //var nrep='0'.repeat(rep)
    //var nrep=Array(rep).join("0")
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const element = arr[i][j];
            if (element == ',') { result += element; continue; }
            if (element.includes(clave[0].toString())) {
                result += clave[0];
            } else {

                result += '0';

            }

            if (element.includes(clave[1].toString())) {
                result += clave[1];
            } else {

                result += '0';

            }

            //result += '00|';
            if (j < arr[i].length - 1) { result += rep; }
            //result += rep;
        }
        result += ends;
    }

    //-->
    return result;
}


function performeText(cadtexto) {
    var ntimesp = select("#inputNtimes").value();
    ntimesp = ntimesp.replace(/\s+/g, " ").trim();
    var ntimes = ntimesp.split(" ");
    var ntimes = ntimes.map(Number);
    var rcadtext = ''
    var dtext=cadtexto.split('')
    var cdt=''
    for(var i=0;i<dtext.length;i++){
        if(dtext[i]==','){ cdt+=dtext[i]; continue;}
      cdt+=dtext[i].repeat(ntimes[0])
    }
    cadtexto=cdt
    var jtext = cadtexto.split(' ')
    var presil = (jtext[0].substring(0, 1) + ' ').repeat(0)
    rcadtext += presil + '  '
    for (var a = 0; a < jtext.length; a++) {
        //rcadtext += repeatSilaba(jtext[a]).repeat(ntimes[1) + ', ';
        rcadtext += repeatSilaba(jtext[a],ntimes[1]).repeat(ntimes[2]) + ' ';
    }
    return rcadtext
}

function repeatSilaba(wrodo,nrep) {
    var sy = [];

    siya = silabaJS.getSilabas(wrodo,nrep);

    var silabasArray = siya.silabas;
    if (silabasArray.length == 1) {
        silaba = silabasArray[0].silaba;
        sy.push(silaba.repeat(1));
    } else {
        for (let i = 0; i < silabasArray.length; i++) {
            const silaba = silabasArray[i].silaba;
            if (i == siya.tonica - 1) {
                sy.push(silaba.repeat(nrep));
            } else {
                sy.push(silaba.repeat(nrep));
            }
            //console.log('silabaa', silaba,JSON.stringify(sy),silabasArray[i].inicioPosicion,siya.tonica )
        }
    }
    return sy.join('')
}

function detectSolresol(word) {
    if (solresol[word]) {
        return true
    }
    return false
}

function doRandomText() {
    iword = [];
    var randomIndex1 = 8 + Math.floor(Math.random() * (keysSolresol.length - 8));
    var i0 = keysSolresol[randomIndex1];
    var randomIndex2 = 8 + Math.floor(Math.random() * (keysSolresol.length - 8));
    var i1 = keysSolresol[randomIndex2];
    var prona = floor(random(0, properNames.length));
    var i2 = iword[2] = properNames[prona];
    var key0 = solresol[i0];
    var key1 = solresol[i1];

    iword[0] = toabc(key0);
    iword[1] = toabc(key1);
    var cadtexto = i0 + ' ' + i1
    var cadkey = key0 + ' ' + key1
    var cadtextoTranslated = iword[0] + ', ' + iword[1] + ', '
    select("#inputEmitter").value(cadtexto);
    var rcadtext = performeText(cadtextoTranslated)
    select("#inputEmitterRep").value(rcadtext);
    var tobra = toBraille(rcadtext)
    select("#inputProperNames12").html(tobra[0].join(' ').replaceAll(' ', '&nbsp'));
    select("#showRep").html(rcadtext.replaceAll(' ', '&nbsp'));
    select("#inputTranslation").html(cadkey + ' / ' + cadtextoTranslated)

    makeInstruments();
}




function doText() {
    var lisol = []
    var cadtext1 = select("#inputEmitter").value();
    var scadtext = cadtext1.split(' ')

    for (var a = 0; a < scadtext.length; a++) {
        if (detectSolresol(scadtext[a])) {
            lisol.push(solresol[scadtext[a]] + ',')
        } else { lisol.push(scadtext[a]) }
    }
    var cadtext = lisol.join(' ')

    var rcadtext = performeText(cadtext)
    select("#inputEmitterRep").value(rcadtext);
    var tobra = toBraille(rcadtext)
    select("#inputProperNames12").html(tobra[0].join(' ').replaceAll(' ', '&nbsp'));
    select("#showRep").html(rcadtext.replaceAll(' ', '&nbsp'));
    makeInstruments();
}

function doRandomTempo() {
    var tempon = genNrand(1, 60, 180);
    select("#inputTempo").value(tempon);
}

function repeatNtimes(arr, elements, n) {
    const repeatedElements = [];

    for (let i = 0; i < n; i++) {
        const elementIndex = i % elements.length;
        const element = arr[elements[elementIndex]];
        repeatedElements.push(element);
    }

    return repeatedElements;
}


function makeInstruments() {
    var key1 = solresol[iword[0]];
    var key2 = solresol[iword[1]];
    var noteabc1i = toabc(key1);
    var noteabc2i = toabc(key2);
    var noteabc3i = toabc(key1);
    var noteabc4i = toabc(key2);
    var noteabc5i = toabc(key1);
    var noteabc1 = noteabc1i.split("");
    var noteabc2 = noteabc2i.split("");
    var noteabc3, noteabc4, noteabc5;

    if (noteabc1i.length > 1) {
         noteabc3 = repeatNtimes(noteabc1, [0, 1], 4);
    } else {
         noteabc3 = repeatNtimes(noteabc1, [0], 4);
    }

    if (noteabc2i.length > 1) {
         noteabc4 = repeatNtimes(noteabc2, [0, 1], 4);
    } else {
        noteabc4 = repeatNtimes(noteabc2, [0], 4);
     }

    if (noteabc1i.length > 2) {
         noteabc5 = repeatNtimes(noteabc1, [1, 2], 4);
      } else {
        noteabc5 = repeatNtimes(noteabc1, [0], 4);
     }
    var octava = select("#inputOctaves").value();
    var octaval = octava.split(" ");
    var octaves = octaval.map(Number);
    octaves.unshift(2);
    var midinums1 = noteabc1.map((nota) => {
        var midin = drumMap[octaves[1]][nota];
        return midin;
    });

    var midinums2 = noteabc2.map((nota) => {
        var midin = drumMap[octaves[2]][nota];
        return midin;
    });

    var midinums3 = noteabc3.map((nota) => {
        var midin = drumMap[octaves[3]][nota];
        return midin;
    });

    var midinums4 = noteabc4.map((nota) => {
        var midin = drumMap[octaves[4]][nota];
        return midin;
    });

    var midinums5 = noteabc5.map((nota) => {
        var midin = drumMap[octaves[5]][nota];
        return midin;
    });

    pattMetroInstr = {
        whole: [40, octaves[1], noteabc1, key1, iword[0]],
        half: [41, octaves[2], noteabc2, key2, iword[1]],
        quarter: [midinums3, octaves[3], noteabc3, key1, iword[0]],
        eight: [midinums4, octaves[4], noteabc4, key2, iword[1]],
        sixteen: [midinums5, octaves[5], noteabc5, key1, iword[0]],
    };

    select("#inputMetronomeInstruments").value(JSON.stringify(pattMetroInstr));

    randomizeRhythmsNames();
}

function getBrailleNums(textcode) {
    const result = [];
    for (let i = 0; i < textcode.length; i++) {
        const code = textcode[i];
        for (const key in braille) {
            if (code == ',') { result.push(','); break; }
            if (braille.hasOwnProperty(key)) {
                if (braille[key][0] === code) {
                    result.push(braille[key][1]);
                    break;
                }
            }
        }
    }

    return result;
}



function toNoteBraille(word) {
    if (/^(c|C|d|D|e|E|f|F|g|G|a|A|b|B)/i.test(word)) {
        const notes = word;
        var objeto = { notes: notes };
        objeto.abc = notes.replace(/c|C/g, "⠙"); //braille.d[0]
        objeto.abc = objeto.abc.replace(/d|D/g, "⠑"); //braille.e[0]
        objeto.abc = objeto.abc.replace(/e|E/g, "⠋"); //braille.f[0]
        objeto.abc = objeto.abc.replace(/f|F/g, "⠛"); //braille.g[0]
        objeto.abc = objeto.abc.replace(/g|G/g, "⠓"); //braille.h[0]
        objeto.abc = objeto.abc.replace(/a|A/g, "⠊"); //braille.i[0]
        objeto.abc = objeto.abc.replace(/b|B/g, "⠚"); //braille.j[0]
        return objeto.abc.split('');
    } else {
        return "";
    }
}


function toabc(word) {
    //word=word.toLowerCase()
    if (/^(do|Do|re|Re|mi|Mi|fa|Fa|sol|Sol|la|La|si|Si)/i.test(word)) {
        const notes = word;
        var objeto = { notes: notes };
        objeto.abc = notes.replace(/Do|do/g, "C");
        objeto.abc = objeto.abc.replace(/Re|re/g, "D");
        objeto.abc = objeto.abc.replace(/Mi|mi/g, "E");
        objeto.abc = objeto.abc.replace(/Fa|fa/g, "F");
        objeto.abc = objeto.abc.replace(/Sol|sol/g, "G");
        objeto.abc = objeto.abc.replace(/La|la/g, "A");
        objeto.abc = objeto.abc.replace(/Si|si/g, "B");
        return objeto.abc;
    } else {
        return "";
    }
}


function tonoteIndex(word) {
    //word=word.toLowerCase()
    if (/^(do|Do|re|Re|mi|Mi|fa|Fa|sol|Sol|la|La|si|Si)/i.test(word)) {
        const notes = word;
        var objeto = { notes: notes };
        objeto.abc = notes.replace(/Do|do/g, "1");
        objeto.abc = objeto.abc.replace(/Re|re/g, "2");
        objeto.abc = objeto.abc.replace(/Mi|mi/g, "3");
        objeto.abc = objeto.abc.replace(/Fa|fa/g, "4");
        objeto.abc = objeto.abc.replace(/Sol|sol/g, "5");
        objeto.abc = objeto.abc.replace(/La|la/g, "6");
        objeto.abc = objeto.abc.replace(/Si|si/g, "7");
        return objeto.abc;
    } else {
        return "";
    }
}


function isVowel(caracter) {
    const vocales = ["a", "e", "i", "o", "u"];
    const caracterMin = caracter.toLowerCase();

    if (caracterMin.match(/[a-z]/i)) {
        if (vocales.includes(caracterMin)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false; //no es vocal ni consonante
    }
}

function getBlocks(cadena, sizeBlock) {
    const caracteres = cadena.split(" ");
    if (sizeBlock < 1) {
        throw new Error("not 0");
    }
    const bloques = [];
    let bloqueActual = [];
    caracteres.forEach((caracter) => {
        bloqueActual.push(caracter);
        if (bloqueActual.length === sizeBlock) {
            bloques.push(bloqueActual);
            bloqueActual = [];
        }
    });
    if (bloqueActual.length > 0) {
        bloques.push(bloqueActual);
    }
    return bloques;
}


function mixReplace(chain, caracteresParametros, marca, addBy) {
    const palabras = chain.split(" "); // Dividir la cadena en palabras separadas por espacios
    const resultado = [];

    palabras.forEach((palabra) => {
        // console.log('marca',palabra, caracteresParametros[palabra],marca)

        if (caracteresParametros[palabra]) {
            // Si la palabra está en el objeto caracteresParametros, se sustituye por su valor
            resultado.push(caracteresParametros[palabra]);
        } else {
            // Si no se cumple ninguna condición especial, se conserva la palabra original
            resultado.push(palabra);
        }
    });

    return resultado.join(" "); // Unir las palabras en una cadena separadas por espacios
}


function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function tarray(arr, mapi) {
    return arr.map((c) => mapi[c] || c);
}


function wordToRhythm(accentedSyllables) {
    const totalDuration = accentedSyllables.reduce(
        (acc, curr) => acc + curr.duration,
        0
    );
    const normalizedRhythm = accentedSyllables.map((syllable) => {
        const normalizedDuration = syllable.duration / totalDuration;
        const note = Object.keys(mias).reduce((acc, curr) => {
            const diff = Math.abs(mias[curr] - normalizedDuration);
            if (diff < Math.abs(mias[acc] - normalizedDuration)) {
                return curr;
            }
            return acc;
        });

        return note;
    });
    const sum = Object.values(mias).reduce((acc, curr) => acc + curr, 0);
    const durationSum = normalizedRhythm.reduce(
        (acc, curr) => acc + mias[curr],
        0
    );
    const ratio = sum / durationSum;
    const rhythm = normalizedRhythm.map((note) => {
        const duration = mias[note] * ratio;
        return note;
    });

    return rhythm;
}

/////////////////
////////////////


function convert2track(cad, init) {
    const doremi = "do dó re ré mi fa fá sol sól la lá si".split(" ");
    const abc = "C C# D D# E F F# G G# A A# B".split(" ");
    if (cad == "") {
        return false;
    }
    cad = cad.trim();
    //console.log('notes:',cad)
    const notes = cad.split(" ");

    const result = notes.map((note, cont) => {
        const intense = note.charAt(0).toUpperCase() === note.charAt(0) ? 100 : 50;
        const duras = [
            [2, 4],
            [4, 8],
            [8, 16],
            [4, 2],
            [8, 4],
            [16, 8],
        ];
        var r1 = Math.floor(Math.random() * duras.length);
        //let duration = duras[r1][0];
        let duration = duras[1][0];
        if (notes.length == 1) {
            duration = 1;
        }
        if (note.includes("n") && duration > 1) {
            //duration = duras[r1][1];
            duration = duras[r1][1];
            note = note.replace("n", ""); // Eliminar 'n' del trozo de nota
        }

        let octave = 3;
        const nonAlphaChars = note.replace(/[a-zA-Z]/g, "");
        if (nonAlphaChars === "") {
            octave = 3;
        } else if (nonAlphaChars === ",") {
            octave = 2;
        } else if (nonAlphaChars === "'") {
            octave = 4;
        } else {
            octave = nonAlphaChars.length + 3;
        }
        //note=note.replace(/[^A-Za-z0-9]/g, '');
        var note2 = note.replace(/[^0-9a-zA-Z]/gi, "");
        const notel = note2.toLowerCase();
        const noteIndex = doremi.indexOf(notel);
        const abcNote = noteIndex !== -1 ? abc[noteIndex] : "";
        var initt = 0;
        //console.log('cont= ',cont)
        /*if(cont==0){
          initt=[]
          for(var k=0;k<(init+4);k++){
          initt.push('1')
          }
          initt=0
        }
        */
        initt = 0;
        cont++;
        var nnote = abcNote + octave + "";
        //console.log('nnote',notel,noteIndex,abcNote,init)
        return [1, intense, initt, [nnote], duration + "", 10, 1, false];
    });

    return result;
}






function randomizeRhythmsNames() {
    var ntimesp = select("#inputNtimes").value();
    ntimesp = ntimesp.replace(/\s+/g, " ").trim();
    var ntimes = ntimesp.split(" ");
    var ntimes = ntimes.map(Number);
    var letterDistance = select("#inputLetterDistance").value();
    letterDistance = letterDistance.replace(/\s+/g, " ").trim();
    var ledis = letterDistance.split(' ').map(Number);
    var nrep1 = '0'.repeat(ledis[0])
    var endSepar = '0'.repeat(ledis[1])
    var endPhrase = '0'.repeat(ledis[2])
    var pname = select("#inputProperNames12").html().trim()
    var worli = pname.split(' ')
    var codes1 = []
    for (var i = 0; i < worli.length; i++) {
        worli[i] = worli[i].trim()
        var brun = getBrailleNums(worli[i])
        brun.push(endSepar)
        codes1.push(brun)
    }
    var noteindex1 = tonoteIndex('do'.repeat(worli.length))
    chainCodesConcept = {}
    chainCodesConcept.i1 = chainIndexCodes(noteindex1, codes1, [1, 4], nrep1, endSepar)
    chainCodesConcept.a1 = chainCodes(codes1, [1, 4], nrep1, endSepar)
    chainCodesConcept.b1 = chainCodes(codes1, [2, 5], nrep1, endSepar)
    chainCodesConcept.c1 = chainCodes(codes1, [3, 6], nrep1, endSepar)
    var pname = select("#inputEmitter").value().trim()
    var pre1 = pname[0].charAt(0).toUpperCase() + pname.slice(1);
    select("#subtitle").html(pre1);
    var rhys = [1, 2, 3, 4, 5, 6, 7, 8];
    var longs = ["l", "L", "s", "S"];
    var octave = ",";
    var durations = ["4", "8"];
    //var nrepeatConsonant = ntimes[0]
    var primer1 = ''
    //-->var acute1 = phonetic(primer1);
    var acute1 = 'ÁA'
    var f1 = 'do do'
    var primer2 = ''
    var acute2 = 'ÁA'
    var f2 = chainCodesConcept.a1 + endPhrase
    var f2i = chainCodesConcept.i1 + endPhrase
    var primer3 = ''
    var acute3 = 'ÁA'
    var f3 = chainCodesConcept.b1 + endPhrase
    var primer4 = ''
    var acute4 = 'ÁA'
    var f4 = chainCodesConcept.c1 + endPhrase
    var primer0 = ''
    var acute0 = 'A'
    var f0 = 'do |'
    var solrString = [];
    solrString[0] = primer0 + "_" + acute0 + "_" + octave + ":" + f0 + "";
    solrString[1] = primer1 + "_" + acute1 + "_" + octave + ":" + f1 + "";
    solrString[2] = primer2 + "_" + acute2 + "_" + octave + "_" + f2i + ":" + f2 + "";
    solrString[3] = primer3 + "_" + acute3 + "_" + octave + ":" + f3 + "";
    solrString[4] = primer4 + "_" + acute4 + "_" + octave + ":" + f4 + "";
    scoreR = [];
    scoreR[0] = solrString[0];
    scoreR[1] = solrString[1];
    scoreR[2] = solrString[2];
    scoreR[3] = solrString[3];
    scoreR[4] = solrString[4];
    //--> select("#inputRhythmVariations").value(solrString[1]+solrString[2]+solrString[3]+solrString[4])
}


///////////////////////////////////

function trPitch(elo) {
    var ele = [...elo];
    if (Array.isArray(ele)) {
        for (var a = 0; a < ele.length; a++)
            if (typeof ele[a] === "string") {
                var order = "asc"; // orden ascendente por defecto
                if (ele[a].indexOf("-") !== -1) {
                    // si hay un guión en la nota o acorde
                    var parts = ele[a].split("-");
                    ele[a] = parts[0];
                    order = parts[1]; // obtenemos el orden especificado
                }
                if (
                    ele[a].slice(-1) == "M" ||
                    ele[a].slice(-1) == "m" ||
                    ele[a].slice(-3) == "dim" ||
                    ele[a].slice(-3) == "aug" ||
                    ele[a].slice(-4) == "sus2" ||
                    ele[a].slice(-4) == "sus4"
                ) {
                    var sm = scientificToMidi(ele[a]);
                    if (order == "desc") {
                        sm.reverse(); // si se especificó orden descendente, invertimos el array de notas MIDI
                    }
                    ele.splice(a, 1, ...sm);
                }
            }
    }
    //console.log(elo + " scien ", ele);
    return ele;
}

function otro(nt, compi) {
    tracks[nt].addEvent(
        new MidiWriter.ProgramChangeEvent({ instrument: compi[0] })
    );
    tracks[nt].addEvent(
        new MidiWriter.NoteEvent({
            velocity: compi[1],
            wait: compi[2],
            pitch: compi[3],
            duration: compi[4],
            channel: compi[5],
            repeat: compi[6],
            sequential: compi[7],
        })
    );
}


function trcad(cadena) {
    var cadenaBase = cadena.split(":")[0];
    var cadenaCortada = cadena.split(":")[1];
    var cad = "";

    for (var i = 0; i < cadenaCortada.length; i++) {
        if (cadenaCortada[i] === " ") {
            cad += ".";
        } else if (cadenaCortada[i] === "|") {
            cad += " ";
        }
    }

    return [cadenaBase, cad];
}


function doMetronome(
    pvolume,
    ncompass,
    ntimes,
    metroInst,
    ini,
    intense,
    pattern
) {
    var nini;
    //ini=shuffleArray(ini)
    ////////////////  METRONONME
    var compo = [
        [],
        [],
        [],
        [],
        [],
        []
    ];
    var duranote1 = 1;
    var duranote2 = 2;
    var duranote4 = 8;
    var duranote8 = 8;
    var duranote16 = 8;

    var delayi1 = 0;
    var delayi2 = [];
    var delayi4 = [];
    var delayi8 = [];
    var delayi16 = [];

    var nbarsRhythm = 8;
    var rhy1 = duranote1 * nbarsRhythm;

    var hpattern = [];

    hpattern[0] = trcad(pattern[0], 2);
    hpattern[1] = trcad(pattern[1], 4);
    hpattern[2] = pattern[2].split(':')
    hpattern[3] = pattern[3].split(':')
    hpattern[4] = pattern[4].split(':')
    var metroscad =
        "<table border=2><tr><th>Name</th><th>ntimes</th><th>___</th><th>volume</th><th>Instruments</th><th>ini</th><th>pattern</th></tr>";
    metroscad +=
        "<tr><th>Metro 1</th><td>" +
        parseInt(ntimes[3] / 1) +
        "</td><td>" +
        '---' +
        "</td><td>" +
        pvolume[0] +
        "</td><td>" +
        metroInst.whole[4] +
        "<br>" +
        metroInst.whole[3] +
        "<br>" +
        metroInst.whole[2] +
        "<br>" +
        metroInst.whole[0] +
        " <br>Octave " +
        metroInst.whole[1] +
        "</td><td>" +
        ini[0] +
        "</td><td>" +
        hpattern[0][0] +
        " " +
        hpattern[0][1] +
        "</td></tr>";

    metroscad +=
        "<tr><th>Metro 2</th><td>" +
        parseInt(ntimes[3] / 1) +
        "</td><td>" +
        '__' +
        "</td><td>" +
        pvolume[1] +
        "</td><td>" +
        metroInst.half[4] +
        "<br>" +
        metroInst.half[3] +
        "<br>" +
        metroInst.half[2] +
        "<br>" +
        metroInst.half[0] +
        " <br>Octave " +
        metroInst.half[1] +
        "</td><td>" +
        ini[1] +
        "</td><td>" +
        hpattern[1][0] +
        " " +
        hpattern[1][1] +
        "</td></tr>";

    metroscad +=
        "<tr><th>Metro 4</th><td>" +
        parseInt(ntimes[3]) +
        "</td><td>" +
        '__' +
        "</td><td>" +
        pvolume[2] +
        "</td><td>" +
        metroInst.quarter[4] +
        "<br>" +
        metroInst.quarter[3] +
        "<br>" +
        metroInst.quarter[2] +
        "<br>" +
        metroInst.quarter[0] +
        " <br>Octave " +
        metroInst.quarter[1] +
        "</td><td>" +
        ini[2] +
        "</td><td>" +
        hpattern[2][0] +
        " " +
        hpattern[2][1] +
        "</td></tr>";

    metroscad +=
        "<tr><th>Metro 8</th><td>" +
        parseInt(ntimes[3]) +
        "</td><td>" +
        '__' +
        "</td><td>" +
        pvolume[3] +
        "</td><td>" +
        metroInst.eight[4] +
        "<br>" +
        metroInst.eight[3] +
        "<br>" +
        metroInst.eight[2] +
        "<br>" +
        metroInst.eight[0] +
        " <br>Octave " +
        metroInst.eight[1] +
        "</td><td>" +
        ini[3] +
        "</td><td>" +
        hpattern[3][0] +
        " " +
        hpattern[3][1] +
        "</td></tr>";

    metroscad +=
        "<tr><th>Metro 16</th><td>" +
        parseInt(ntimes[3]) +
        "</td><td>" +
        '__' +
        "</td><td>" +
        pvolume[4] +
        "</td><td>" +
        metroInst.sixteen[4] +
        "<br>" +
        metroInst.sixteen[3] +
        "<br>" +
        metroInst.sixteen[2] +
        "<br> " +
        metroInst.sixteen[0] +
        " <br>Octave " +
        metroInst.sixteen[1] +
        "</td><td>" +
        ini[4] +
        "</td><td>" +
        hpattern[4][0] +
        " " +
        hpattern[4][1] +
        "</td></tr></table>";
    select("#tablediv").html(metroscad + "<br>");
    select("#inputRhythmVariations").html("");
    
    ////////////////  METRO 1

    var cadmetro1 =
        "" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".repeat(
            ini[1] * 2
        );
    var conti = 0;
     duranote1 = Array(ncompass[0]).fill(ncompass[1]);
    nini = metroInst.whole[0];
    //nini=40
    for (var q = 0; q < parseInt(ntimes[3]); q++) {
        if (pvolume[0] != 0) {
            for (var a = 0; a < rhy1; a++) {
                cadmetro1 +=
                    ".&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                    "";
                intense = parseInt(pvolume[0]);
                nini = metroInst.whole[0];
                //nini=40
                if (a % ncompass[0] == 0) {
                    intense = pvolume[0] + 2;
                }
                compo[1].push([
                    4,
                    intense,//floor(random(intense, intense + 2)),
                    [delayi1],
                    [nini],
                    duranote1,
                    10,
                    1,
                    false,
                ]);

                conti++;
                if (conti >= metroInst.whole[0].length) {
                    conti = 0;
                }
            }
            compo[1][0][2] = ini[0];
        }
    }

    select("#inputRhythmVariations").html(cadmetro1, 1);

    ////////////////  METRO2
    var conth2 = 0; // for this string hpattern[1][1]
    var conti = 0;
    duranote2 = [ncompass[1]];
    delayi2 = [];
    nini = metroInst.half[0];
    //nini=40
    var hpa2 = hpattern[1][1].split("");
    var cadmetro2 =
        "<br>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".repeat(ini[1] * 2);
    for (var q = 0; q < parseInt(ntimes[3]); q++) {
        if (pvolume[1] != 0) {
            //baseRhythm(notes,tempos)
            for (var a = 0; a < rhy1 * 2; a++) {
                intense = parseInt(pvolume[1]);
                nini = metroInst.half[0];
                //nini = 39;
                if (a % ncompass[0] == 0) {
                    intense = pvolume[1] + 2;
                    nini = metroInst.half[0];
                    //nini=40
                }
                if (hpa2[conth2] == " ") {
                    delayi2.push(2);
                    cadmetro2 += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "";
                } else {
                    //delayi2=0
                    cadmetro2 += ".&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "";

                    compo[2].push([
                        4,
                        intense,//floor(random(intense, intense + 2)),
                        delayi2,
                        [nini],
                        duranote2,
                        10,
                        1,
                        false,
                    ]);

                    delayi2 = [];
                }
                conth2++;
                if (conth2 >= hpa2.length) {
                    conth2 = 0;
                }
                conti++;
                if (conti >= metroInst.half[0].length) {
                    conti = 0;
                }
            }
            compo[2][0][2] = ini[1];
        }
    }

    select("#inputRhythmVariations").html(cadmetro2, 1);

    ////////////////  METRO 4
    var conti = 0;
    var conth4 = 0; // for this string hpattern[2][1]
    var hpa4 = hpattern[2][1].split("");
    var nhi = hpattern[2][0].split('_')
    var noteIndex = [];
    var congi4 = 0; //cont intrument group
    if (nhi.length > 3) {
        noteIndex = nhi[3].split('')
    }
    var cadmetro4 = "<br>" + "&nbsp;&nbsp;".repeat(ini[2] * 4);
    delayi4 = [];
    for (var q = 0; q < parseInt(ntimes[3]); q++) {
        if (pvolume[2] != 0) {

            for (var a = 0; a < rhy1 * duranote4; a++) {
                intense = pvolume[2];
                nini = metroInst.quarter[0][conti];
                if (a % ncompass[0] == 0) {
                    intense = pvolume[2] + 2;
                    //nini = metroInst.quarter[1];
                }
                if (hpa2[conth2] == " ") {
                    console.log('espacio ')
                }
                if (hpa4[conth4] == "0" || hpa4[conth4] == ",") {
                    if (hpa4[conth4] == ",") {
                        congi4++;
                        if (congi4 >= drumBraille.length) { congi4 = 0 }
                    } else {
                        cadmetro4 += "&nbsp;&nbsp;" + "";
                        delayi4.push(duranote4);
                    }
                } else {
                    if (DrumOrNotes[0] != 10) {
                        if (noteIndex.length > 1) {
                            nini = doMajorOctave2[parseInt(noteIndex[conth4])]
                        }
                    } else {
                        nini = drumBraille[congi4][parseInt(hpa4[conth4])]
                    }
                    cadmetro4 += ".&nbsp;" + "";

                    compo[3].push([
                        4,
                        floor(random(intense, intense + 10)),
                        delayi4,
                        [nini],
                        duranote4,
                        DrumOrNotes[0],
                        1,
                        false,
                    ]);
                    delayi4 = [];
                }
                conth4++;
                if (conth4 >= hpa4.length) {
                    conth4 = 0;
                }
                conti++;
                if (conti >= metroInst.half[0].length) {
                    conti = 0;
                }
            }
            compo[3][0][2] = ini[2];
        }
    }

    select("#inputRhythmVariations").html(cadmetro4, 1);

    ////////////////  METRO 8

    var conti = 0;
    var conth8 = 0; // for this string hpattern[3][1]
    var hpa8 = hpattern[3][1].split("");
    var conth8 = []; // for this string hpattern[4][1]
    var congi8 = 0
    var hin8 = hpattern[3][0].split("_")[1].split("");
    var contin8 = 0;

    var cocon8 = 1;
    var cadmetro8 = "<br>" + "&nbsp;&nbsp;".repeat(ini[2] * 4);
    //--> var cadmetro8 = "<br>" + "&nbsp;&nbsp;".repeat(ini[3] * 8);
    delayi8 = [];
    for (var q = 0; q < parseInt(ntimes[3]); q++) {
        if (pvolume[3] != 0) {

            //for (var a = 0; a < rhy1 * 8; a++) {
            for (var a = 0; a < rhy1 * duranote8; a++) {
                intense = pvolume[3] - 0;
                if (hin8[contin8] == "Á") {
                    intense = pvolume[3];
                }
                nini = metroInst.eight[0][conti];
                if (a % ncompass[0] == 0) {
                //if (a % 2 == 0) {
                    if (hin8[contin8] == "Á") {
                        intense = pvolume[3] + 4;
                    } else {
                        intense = pvolume[3] + 2;
                    }
                }

                if (hpa8[conth8] == "0" || hpa8[conth8] == ",") {
                    if (hpa8[conth8] == ",") {
                        congi8++;
                        if (congi8 >= drumBraille.length) { congi8 = 0 }
                    } else {
                        cadmetro8 += "&nbsp;&nbsp;" + "";
                        delayi8.push(duranote8);
                    }
                } else {
                    cadmetro8 += ".&nbsp;" + "";
                    nini = drumBraille[congi8][parseInt(hpa8[conth8])]
                    compo[4].push([
                        4,
                        floor(random(intense, intense + 10)),
                        delayi8,
                        [nini],
                        duranote8,
                        DrumOrNotes[1],
                        1,
                        false,
                    ]);
                    delayi8 = [];
                }
                conth8++;
                if (conth8 >= hpa8.length) {
                    conth8 = 0;
                }
                conti++;
                if (conti >= metroInst.eight[0].length) {
                    conti = 0;
                }
            }
            compo[4][0][2] = ini[3];
        }
    }

    select("#inputRhythmVariations").html(cadmetro8, 1);

    ////////////////  METRO 16

    var conti = 0;
    var congi16 = 0
    var conth16 = []; // for this string hpattern[4][1]
    //var hpa16 = hpattern[4][1].split("");
    var hpax16 = hpattern[4][1].trim()
    var hpa16 = hpax16.split('')
    console.log('16 ', hpa16)
    var hin16 = hpattern[4][0].split("_")[1].split("");
    var contin16 = 0;
    //console.log(hin16)

    var cocon16 = 1;
    var cadmetro16 = "<br>" + "&nbsp;&nbsp;".repeat(ini[4] * 16);
    for (var q = 0; q < parseInt(ntimes[3]); q++) {
        if (pvolume[4] != 0) {
            congi16++;
            if (congi16 >= drumBraille.length) { congi16 = 0 }
            for (var a = 0; a < rhy1 * duranote16; a++) {
                intense = pvolume[4] - 0;
                if (hin16[contin16] == "Á") {
                    intense = pvolume[4];
                }
                nini = metroInst.sixteen[0][conti];
                if (a % ncompass[0]*16 == 0) {
                //if (a % 2 == 0) {
                    if (hin16[contin16] == "Á") {
                        intense = pvolume[4] + 4;
                    } else {
                        intense = pvolume[4] + 2;
                    }
                }

                if (hpa16[conth16] == "0" || hpa16[conth16] == ",") {
                    if (hpa16[conth16] == ",") {
                        congi16++;
                        if (congi16 >= drumBraille.length) { congi16 = 0 }
                    } else {
                        cadmetro16 += "&nbsp;&nbsp;" + "";
                        delayi16.push(duranote16);
                    }
                } else {
                    cadmetro16 += ".&nbsp;" + "";
                    nini = drumBraille[congi16][parseInt(hpa16[conth16])]
                    compo[5].push([
                        5,
                        floor(random(intense, intense + 10)),
                        delayi16,
                        [nini],
                        duranote16,
                        DrumOrNotes[2],
                        1,
                        false,
                    ]);
                    delayi16 = [];
                }
                cocon16++;
                if (cocon16 > duranote16) {
                    cocon16 = 1;
                }
                conth16++;
                if (conth16 >= hpa16.length) {
                    conth16 = 0;
                }
                conti++;
                if (conti >= metroInst.sixteen[0].length) {
                    conti = 0;
                }
                contin16++;
                if (contin16 >= hin16.length) {
                    contin16 = 0;
                }
            }
            compo[5][0][2] = ini[4];
        }
    }

    select("#inputRhythmVariations").html(cadmetro16, 1);

    // END METRONOME
    return compo;
}

function iniCompo() {
    BPMtempo = select("#inputTempo").value();
    var metrei=select("#inputMetre").value();
    metrei=metrei.replace(/\s/g,'')
    var metre=metrei.split('/').map(Number)
    dataSong.tempo = BPMtempo;
    var compo = [
        [BPMtempo, metre, 24, 0],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];
    var ncompass = compo[0][1];
    var notes = [];
    var tempos = [];
    var notesBass = [];
    var temposBass = [];
    var pattmetro = select("#inputMetronomeVolume").value();
    pattmetro = pattmetro.replace(/\s+/g, " ").trim();
    var patternm = pattmetro.split(" ");
    var volumetro = patternm.map(Number);
    var pattrhy = select("#inputRhythmVolume").value();
    pattrhy = pattrhy.replace(/\s+/g, " ").trim();
    var pattrhym = pattrhy.split(" ");
    var patternr = pattrhym.map(Number);
    var ntimesp = select("#inputNtimes").value();
    ntimesp = ntimesp.replace(/\s+/g, " ").trim();
    var ntimes = ntimesp.split(" ");
    var ntimes = ntimes.map(Number);
    var metroInst = pattMetroInstr;
    var pattini = select("#inputInit").value();
    pattini = pattini.replace(/\s+/g, " ").trim();
    var patteri = pattini.split(" ");
    var ini = patteri.map(Number);
    var nini = 0;
    var intense = 10;
    var compome = doMetronome(
        volumetro,
        ncompass,
        ntimes,
        metroInst,
        ini,
        intense,
        scoreR
    );
    compo[1] = compome[1];
    compo[2] = compome[2];
    compo[3] = compome[3];
    compo[4] = compome[4];
    compo[5] = compome[5];
    var tempo = compo[0][0];
    var nt = 0;
    tracks[nt] = new MidiWriter.Track();
    tracks[nt].setTimeSignature(compo[0][1][0], compo[0][1][1]);
    tracks[nt].setTempo(tempo);

    for (nt = 1; nt < compo.length; nt++) {
        tracks[nt] = new MidiWriter.Track();
        for (var a = 0; a < compo[nt].length; a++) {
            if (compo[nt][a][0] < 0) {
                compo[nt][a][0] = compo[0][2];
            } else {}
            if (compo[nt][a][1] < 0) {
                compo[nt][a][1] = compo[0][3];
            } else {}
            if (Array.isArray(compo[nt][a][2])) {} else {
                var ttd = "T" + parseInt(parseFloat(compo[nt][a][2]) * 120 * 4);
                //console.log('no es array',compo[nt][a][2],ttd,nt,a)
                compo[nt][a][2] = ttd;
            }
            compo[nt][a][3] = trPitch(compo[nt][a][3]);

            otro(nt, compo[nt][a]);
        }
    }

    termina();
}

function termina() {
    escribe = new MidiWriter.Writer(tracks);
    charged(0);
}

function charged(n) {
    var playi = select("#player15");
    var expi = select("#expi");
    var info = select("#info");
    var infot = select("#infotrack");
    expi.show();
    expi.mousePressed(function() {
        var subti = select("#subtitle").html();
        subti = subti.replaceAll(" ", "_");
        subti += "_" + doremis[0] + "_" + doremis[1];
        subti += "_" + abcs[0] + "_" + abcs[1];
        subti += "_" + BPMtempo + "bpm";
        info.html(
            '<br><a id="linktext" download="' +
            subti +
            '"  href="' +
            escribe.dataUri() +
            '">' +
            subti +
            ".mid</a>&nbsp;" +
            "<p>&nbsp;</p>" +
            "" +
            "" +
            "<p>&nbsp;</p>"
        );

        expi.hide();
        var lise = select("#linktext");
        lise.mousePressed(function() {
            setTimeout(function() {
                lise.hide();
            }, 2000);
        });
    });
    select("#section15 midi-visualizer").hide();
    playi.attribute("src", escribe.dataUri());
    playi.mouseClicked(function() {
        select("#section15 midi-visualizer").show();
    });
}

function createMetaTag() {
    //https://openprocess4.org/sketch/790331

    //Mobile Devices by Oren Shoham

    let meta = createElement("meta");

    meta.attribute("name", "viewport");

    meta.attribute(
        "content",

        "user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
    );

    let head = select("head");

    meta.parent(head);
}
