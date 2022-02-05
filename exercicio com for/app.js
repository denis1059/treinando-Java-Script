const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let { tag, texto} = elementos [i];
    let tagcriada = document.createElement(tag);
    tagcriada.innerHTML = texto;
    div.appendChild(tagcriada);

}

container.appendChild(div);

// For Classico - geralemnte com interaveis (array pu strings)
// for in - retorna o indice ou chave (strings, arrays pu objetos)
// for of - retorna o valor em si ( iteraveis, arrays ou strings)