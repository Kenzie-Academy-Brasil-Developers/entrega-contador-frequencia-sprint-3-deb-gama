//capturar o etxto digitado
//uniformizar os caracteres para preparar a contagem
//iterar os caracteres um a um para fazer a contagem de frequencia 



// adiconar o handler de clique para que o botão execute a função
//quando o botão for clicado, deve retornar a contagem de frequencia das letras do input
const button = document.getElementById("countButton");
button.addEventListener("click", captureText)
   // teu código vai aqui ...

function captureText(){
let typedText = document.getElementById("textInput").value;
typedText = typedText.toLowerCase(); 
typedText = typedText.replace(/[^a-z'\s]+/g, "");


countLetter(typedText);

//words = typedText.split(/\s/); // essa vai separar as strings

}
//neste momento o texto capturado e modificado está na variável typedText. no console.log dele, palavras com acento são subtraídas Luís vira lus


function countLetter(typedText){

    const letterCounts = {};

    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];//iterando sobre cada elemento da array
            // faça algo com cada letra 
      
         //Ao encontrar uma letra pela primeira vez, você irá definir a contagem dela como 1. Caso contrário, adicionará um à contagem. Usar o conceito de array associativo
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        }   else { 
                letterCounts[currentLetter]++; 
            }
    }   
    
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
    }
        
}

 //função para separar as strings
 words = typedText.split(/\s/);


//captura o valor digitado no input
//let typedText = document.getElementById("textInput").value;

//=>typedText = typedText.toLowerCase(); 
// Isto muda todas as letras para minúsculas

// =>typedText = typedText.replace(/[^a-z'\s]+/g, ""); 

// Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
// Iremos aprender mais sobre como usar a função replace numa lição mais à frente.



//Você pode indexar em strings da mesma forma que pode indexar em arrays. A expressão typedText[4] retornará o 5º caractere de typedText. Isso significa que você pode escrever um loop em todos os caracteres de typedText dessa forma:
//for (let i = 0; i < typedText.length; i++) {
  //  let currentLetter = typedText[i];
    // faça algo com cada letra 
 //}




// const letterCounts = {};

 //if (letterCounts[currentLetter] === undefined) {
    //letterCounts[currentLetter] = 1; 
 //} else { 
   // letterCounts[currentLetter]++; 
// }



 //Para saber quantas vezes cada letra apareceu, você pode usar um loop for..in em letterCounts. o for in não segue ordem, não deve ser utilizado em casos onde isso é importante. Nestes casos use o for of
 //for (let letter in letterCounts) { 
  //  const span = document.createElement("span"); 
   // const textContent = `"${letter}": ${letterCounts[letter]}, `;
   // span.innerText = textContent; 
   // const letters = document.getElementById("lettersDiv");
   // letters.appendChild(span); 
 //}

