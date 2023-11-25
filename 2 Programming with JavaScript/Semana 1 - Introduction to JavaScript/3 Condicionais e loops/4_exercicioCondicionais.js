/*
//single loop
for (var firstNum = 0; firstNum < 2; firstNum++) {
    console.log(firstNum);
}

for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(secondNum);
}

//single loop
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}


//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " vezes " + secondNum + " igual " + firstNum * secondNum);
    }
}

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}
*/

/*
Exercício 1

Neste exercício, o senhor criará o código para um for loop, usando a variável de contador chamada i a partir de 1.

Para fazer com que o contador seja incrementado em 1 em cada loop, o senhor usará i++.

A condição de saída do loop for deve corresponder à saída fornecida abaixo. 

Dentro do loop, escreva uma instrução if-else, que verificará as seguintes condições:

Primeiro, ele verificará se o valor de i é  1. Se for, seu código registrará no console a string "Gold medal" (Medalha de ouro).

Em seguida, verificará se o valor de i é 2. Se for, seu código registrará no console a string "Silver medal" (Medalha de prata).

Em seguida, seu código verificará se o valor de i é 3. Se for, ele registrará no console a string "Bronze medal".

Para todos os valores restantes de i, o código registrará no console apenas o valor de i.

Observação: o log de console esperado de todo o código deve ser o seguinte
Medalha de ouro
Medalha de prata
Medalha de bronze
4
5
6
7
8
9
10



for (var i = 1; i <= 10; i++) {
    if (i == 1) {
    console.log("Gold medal");
}   else if (i == 2) {
        console.log("Silver medal");
    }   else if (i == 3) {
            console.log("Bronze medal");
        } else {
            console.log(i);
        }
    }

*/

/*
Exercício 2. Use o código concluído da tarefa anterior, mas converta as condicionais em uma instrução switch.
Quando codificar a solução, a saída no console deverá permanecer exatamente igual à da pergunta anterior.

Observação: O senhor precisará de três casos separados para as três medalhas e um caso padrão para todos os outros valores da variável i.
*/

for (var i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i);
        }
    }


/*
Considere o seguinte exemplo: O senhor trabalha como desenvolvedor de uma loja on-line.

A loja vende cubos com letras para crianças pequenas e toda a seção "Shop now" do site é organizada em um layout em que cada cubo à venda é exibido em um componente de cartão simples, com uma imagem do cubo, a letra que ele ensina, uma breve descrição e o preço.

Os cartões são organizados em linhas, de modo que cada linha contém três cartões - três letras diferentes.

Cada cartão é uma prévia do cubo com a letra específica que está à venda, além de ser um link para uma página inteira, dedicada a fornecer mais informações sobre os cubos, seu valor didático e uma maneira de o visitante concluir o processo de pagamento.

Agora, uma pergunta rápida: onde os loops se encaixariam na exibição dessa grade de cartões que mostram os cubos de letras à venda?

Para entender como isso funciona, deixe-me codificar um protótipo básico de como isso poderia funcionar.

Como o senhor ainda não tem conhecimento suficiente para exibir layouts de sites no navegador com a ajuda do JavaScript, por enquanto terei de me contentar em usar uma string simples e o console.

Ainda assim, esse exercício deve ser divertido.



var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

Observação: para que os estilos sejam aplicados, tente executar esse trecho de código no console do navegador.

É isso, com esse código simples, a saída no console mostra cada letra em uma linha separada, com o estilo de um cubo de letras para crianças pequenas.

O código em si deve ser bastante familiar, exceto pela sintaxecubes.length ecubes[i].

Sem entrar em muitos detalhes, aqui estão os dois trechos de código explicados da forma mais simples possível.

Ocubes.length retorna um número. Comocubes é uma cadeia de caracteres, ocubes.length me dá o comprimento da cadeia salva na variável.

Portanto, isso me dá o número 7, fazendo com que meu loop for se pareça com o seguinte:

A segunda parte do código que é nova aqui é o snippetcubes[i].

Isso simplesmente direciona cada letra individual no loop, com base no valor atual da variáveli.

Em outras palavras,cubes[i], quandoi é igual a0, é:A.

Então,cubes[i], quandoi é igual a1, é:B.

Isso continua por quantos loops meu loop for executar - e isso é determinado pelo valorcubes.length.

Também é muito versátil, pois, se eu, por exemplo, decidisse alterar o comprimento da cadeiacubes, não precisaria atualizar a condição dei < cubes.length, pois ela é atualizada automaticamente quando altero o comprimento da cadeiacubes.

Há outras maneiras de armazenar dados em aplicativos JavaScript que o senhor ainda não conhece.

Mas podemos usar a mesma abordagem com esses outros tipos de dados para obter resultados que funcionam essencialmente com o mesmo princípio que o descrito acima.

O uso de loops é a essência da abordagem adotada no desenvolvimento de muitas peças diferentes de funcionalidade em software atualmente.

Alguns exemplos adicionais
Se eu estiver programando um cliente de e-mail, obterei alguns dados estruturados sobre os e-mails a serem exibidos na caixa de entrada e, em seguida, usarei um loop para realmente exibi-los de maneira bem formatada.

Se eu estiver programando um site de comércio eletrônico que vende carros, obterei uma fonte de dados bem estruturados sobre cada um dos carros e, em seguida, farei um loop sobre esses dados para exibi-los na tela.

Se eu estiver programando um calendário on-line, farei um loop sobre os dados contidos em cada um dos dias para exibir um calendário bem formatado.

Há muitos outros exemplos de uso de loops no código.

O uso de loops com dados formatados adequadamente para uma determinada tarefa é um componente crucial da criação de software.

Nas lições a seguir, aprenderemos sobre diferentes maneiras de agrupar dados relacionados e de exibi-los na tela usando JavaScript.

Quando combinado com o que o senhor já aprendeu sobre loops, isso lhe dá as habilidades para criar vários tipos de interfaces de usuário em que há informações repetitivas.

Alguns exemplos mais específicos incluem:

fazer um loop sobre os títulos de posts de blogs em alguns dados estruturados e exibir cada título de post de blog em uma página inicial de blog

looping sobre postagens de mídia social em alguns dados estruturados e exibição de cada postagem de mídia social com base em algumas condições

fazer looping em alguns dados estruturados sobre roupas disponíveis para venda em uma loja de roupas on-line e exibir dados relevantes para cada item de roupa

Agora o senhor entende a importância de saber como trabalhar com loops em JavaScript. Nas próximas lições, aprenderemos outras informações relevantes que permitirão que o senhor faça isso.

*/