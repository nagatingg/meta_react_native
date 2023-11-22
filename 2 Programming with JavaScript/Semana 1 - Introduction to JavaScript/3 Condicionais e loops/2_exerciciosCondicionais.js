/*
Conclua as etapas a seguir para criar: O senhor tem idade suficiente? 
Declare uma variável age usando a palavra-chave var e defina-a como o número 10.

Adicione uma instrução if que verifica se o valor da variável age é maior ou igual ao número 65. Dentro do bloco if, console.log a frase: "O senhor recebe sua renda da sua pensão".

Adicione um bloco "else if", no qual o senhor verificará se o valor da idade é menor que 65 e maior ou igual a 18. Dentro desse bloco "else if", digite "console.log" e, em seguida, "Each month you get a salary" (Todo mês o senhor recebe um salário).

Adicione outro bloco "else if" e, dessa vez, verifique se o valor da idade é menor que 18. Dentro do bloco "else if", digite "console.log" e, em seguida, "You get an allowance".

Adicione uma instrução "else" para capturar qualquer outro valor. Dentro do bloco, digite "console.log" e, em seguida, "The value of the age variable is not numerical" (O valor da variável idade não é numérico).

Tente ajustar a idade e executar o programa para ver como isso afetará o resultado.
*/
/*
var age = 10;

if(age >= 65) {
    console.log("O senhor recebe sua renda da sua pensão");
} if (age < 65 && age > 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    ("O valor da variável idade não é numérico");
}
*/
-
/*
Codifique o programa de dias da semana como uma instrução switch
Na próxima linha, defina uma nova variável, nomeie-a como day e defina seu valor como "Sunday".

Comece a codificar uma instrução switch, passando a variável day como a expressão a ser avaliada.

Dentro de switch, adicione casos para cada dia da semana, começando com "Monday" (segunda-feira) e terminando com "Sunday" (domingo). Certifique-se de usar valores de string para os dias. Dentro de cada caso, por enquanto, adicione apenas console.log('Do something') e adicione um break; na linha abaixo.

Na parte inferior da instrução switch, adicione o caso padrão e adicione um console.log('There is no such day').

Por fim, atualize as chamadas console.log para cada caso, com base em qualquer atividade que o senhor tenha em cada um dos dias.
*/

var day = "Sunday";

switch(day) {
    case "Monday":
        console.log("Do something");
        break;
    case "Tuesday":
        console.log("Do something");
        break;
    case "Wednesday":
        console.log("Do something");
        break;
    case "Thursday":
        console.log("Do something");
        break;
    case "Friday":
        console.log("Do something");
        break;
    case "Saturday":
        console.log("Do something");
        break;
    case "Sunday":
        console.log("Do something");
        break;
    default:
        console.log("There is no such day");
} 