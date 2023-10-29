
let musics=["la symphonie du nouveau monde","Home Depot Theme Orchestral Remix","Le Perv","NARC","Anissa"];
let sante = 10;
let i = 0;


while ( i< 29 && sante > 0) {
     i = i +1
    let music = musics[Math.floor(Math.random() * 5)];
    console.log("il reste " + (30-i) + " feux rouges et écoute " + music);
    if (music == "Anissa") {
         sante -= 1
        console.log("la santé mentale de Samih baisse à ", sante)
    }
    

}
if (sante == 0){
    console.log("tout est terminé");
    alert ("EXPLOSION");  
} else {console.log("Samih est arrivé à destination sans encombre")}
