var voittolista = [];
var v1 = [1, 2, 3, 4, 5];
var v2 = [6, 7, 8, 9, 10];
var v3 = [11, 12, 13, 14, 15];
var v4 = [16, 17, 18, 19, 20];
var v5 = [21, 22, 23, 24, 25];
var v6 = [1, 6, 11, 16, 21];
var v7 = [2, 7, 12, 17, 22];
var v8 = [3, 8, 13, 18, 23];
var v9 = [4, 9, 14, 19, 24];
var v10 = [5, 10, 15, 20, 25];
var v11 = [1, 7, 13, 19, 25];
var v12 = [5, 9, 13, 17, 21];

voittolista.push(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12);

document.getElementById("pelaajan").innerHTML = "ruudun nro.";
var ruudut = [
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " "
];
var pelaaja = "X";
var ruutu = document.getElementsByTagName("th");
var ruutuid = "juu";
function main() {
  document.getElementById("reset").addEventListener("click", uusipeli, false);
  for (var i = 0; i < ruutu.length; i++) {
    ruutu[i].addEventListener("click", muuta, false);
  }
}

function muuta() {
  ruutuid = this.id;
  if (ruudut[ruutuid - 1] === " ") {
    document.getElementById("pelaajan").innerHTML = ruutuid;
    ruudut[ruutuid - 1] = pelaaja;
    this.innerHTML = pelaaja;
    voitto();
    if (pelaaja === "X") {
      pelaaja = "Y";
      document.getElementById("vuoro").innerHTML = "Pelaajan Y vuoro";
    } else {
      pelaaja = "X";
      document.getElementById("vuoro").innerHTML = "Pelaajan X vuoro";
    }
  } else if (ruudut[ruutuid - 1] === "i") {
    document.getElementById("pelaajan").innerHTML =
      "VOITTO " + pelaaja + " paina reset nappia";
  } else {
    document.getElementById("pelaajan").innerHTML = "siinä on jo merkki";
  }
}
function voitto() {
  // Voitto funktio tallentaa kaikki mahdolliset voitto tapahtumat listoihin ja tallentaa nämä listat isompaan listaan. Näitä listoja se vertaa listaan pöydältä löytyvistä merkeistä ja määrittelee onko peli voitettu.
  var a;
  var b;
  var c;
  var d;
  var e;
  for (var i = 0; i < voittolista.length; i++) {
    a = voittolista[i][0] - 1;
    b = voittolista[i][1] - 1;
    c = voittolista[i][2] - 1;
    d = voittolista[i][3] - 1;
    e = voittolista[i][4] - 1;
    if (
      (ruudut[a] === "X" &&
        ruudut[b] === "X" &&
        ruudut[c] === "X" &&
        ruudut[d] === "X" &&
        ruudut[e] === "X") ||
      (ruudut[a] === "Y" &&
        ruudut[b] === "Y" &&
        ruudut[c] === "Y" &&
        ruudut[d] === "Y" &&
        ruudut[e] === "Y")
    ) {
      document.getElementById("pelaajan").innerHTML = "VOITTO " + pelaaja;
      ruudut = [
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i",
        "i"
      ];
      for (var u = 0; i < ruutu.length; u++) {
        //ruutu[i].style.backgroundColor= "goldenrod";
        ruutu[i].classList.add("voittoväri");
      }
      alert("Player " + pelaaja + " won!");
    } else {
    }
  }
} //Uusipeli funktio resetoi Kaiken alkupisteeseen jolloin peli alkaa alusta.
function uusipeli() {
  ruudut = [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " "
  ];
  for (var i = 0; i < ruutu.length; i++) {
    ruutu[i].innerHTML = " ";
    pelaaja = "X";
    document.getElementById("vuoro").innerHTML = "Pelaajan X vuoro";
    document.getElementById("pelaajan").innerHTML = "ruudun nro.";
    //ruutu[i].style.backgroundColor= "white";

    ruutu[i].classList.remove("voittoväri");
  }
}
main();
