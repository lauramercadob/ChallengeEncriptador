let ingresadoArea = document.querySelector(".msj-encriptar")//area de texto ingresado
let cambiarCopiar = document.querySelector(".btn-copiar"); //boton Copiar

function checarMinusculas(cadena){
    //Checamos que todas las letras son minusculas y que no son solo espacios
    
        let chCode = 0;
        let resultado = true;
        let cadenaVacia = "";
    
        //Minusculas
        for (let i=0; i<(cadena.length); i++){
            chCode = cadena.charCodeAt(i);
            if (((chCode < 97) || (chCode > 122)) && (chCode != 164) && (chCode != 32) && (chCode != 10)){
                alert("Debes escribir solo con minusculas y sin acentos");
                resultado = false;
                break;
            }
        }
        
        //No solo espacios
        for (let i=0; i<(cadena.length); i++){
            cadenaVacia = cadenaVacia + " ";
        }
        if (cadena == cadenaVacia){
            alert("Debes escribir algún texto");
            resultado = false;
        }
        
        return(resultado);
    }
    

function encriptar(){

    let ingresado = ingresadoArea.value;
            
        if (checarMinusculas(ingresado) == true){
        //i es para que afecte tanto mayuculas como minusculas
        //g es para toda la linea u oración
        //m es para que afecte a multiples líneas o párrafo
        var txtcifrado = ingresado.replace(/e/igm,"enter");
        var txtcifrado = txtcifrado.replace(/o/igm,"ober");
        var txtcifrado = txtcifrado.replace(/i/igm,"imes");
        var txtcifrado = txtcifrado.replace(/a/igm,"ai");
        var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    
        document.getElementById("sin-mensaje").style.display = "none";
        document.getElementById("mensajeEncriptado").innerHTML = txtcifrado;
        document.getElementById("mensajeEncriptado").style.display = "show";
        document.getElementById("mensajeEncriptado").style.display = "inherit";
        document.getElementById("btncopiar").style.display = "show";
        document.getElementById("btncopiar").style.display = "inherit";}
        cambiarCopiar.innerHTML = "Copiar";
  
  }
  
  function desencriptar(){
    let ingresado = ingresadoArea.value;
        
    if (checarMinusculas(ingresado) == true) {
        var txtcifrado = ingresado.replace(/ufat/igm,"u");
        var txtcifrado = txtcifrado.replace(/ai/igm,"a");
        var txtcifrado = txtcifrado.replace(/imes/igm,"i");
        var txtcifrado = txtcifrado.replace(/ober/igm,"o");
        var txtcifrado = txtcifrado.replace(/enter/igm,"e");
  
    document.getElementById("sin-mensaje").style.display = "none";
    document.getElementById("mensajeEncriptado").innerHTML = txtcifrado;
    document.getElementById("mensajeEncriptado").style.display = "show";
    document.getElementById("mensajeEncriptado").style.display = "inherit";
    document.getElementById("btncopiar").style.display = "show";
    document.getElementById("btncopiar").style.display = "inherit";}
    cambiarCopiar.innerHTML = "Copiar";
  }
  
  function copiar(){
    var contenido = document.querySelector("#mensajeEncriptado");
    contenido.select();
    document.execCommand("copy");
    cambiarCopiar.innerHTML = "Texto copiado";
    
  }

  function reiniciar(){
    location.reload();
  }