/*
Tarefa 1: Uso do operador lógico &&
O senhor está programando um jogo de RPG em que cada personagem tem determinados níveis de habilidade com base no valor salvo em sua pontuação.

Crie uma variável chamada score e defina-a como 8

Use console.log() que inclua a string "Mid-level skills:" e compare a variável score com 0 acima e 10 abaixo usando o operador && 

A saída esperada no console deve ser: "Mid-level skills: true".
*/

var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10); // Feito

/*
Tarefa 2: Uso do operador lógico ||
Imagine que o senhor esteja programando um videogame. No momento, o senhor está prestes a codificar alguns trechos relacionados à condição de fim de jogo.

O senhor precisa codificar uma nova variável chamada timeRemaining e defini-la como 0. Também precisa codificar uma nova variável chamada energy e defini-la como 10.

Em seguida, o senhor deve escrever um trecho de código que possa ser usado para determinar se o jogo terminou, com base no fato de o valor da variável timeRemaining ser 0 ou o valor da variável energy ser 0.

Conclua a tarefa usando as seguintes etapas:

Declare a variável timeRemaining e atribua a ela o valor de 0.

Declare a variável energy e atribua a ela o valor 10.

Registre no console os seguintes parâmetros: "Game over: ", e timeRemaining == 0 || energy == 0

Observe que a saída esperada no console deve ser: "Game over: true".
*/

var timeRemaining = 0;
var energy = 10;

console.log("Game over: ", timeRemaining == 0 || energy == 0); // Feito

/*
Tarefa 3: Usar o operador de módulo, %, para testar se um determinado número é ímpar
O senhor precisa codificar um pequeno programa que recebe um número e determina se é um número par (como 2, 4, 6, 8, 10).

Para realizar essa tarefa, o senhor precisa declarar seis variáveis, como segue:

A primeira variável, denominada num1, , deve receber o valor numérico 2.

A segunda variável, denominada num2, deve receber o valor numérico 5.

A terceira variável, denominada test1, deve receber o cálculo de num1 % 2. Observação: a execução desse código retornará um número.

A quarta variável, denominada test2, deve receber o cálculo de num2 % 2. Observação: a execução desse código também retornará um número.

A quinta variável, denominada result1, deve ser atribuída ao resultado da comparação se o número armazenado na variável test1 não for igual a 0, em outras palavras, isto é: test1 == 0.

A sexta variável, denominada result2, deve receber o resultado da comparação se o número armazenado na variável test2 não for igual a 0, ou seja, test2 == 0.

Execute o log do console duas vezes depois de definir as variáveis:

O primeiro log do console deve ter o seguinte código entre parênteses: "Is", num1, "an even number?", result1

O segundo log do console deve ter o seguinte código entre parênteses: "Is", num2, "an even number?", result2

Observação: A saída para o console deve ser a seguinte:

Is 2 an even number? true

Is 5 an even number? false
*/

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2); // feito

/*
Tarefa 6: Use o operador += para acumular valores em uma variável
Codifique uma nova variável e nomeie-a como counter, atribuindo-a ao valor de 0.

Na próxima linha, use o operador += para aumentar o valor do contador em 5.

Na linha seguinte, use o operador += para aumentar o valor do contador em 3.

Na quarta linha, registre no console o valor da variável counter.

Observação: O valor de saída deve ser 8.
*/

var counter = 0;
counter += 5;
counter += 3;
console.log(counter); // feito






