

function consultar() {
    var contador1 = parseInt(document.getElementById('contador1').value) || 0;
    var contador2 = parseInt(document.getElementById('contador2').value) || 0;
    var contador3 = parseInt(document.getElementById('contador3').value) || 0;

    var totalStickers = contador1 + contador2 + contador3;


    if (totalStickers <= 10 && totalStickers >0) {
    document.getElementById('textoTotalStickers').textContent="Llevas: "+totalStickers+" stickers";
    } else if(totalStickers >10) {
     document.getElementById('textoTotalStickers').textContent= "Llevas demasiados stickers";
    }
    else if(totalStickers ==0) {
        document.getElementById('textoTotalStickers').textContent= "No has agregado ningún sticker";
       }
    else if(totalStickers <0) {
        document.getElementById('textoTotalStickers').textContent= "No puedes llevar menos de 0 stickers";
       }  
}