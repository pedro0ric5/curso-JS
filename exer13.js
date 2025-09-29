/* Exemplo de Array Mais Completo */

// 1. Declare um array de seus jogos favoritos usando 'const'.
const jogosFavoritos = [
    'The Witcher 3',
    'Red Dead Redemption 2',
    'Cyberpunk 2077',
    'God of War (2018)',
    'Stardew Valley'
  ];
  
  // 2. Imprima o array completo para ver a lista inicial.
  console.log('--- Lista Inicial de Jogos ---');
  console.log(jogosFavoritos);
  console.log('\n'); // Adiciona uma linha em branco para melhor visualização
  
  // 3. Acesse e imprima o primeiro e o último elemento do array.
  //    Lembre-se que o primeiro elemento tem o índice 0.
  //    Para o último, podemos usar a propriedade 'length' do array.
  console.log('--- Acessando Elementos ---');
  console.log(`Meu primeiro jogo favorito é: ${jogosFavoritos[0]}`);
  console.log(`O último jogo da minha lista é: ${jogosFavoritos[jogosFavoritos.length - 1]}`);
  console.log('\n');
  
  // 4. Adicione novos elementos no final do array usando o método 'push()'.
  //    Podemos adicionar um ou mais elementos de uma vez.
  jogosFavoritos.push('Baldur\'s Gate 3', 'Elden Ring');
  
  // 5. Adicione um elemento no início do array usando o método 'unshift()'.
  jogosFavoritos.unshift('Hades');
  
  // 6. Imprima o array após as adições para ver as mudanças.
  console.log('--- Lista Após Adicionar Itens ---');
  console.log(jogosFavoritos);
  console.log('\n');
  
  // 7. Remova o último elemento do array usando 'pop()' e o primeiro usando 'shift()'.
  //    Esses métodos também retornam o elemento removido.
  const ultimoRemovido = jogosFavoritos.pop();
  const primeiroRemovido = jogosFavoritos.shift();
  
  console.log('--- Itens Removidos ---');
  console.log(`O item removido do final foi: ${ultimoRemovido}`);
  console.log(`O item removido do início foi: ${primeiroRemovido}`);
  console.log('\n');
  
  // 8. Imprima o array final para ver o resultado das remoções.
  console.log('--- Lista Final de Jogos ---');
  console.log(jogosFavoritos);