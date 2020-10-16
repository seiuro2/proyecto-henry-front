array= [
    {
        "marca": "Moitorola",
        "modelo": "G 84 PLAY",
        "sistema_operativo": "Android",
        "pantalla_pulgadas": 5,
        "pantalla_resolucion": "1280x720",
        "camara_resolucion": "8 Mpx",
        "camara_frontal": true,
        "camara_frontal_res": "5 Mpx",
        "memoria_interna": "16 GB"
    },
    {
        "marca": "Motorola",
        "modelo": "G 4 PLAY",
        "sistema_operativo": "Android",
        "pantalla_pulgadas": 5,
        "pantalla_resolucion": "1280x720",
        "camara_resolucion": "8 Mpx",
        "camara_frontal": true,
        "camara_frontal_res": "5 Mpx",
        "memoria_interna": "16 GB"
    },]

function agregarElementos(){ 
var lista=document.getElementById("ulListado"); 
array.forEach(function(data,index){
var linew= document.createElement("li");    
var contenido = document.createTextNode(data.marca+' '+data.modelo+" "+data.sistema_operativo+" "+data.pantalla_pulgadas+" "+data.pantalla_resolucion+" "+data.camara_resolucion);
lista.appendChild(linew);
linew.appendChild(contenido);

})
}
agregarElementos();