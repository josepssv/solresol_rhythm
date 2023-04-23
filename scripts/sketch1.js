var solresol;
var iword, isolve, bsolve;
var overInputWord;
var tracks = [];
var escribe;
var abcs = "";
var multiabcs = "";
var multitempos = [];
var contWord = 0;
var keysSolresol;
var BMPtempo=120
var dataSong={"concept":"Dictionary","notes":"Solresol","abc":"ABC","CVconcept":"C-V--","tempo":"120","metronomeVolume":"80 0 0 0","nTimesCoda":"4","metronomeInstruments":{
"whole":[30,40],
"half":[44,45],
"quarter":[30,40],
"eight":[30,40]
},"instruments":"4 1"}
function preload() {solresol = loadJSON(
    "https://raw.githubusercontent.com/josepssv/solresol_rhythm/main/solresol_02.json"
  );
}
function setup() {
  noCanvas();
  //iword = select("#inputWord").value();
 /* keysSolresol = Object.keys(solresol);
  randomIndex = Math.floor(Math.random() * keysSolresol.length);
  iword = keysSolresol[randomIndex];
  select("#inputWord").value(iword);
  console.log("iword", iword);
  */
  keysSolresol = Object.keys(solresol);
  doRandom()
  doWord(iword);
  bsolve = select("#buttonSolve");
  bsolve.mouseClicked(function () {
    select("#infotrack").html("");
    iword = select("#inputWord").value();
    doWord(iword);
  });
  select("#inputWord").mouseOver(() => (overInputWord = true));
  select("#resume").mouseClicked(function () {
    abcs = multiabcs;
    tempos = multitempos;
    iniCompo();
  });
  select("#brandom").mouseClicked(function () {
    doRandom();
    doWord(iword);
  });
}

function keyPressed() {
  if (keyCode === RETURN) {
    if (overInputWord) {
      select("#infotrack").html("");
      iword = select("#inputWord").value();
      doWord(iword);
    }
  }
}

//////////////////////////////////

function doRandom() {
  const rr = floor(random(0, 2));
  if (rr == 0) {
    randomIndex = Math.floor(Math.random() * keysSolresol.length);
    iword = keysSolresol[randomIndex];
  } else {
    randomIndex = Math.floor(Math.random() * keysSolresol.length);
    iword = solresol[keysSolresol[randomIndex]];
  }

  select("#inputWord").value(iword);
  var spacen=genNrand(4,0,80)
  select("#inputMetronomeVolume").value(spacen);
  var tempon=genNrand(1,60,180)
  select("#inputTempo").value(tempon);
  var instrn=genNrand(2,0,120)
  select("#inputInstruments").value(instrn);
}

function doWord(iword) {
  var isNotes = detectNotes(iword);
  if (isNotes) {
    var findn=''
    var concept = searchConcept(iword);
    if(concept.length==0){findn="Not Found";}
    abcs = toabc(iword);
    dataSong.concept=concept
    dataSong.notes=iword
    dataSong.abc=abcs
    console.log('isNotes true '+abcs)
    select("#infotrack").html(findn+' '+abcs + ' ' + concept.join(', '), 0);
  } else {
    var notes = findValue(iword)
    var findn=''
    if(!notes){findn="Not Found";
               notes=phonetic(iword);}
    console.log('isNotes false '+notes)
    abcs = toabc(notes);
    select("#infotrack").html(findn+' '+notes + " " + abcs + " ");
    var concept = searchConcept(notes);
    dataSong.concept=iword
    dataSong.notes=notes
    dataSong.abc=abcs
    select("#infotrack").html(concept.join(", "), 1);
    //console.log(abcs);
  }
  if (contWord > 0) {
    //multiabcs+=abcs
    //select("#preinfo").html(multiabcs)
    //select("#resume").show()
  }
  iniCompo();
  select('#inputCVconcept').value(dataSong.CVconcept)
  console.log("dataSong", JSON.stringify(dataSong));
  contWord++;
}
//////////////

function getCombinations(arr) {
  const result = [];
  const loop = (currentArr, remainingArr) => {
    if (remainingArr.length === 0) {
      result.push(currentArr);
      return;
    }
    for (let i = 0; i < remainingArr.length; i++) {
      const newCurrentArr = [...currentArr, remainingArr[i]];
      const newRemainingArr = [
        ...remainingArr.slice(0, i),
        ...remainingArr.slice(i + 1),
      ];
      loop(newCurrentArr, newRemainingArr);
    }
  };
  loop([], arr);
  return result;
}

