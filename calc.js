let get = document.getElementById('resultado');

function insert(num){
  let numero = get.innerHTML;
  get.innerHTML = numero + num;
}

function clean(){
  get.innerHTML = '';
}

function back(){
  let resultado = get.innerHTML;
  get.innerHTML = resultado.substring(0, resultado.length - 1);
}

function calc(){
  let result = get.innerHTML;
  result ? get.innerHTML = eval(result) : get.innerHTML = 'Nada..';
}