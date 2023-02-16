const input_txt = document.querySelector(".input-texto");
const output_txt = document.querySelector(".output-texto");





function ButtonEncriptar(){
const txtEncriptado = encriptar(input_txt.value).toLowerCase();
output_txt.value=txtEncriptado;
aparece();

}
// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`
function encriptar(texto){
texto = texto.toLowerCase();
const resultado = texto.replaceAll("e","enter");
const resultado2 = resultado.replaceAll("i","imes");
const resultado3 = resultado2.replaceAll("a","ai");
const resultado4 = resultado3.replaceAll("o","ober");
const resultado_Final = resultado4.replaceAll("u","ufat");
texto=resultado_Final;
return texto;
}

function ButtonDesencriptar (){
const txt_des = desencriptar(input_txt.value).toLowerCase();
output_txt.value= txt_des;
aparece();


}


document.getElementById('btn-copiar').onclick = (e) => {
    e.preventDefault();
    const mensagem = document.querySelector("#mensagem");
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value)
    mensagem.value = "";
  }



function desencriptar(texto){
    texto = texto.toLowerCase();
const resultado = texto.replaceAll("enter","e");
const resultado2 = resultado.replaceAll("imes","i");
const resultado3 = resultado2.replaceAll("ai","a");
const resultado4 = resultado3.replaceAll("ober","o");
const resultado_Final = resultado4.replaceAll("ufat","u");
texto=resultado_Final;
return texto;
 


}
function aparece(){
   
        document.getElementById("div-desaparece").style.display = 'none';
        document.getElementById("div-aparece").style.display = 'block';
      }

