function drawCenteredTriangle(game){
    for(let m = 1; m <= game; m++){
        let newLine = "";
        let spaces = game - m;
        for(let s = 0; s < spaces; s++){
            newLine += " ";
        }
        for(let k = 1; k <= m; k++){
            newLine += k + " ";
        }
        console.log(newLine);
    }
}
drawCenteredTriangle(20)