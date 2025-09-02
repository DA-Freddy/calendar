const adventSprueche = [
  "Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht!",
  "Advent, Advent, der Keks der brennt!",
  "Was macht ein Schneemann im Fitnessstudio? Pump-kin!",
  "Lieber Glühwein als Blüh-Schnee!",
  "Wenn es draußen schneit, schmilzt der Stress ganz leise mit.",
  "Weihnachten: die einzige Zeit, in der man von Keksen leben darf.",
  "Was sagt ein Schneemann zum anderen? 'Riechst du auch Karotten?'",
  "Geschenke sind das Konfetti des Herzens.",
  "Wieso steht der Tannenbaum im Wald? Weil er keinen Platz im Wohnzimmer hat.",
  "Advent: Zeit, in der man Plätzchen für die Seele backt.",
  "Was macht ein Lebkuchenmann beim Arzt? Er krümelt alles voll.",
  "Weihnachtszeit ist, wenn die Küche nach Vanille riecht und Herzen nach Wärme.",
  "Warum ging der Weihnachtsmann zum Friseur? Damit er wieder fresh durch den Kamin passt!",
  "Plätzchen backen ist Therapie mit Schokolade.",
  "Was macht ein Schneemann, wenn er warm wird? Er geht baden.",
  "Im Advent zählt man die Tage – und die Kekse.",
  "Warum ist der Weihnachtsmann immer so fröhlich? Weil die Elfen seine Witze nicht mehr hören können.",
  "Glühwein ist wie ein Winter-Update für die Seele.",
  "Was macht der Weihnachtsmann am Strand? Sonnenbrand sammeln.",
  "Advent ist, wenn man beim Kerzenschein Pläne für das ganze Jahr schmiedet.",
  "Warum können Schneemänner nicht Fußball spielen? Weil sie Angst vorm Schmelzen haben.",
  "Weihnachten ist kein Datum, sondern ein Gefühl.",
  "Was hängt am Baum und kann singen? Eine Tannenbiene.",
  "Advent heißt: Jeden Tag ein kleines bisschen mehr Freude."
];


function addDoor() {
    for (let i = 1; i < 25; i++) {
        document.getElementById('calendar').innerHTML += `<div id="door${i}" onclick="changeColor(${i})" class="single-door">${i}</div>`
    }
    console.log();
    
}

function changeColor(i){
    let door = document.getElementById('door'+i);
    door.classList.toggle('open-door');
    door.innerHTML = adventSprueche[i-1];
}

