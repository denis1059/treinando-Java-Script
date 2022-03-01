
var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;


function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
      palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';

    // A primeira linha (linha 2 no código acima) declara uma variável chamada palpiteUsuario e define seu valor igual ao valor inserido pelo jogador no campo de texto. Nós também rodamos esse valor através do método embutido Number(), apenas para ter certeza de que o valor inserido é um número.


    /*Em seguida, encontramos nosso primero bloco de código condicional. Um bloco de código condicional lhe permite executar código seletivamente, dependendo se uma condição é verdadeira ou não. Se parece um pouco com uma função, mas não é. A forma mais simples de um bloco condicional começa com a palavra chave if, depois os parênteses, depois as chaves. Dentro dos parênteses nós incluímos um teste. Se o teste retornar true(verdadeiro), o código dentro das chaves é executado. Caso contrário, não é executado, e seguimos para a próxima parte do código. Neste caso, o teste está verificando se a variável contagemPalpites é igual a 1 (isto é, se essa é ou não a primeira tentativa do jogador):

    contagemPalpites === 1

    Se a condição for verdadeira, nós tornamos o conteúdo do parágrafo de palpites, <p class="palpites"></p> igual a "Palpites anteriores: ". Caso contrário, o texto não é exibido.


    A linha 20 acrescenta o valor atual de palpiteUsuario ao final do parágrafo palpites, mais um espaço em branco para que haja espaçamento entre cada palpite mostrado.

    */
  
    if (palpiteUsuario === numeroAleatorio) {
      ultimoResultado.textContent = 'Parabéns! Você acertou!';
      ultimoResultado.style.backgroundColor = 'green';
      baixoOuAlto.textContent = '';
      configFimDeJogo();
    

    // Essa parte do codigo if(){ } confere se o palpite do jogador é igual ao número aleatório (numeroAleatorio) definido no topo do nosso JavaScript. Se for, o jogador adivinhou corretamente o número e venceu o jogo. Então mostramos ao jogador uma mensagem de parabenização com uma agradável cor verde, limpamos o conteúdo do parágrado que informa sobre o palpite ser alto ou baixo <p class="baixoOuAlto"></p>, e executamos uma função chamada configFimDeJogo()



    } else if (contagemPalpites === 10) {
      ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
      baixoOuAlto.textContent = '';
      configFimDeJogo();

      //Agora nós encadeamos outro teste ao final deste anterior usando uma estrutura else if(){ }. Este confere se o palpite do jogador é sua última tentativa. Se for, o programa faz o mesmo que no bloco anterior, porém com uma mensagem de fim de jogo ao invés do texto de parabenização.
    } else {
      ultimoResultado.textContent = 'Errado!';
      ultimoResultado.style.backgroundColor = 'red';
      if(palpiteUsuario < numeroAleatorio) {
        baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
      } else if(palpiteUsuario > numeroAleatorio) {
        baixoOuAlto.textContent = 'Seu palpite está muito alto!';
      }
    }

    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
  }

  //As próximas três linhas da função (linhas 63–64) nos deixa preparados para o próximo palpite ser submetido. Nós somamos 1 à variável contagemPalpites para que o jogador use sua tentativa (++ é uma operação de incremento — incrementa em 1), e o campo de texto do formulário de inserção seja esvaziado e focado novamente, pronto para que o próximo palpite seja inserido.


  envioPalpite.addEventListener('click', conferirPalpite);

  //Aqui nós estamos adicionando um event listener ao botão envioPalpite. Esse é um método que aceita a inserção de dois valores (chamados de argumentos) — o tipo de envento que estamos monitorando (neste caso o evento click) como um string (sequência de texto), e o código que queremos executar quando o evento ocorrer (neste caso a função conferirPalpite() — note que não temos que especificar os parênteses quando estivermos escrevendo dentro de addEventListener()).

  


