// tratamento de erros com (try, catch, finally)

try {
    // executado quando não há erros
} catch (e) {
    // executado quando há erros
} finally { 
    // sempre executado, omitido quando não usado 
}


// usando o finally
try {
  console.log('abrir');
  console.log(manipular); // dando erro aqui
  console.log('fechar');
} catch {
  console.log('tratamento de erro');
} finally {
  // aqui é ideal para continuar o código do try que não foi executado pq estava após um erro
  console.log('finally: sempe será executado');
}

// o try pode também ser colocado dentro de outro try

try {
  console.log('try');

  try {
    console.log('try interno');
  } catch(e) {
    console.log('catch interno');
  } finally {
    console.log('finally interno');
  }


} catch(e) {
  console.log('catch');
} finally {
  console.log('finally');
}



function hora(data) {
  if (data && !(data instanceof Date)) {  // se a data for envida e não for uma instancia de date
    throw new TypeError('instancia de data');
  }
  
  if (!data) {  // se não enviar uma data, cria uma data
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',  // ter dois digitos
    minute: '2-digit', // ter dois digitos
    second: '2-digit', // ter dois digitos
    hour12: false  // formato da hora
  });

}

// resolvendo erro

try {
  const hora1 = hora();
  console.log(hora1);
} catch(e) {
  // tratar erro
} finally {
    console.log('bla');
}

//hora(10);
//hora(new Date());