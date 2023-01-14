document.getElementById("boton").onclick = function  (){
document.getElementById("parrafo").innerHTML = "PARRAFO cambiado";
console.log("controlando la funsion");
}
const collection = document.getElementsByClass("palabrasColor"); 
for(let i=0;i<collection.length;i++){
    collection(i).backgroundColor= "blue";
}
document.getElementById("cambiar").onclick=function(){
    document.getElementsByClass("palabrasColor").backgroundColor="grey";
}
