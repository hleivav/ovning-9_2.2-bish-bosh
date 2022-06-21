// variablerna som fångar UI//
let loopStartsWith = document.getElementById("loopStart");
let loopEndsWith = document.getElementById("loopEnd");
let bish = document.getElementById("bish");
let bosh = document.getElementById("bosh"); 
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.onclick = calculateBB;

function calculateBB(){
    if (loopStartsWith.value > 0){
        let bb=""; 
        for (i=loopStartsWith.value;i<=loopEndsWith.value;i++){
            if(i%bish.value===0){
                bb = bb + "bish\n";
            } else if(i%bosh.value===0){
                bb = bb + "bosh\n";
            } else{
                bb = bb + i + "\n";
            }
        }
        result.value=bb;
    } else {
        alert("Se till att du inte matar in negativa siffror.")
    }

}