function phonetic(w) {
  const p = {
    a: "V",
    e: "V",
    i: "V",
    o: "V",
    u: "V",
    b: "C",
    c: "C",
    d: "C",
    f: "C",
    g: "C",
    h: "C",
    j: "C",
    k: "C",
    l: "C",
    m: "C",
    n: "C",
    p: "C",
    q: "C",
    r: "C",
    s: "C",
    t: "C",
    v: "C",
    w: "C",
    x: "C",
    y: "C",
    z: "C",
  };
  //const sy=syllable(w);
  var wese = w.split(" ");
  var syi = [];
  var siya;
  var sy = [];
  for (var a = 0; a < wese.length; a++) {
    siya = silabaJS.getSilabas(wese[a]);
    var silabasArray = siya.silabas;
    for (let i = 0; i < silabasArray.length; i++) {
      const silaba = silabasArray[i].silaba;
      sy.push(silaba);
    }
    sy.push("");
  }
  sy.pop();
  //console.log("sy ", sy);
  return sy
    .map((s) =>
      Array.from(s.toLowerCase())
        .filter((l) => p[l])
        .map((l) => p[l])
        .join("")
    )
    .join("-");
}

function findValue(key) {
  for (const prop in solresol) {
    if (prop.toLowerCase() === key.toLowerCase()) {
      return solresol[prop];
    }
  }
  return false;
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

function searchConcept(value) {
  value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  const keys = [];
  for (const [key, val] of Object.entries(solresol)) {
    if (val.toLowerCase() === value.toLowerCase()) {
      keys.push(key);
    }
  }
  return keys;
}

function detectNotes(word) {
  var detect = /^(do|Do|re|Re|mi|Mi|fa|Fa|sol|Sol|la|La|si|Si)/i.test(word);
  return detect;
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  return arr
}


function genNrand(n, min, max) {
  let numeros = '';
  for (let i = 0; i < n; i++) {
    numeros += Math.floor(Math.random() * (max - min + 1) + min) + ' ';
  }
  return numeros.trim();
}

function genNrand2(n) {
  let numeros = '';
  for (let i = 0; i < n; i++) {
    numeros += Math.floor(Math.random() * 101) + ' ';
  }
  return numeros.trim();
}

//////////////////////////////

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

function getNotesTempos(roct) {
  var temps = [];
  var nots = [];
  var octaves1d = ["3", "4"];
  var octaves1u = ["4", "5"];
  var octaves2d = ["2", "3"];
  var octaves2u = ["3", "4"];
  var actoctD;
  var actoctU;
  var spaces = Array(abcs.length).fill(0);

  if (roct == 0) {
    actoctD = [...octaves1d];
    actoctU = [...octaves1u];
  } else {
    actoctD = [...octaves2d];
    actoctU = [...octaves2u];
  }

  if (abcs.length == 1) {
    temps = [1];
  }
  if (abcs.length == 2) {
    var r2, pete;
    var rr = floor(random(0, 4));
    if (rr == 0) {
      r2 = floor(random(0, tempos2.length));
      temps = [...tempos2[r2]];
    }
    if (rr == 1) {
      r2 = floor(random(0, tempos3.length));
      pete = [...tempos3[r2]];
      temps[0] = pete[0];
      temps[1] = [pete[1], pete[2]];
    }
    if (rr == 2) {
      r2 = floor(random(0, tempos4.length));
      pete = [...tempos4[r2]];
      temps[0] = pete[0];
      temps[1] = [pete[1], pete[2], pete[3]];
    }
    if (rr == 3) {
      r2 = floor(random(0, tempos5.length));
      pete = [...tempos5[r2]];
      temps[0] = pete[0];
      temps[1] = [pete[1], pete[2], pete[3], pete[4]];
    }
  }

  if (abcs.length == 3) {
     var r3, pete;
    var rr = floor(random(0, 3));
    if (rr == 0) {
     r3 = floor(random(0, tempos3.length));
     temps = tempos3[r3];
    }
    if (rr == 1) {
      r3 = floor(random(0, tempos4.length));
      pete = [...tempos4[r3]];
      temps[0] = pete[0];
      temps[1] = pete[1];
      temps[2] = [pete[2], pete[3]];
    }
    if (rr == 2) {
      r3 = floor(random(0, tempos5.length));
      pete = [...tempos5[r3]];
      temps[0] = pete[0];
      temps[1] = pete[1];
      temps[2] = [pete[2], pete[3], pete[4]];
    }
    //var r3 = floor(random(0, tempos3.length));
    //temps = tempos3[r3];
  }
  if (abcs.length == 4) {
    var r4, pete;
    var rr = floor(random(0, 2));
    if (rr == 0) {
    r4 = floor(random(0, tempos4.length));
    temps = tempos4[r4];
    }
    if (rr == 1) {
     r4 = floor(random(0, tempos5.length));
      pete = [...tempos5[r4]];
      temps[0] = pete[0];
      temps[1] = pete[1];
      temps[2] = pete[2];
      temps[3] = [pete[3], pete[4]];
    }
  }
  if (abcs.length == 5) {
    var r5 = floor(random(0, tempos5.length));
    temps = tempos5[r5];
  }
  var note = "A";
  var octa = 4;

  for (var m = 0; m < abcs.length; m++) {
    note = abcs.substring(m, m + 1);
    if (note == "C" || note == "D" || note == "E" || note == "F") {
      octa = actoctU[floor(random(0, actoctU.length))];
    }
    if (note == "G" || note == "A" || note == "B") {
      octa = actoctD[floor(random(0, actoctD.length))];
    }
    nots.push(note + octa);
  }
  return [temps, nots, spaces];
}

function iniCompo() {
  BMPtempo=select("#inputTempo").value()
  dataSong.tempo=BMPtempo
  var compo = [[BMPtempo, [4, 4], 24, 0], [], [], [], [], [], []];

  var notes = [];
  var tempos = [];
  var notesBass = [];
  var temposBass = [];

  //var BassOrHight = floor(random(0, 2));
  var BassOrHight = 0;
  var gtn1 = getNotesTempos(BassOrHight);
  tempos[0] = gtn1[0];
  notes[0] = gtn1[1];

  gtn1 = getNotesTempos(BassOrHight);
  tempos[1] = gtn1[0];
  notes[1] = gtn1[1];
 
  gtn1 = getNotesTempos(BassOrHight);
  tempos[2] = gtn1[0];
  notes[2] = gtn1[1];

  gtn1 = getNotesTempos(BassOrHight);
  tempos[3] = gtn1[0];
  notes[3] = gtn1[1];
  
  BassOrHight = 1;
  gtn1 = getNotesTempos(BassOrHight);
  temposBass[0] = gtn1[0];
  notesBass[0] = gtn1[1];

  gtn1 = getNotesTempos(BassOrHight);
  temposBass[1] = gtn1[0];
  notesBass[1] = gtn1[1];
 
  gtn1 = getNotesTempos(BassOrHight);
  temposBass[2] = gtn1[0];
  notesBass[2] = gtn1[1];

  gtn1 = getNotesTempos(BassOrHight);
  temposBass[3] = gtn1[0];
  notesBass[3] = gtn1[1];
 

  multitempos.concat(tempos);  
  var compor= phonetic(iword);
  dataSong.CVconcept=compor
  console.log('compor',compor)
  var pattmetro=select('#inputMetronomeVolume').value()
  pattmetro=pattmetro.replace(/\s+/g, ' ').trim()
  
  var patternm=pattmetro.split(' ')
  var pattern=patternm.map(Number)
  dataSong.metronomeVolume=pattmetro
  
  var pattMetroInstr=select('#inputMetronomeInstruments').value()
  dataSong.metronomeInstruments=pattMetroInstr
  var metroInst=JSON.parse(pattMetroInstr)
  //var pattern = [true, true, true];
  var ini = 0;
  var nini = 0;
  var intense = 10;
  var ncompass = compo[0][1][0];
  var duranote = 2;
  //var nbarsRhythm = notes.length * 2 + 1;
  var nbarsRhythm = compor.length ;
  var comporn=compor.split('')
  var ntimes=select('#inputNtimesCoda').value();
  ntimes=parseInt(ntimes)
  dataSong.nTimesCoda=ntimes;
  var instva=select('#inputInstruments').value();
  var instval=instva.split(' ')
  var instrum=instval.map(Number)
  var instru=[]
  for(var j=0;j<ntimes;j++){
    if(j%2==0){instru.push(instrum[0])}else{instru.push(instrum[1])}
  }

    ////////////////  RHYTHMS
   
    ////////////////  RHYTHM 1
 for(var q=0;q<parseInt(ntimes/4);q++){ 
    if (pattern[0]!=0) {
    duranote = 1;
    for (var a = 0; a < duranote * nbarsRhythm; a++) {
      intense = pattern[0];
      nini = metroInst.whole[0];
      if (a % ncompass == 0) {
        intense = pattern[0]+20;;
        nini = metroInst.whole[1];
      }
      compo[2].push([
        4,
        floor(random(intense, intense + 10)),
        [ini],
        [nini],
        duranote,
        10,
        1,
        false,
      ]);
    }
  }
 }
    for(var q=0;q<parseInt(ntimes/2);q++){ 
  if (pattern[1]!=0) {
    ////////////////  RHYTHMS
    //baseRhythm(notes,tempos)

    duranote = 2;
    ////////////////  RHYTHM1
    for (var a = 0; a < duranote * nbarsRhythm; a++) {
      intense = pattern[1];
      nini = metroInst.half[0];
      if (a % ncompass == 0) {
        intense = pattern[1]+20;;
        nini = metroInst.half[1];
      }
      compo[2].push([
        4,
        floor(random(intense, intense + 10)),
        [ini],
        [nini],
        duranote,
        10,
        1,
        false,
      ]);
    }
  }
       }
for(var q=0;q<ntimes;q++){ 
  if (pattern[2]!=0) {
    ////////////////  RHYTHM2

    duranote = 4;
    for (var a = 0; a < duranote * nbarsRhythm; a++) {
      intense = pattern[2];
      nini = metroInst.quarter[0];
      if (a % ncompass == 0) {
        intense = pattern[2]+20;
        nini = metroInst.quarter[1];
      }
      compo[3].push([
        4,
        floor(random(intense, intense + 10)),
        [ini],
        [nini],
        duranote,
        10,
        1,
        false,
      ]);
    }
  }
  if (pattern[3]!=0) {
    duranote = 8;
    ////////////////  RHYTHM3
    for (var a = 0; a < duranote * nbarsRhythm; a++) {
      intense = pattern[3];
      nini = metroInst.eight[0];
      if (a % ncompass == 0) {
        intense = pattern[3]+20;;
        nini = metroInst.eight[1];
      }

      compo[4].push([
        4,
        floor(random(intense, intense + 10)),
        [ini],
        [nini],
        duranote,
        10,
        1,
        false,
      ]);
    }
  }
   
// END METRONOME
   
//// MELODY
  ////////////////  MELODY SOPRANO
 ini = 1;
  for(var k=0;k<comporn.length;k++){
    var noter
    var n = 0;
    if(comporn[k]=='C'){n=0;noter=[...notes[0]]}
    if(comporn[k]=='V'){n=1;noter=[...notes[1]]}
    if(comporn[k]=='-'){n=2;noter=[...notes[2]]}
    if(comporn[k]=='--'){n=3;noter=[...notes[3]];ini=1;}
  
  for (var m = 0; m < 1; m++) {
    for (var a = 0; a < noter.length; a++) {
      intense =50;
      if (a % ncompass == 0) {
        intense = 70;
      }
      compo[5].push([
        instru[q],
        floor(random(intense, intense+10)),
        [ini],
        [notes[n][a]],
        tempos[n][a],
        1,
        1,
        false,
      ]);
      ini = 0;
    }
  }
}

  ////////////////  MELODY BASS
 ini = 1;
  for(k=0;k<comporn.length;k++){
    noter
    n = 0;
    if(comporn[k]=='C'){n=0;noter=[...notesBass[0]]}
    if(comporn[k]=='V'){n=1;noter=[...notesBass[1]]}
    if(comporn[k]=='-'){n=2;noter=[...notesBass[2]]}
    if(comporn[k]=='--'){n=3;noter=[...notesBass[3]];ini=1;}
  
  for (var m = 0; m < 1; m++) {
    for (var a = 0; a < noter.length; a++) {
      intense = 70;
      if (a % ncompass == 0) {
        intense = 90;
      }
      compo[6].push([
        4,
        floor(random(intense, intense+10)),
        [ini],
        [notesBass[n][a]],
        temposBass[n][a],
        1,
        1,
        false,
      ]);
      ini = 0;
    }
  }
}
 tempos=shuffleArray(tempos)
 }// end q
   
   
  //console.log(JSON.stringify(compo));
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
      } else {
      }
      if (compo[nt][a][1] < 0) {
        compo[nt][a][1] = compo[0][3];
      } else {
      }
      if (Array.isArray(compo[nt][a][2])) {
      } else {
        compo[nt][a][2] = "T" + compo[nt][a][2] * 120 * 4;
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
  expi.mousePressed(function () {
    info.html(
      '<br><a id="linktext" href="' +
        escribe.dataUri() +
        '">Midi file</a>&nbsp;' +
        //'<a id="linktextWav" href="' +
        //srcw +
        //'" target="_blank">Wav file</a>'+
        "<p>&nbsp;</p>" +
        "" +
        "" +
        "<p>&nbsp;</p>"
    );

    expi.hide();

    var lise = select("#linktext");
    lise.mousePressed(function () {
      setTimeout(function () {
        lise.hide();
      }, 2000);
    });
  });
  select("#section15 midi-visualizer").hide();
  playi.attribute("src", escribe.dataUri());
  playi.mouseClicked(function () {
    select("#section15 midi-visualizer").show();
  });
  //var plavi=select('#section15 midi-visualizer')
  //console.log(plavi)
}
