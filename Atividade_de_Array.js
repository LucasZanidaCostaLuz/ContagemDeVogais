let frase = 'Amado, você é fiel no que está fazendo pelos irmãos, apesar de não os conhecer. Eles falaram à igreja a respeito desse seu amor. Você fará bem se os encaminhar em sua viagem de modo agradável a Deus, pois foi por causa do Nome que eles saíram, sem receber ajuda alguma dos gentios. É, pois, nosso dever receber com hospitalidade irmãos como esses, para que nos tornemos cooperadores em favor da verdade.';

let letras = frase.split('');

let vogais = letras.filter((letra) => ["a", "e", "i", "o", "u"].includes(letra.toLowerCase()));

console.log("vogais encontradas: " + vogais.join(', '));

console.log("Número total de vogais: " + vogais.length);

//Lógica escrita:
//1. criar uma variável frase e atribuir um valor a ela
//2. criar outra variável com a função de separar a frase colocada por letras
//3. filtrar as vogais com acento e sem acento utilizando o código .filter
//4. exibir as vogais encontradas
//5. exibir a quantidade de vogais encontrada