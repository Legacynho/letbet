//variaveis cadastradas neste codigo
let texto;
let chance;
let results;
let valorApostado = Number(0);
let identificarVitoria;
let vitoria;
let derrota;
let saldoBanco;
let saldoTotal;
let saldoValue = Number(0);
let saldoSoma;
let saldoValor;
let idade;
let textoNumero;
//codigo de login
let name = prompt('Olá, qual o seu nome?');
alert(`Seja bem - vindo ao LETBET ${name}, aqui você poderá ganhar muito dinheiro!`);
//codigo de verificar se é maior de idade
function verifyIdade(){
    idade = parseInt(prompt('Mas antes de ir ao jogo, gostaria de saber a sua idade!'));
    if(isNaN(idade)){
        alert('Digite apenas numeros')
        verifyIdade();
    } 
    else{
        idade >= 18? alert('Ok! Vamos ao jogo') : alert('Sinto muito, mas você não pode apostar por ser menor de idade, saia do site imediatamente!');
        if(idade < 18)end;
        if(idade >= 18) commands();
    }
    
}
//verifica a idade
verifyIdade();
//codigo para o comando de depositar o saldo
function saldo() {
    textoNumero = Number(prompt(`Digite aqui quantos reais você deseja colocar no nosso banco!(seu saldo anterior é ${saldoValue})`));
    if(isNaN(textoNumero)){
        alert('Digite apenas numeros')
        saldo();
    }
    if(textoNumero <= 0) alert('Só é permitido o depósito de um número maior que 0');
    if(textoNumero <= 0) saldo();
    saldoValue = Number(saldoValue) + textoNumero;
    commands();
    
    
}
//codigo para consultar o saldo
function verSaldo() {
    if(saldoValue == 0) alert('Seu saldo está zerado!');
    else{
        alert(`${saldoValue}`);
    }
    commands();
}
//codigo de iniciar a pagina inicial
function pagInicial() {
    texto = prompt('Seja bem - vindo a pagina inicial do programa, aqui você podera digitar diferentes comandos para seguir o jogo, digite "comandos" para verificar os comandos');
}
//codigo para executar os comandos da pagina inicial
function commands() {
    pagInicial();
    if(texto == 'comandos') {
        alert('Os comandos são: ver saldo, depositar, jogar e sair');
        commands();
    } else{
        if(texto == 'ver saldo') verSaldo();
        if(texto == 'depositar') saldo();
        if(texto == 'jogar') jogar();
        if(texto == 'sair') alert('Espero te ver de novo')
        if(texto == 'sair') end;
        if(texto == 'Você não tem saldo suficiente para fazer esta aposta, aposte menos para jogar') jogar();
        else(alert('esse comando não existe'))
        commands();
    }
    
}
//codigo de calculo se vencer a aposta
function calcWin(){
    saldoValue = saldoValue + (valorApostado * 1.2);
}
//codigo de calculo se perder a aposta
function calcLose(){
    saldoValue = saldoValue - valorApostado;
}
//codigo que verifica se ganhou ou perdeu para executar os calculos
function resultsJogo() {
    if(identificarVitoria == 1) calcWin();
    if(identificarVitoria == 2) calcLose();
}
//codigo que define se ganhou ou perdeu
function identifyVictory() {
    if(results == 1) identificarVitoria = 1;
    if(results != 1) identificarVitoria = 2;
        
    
}
//codigo que exibe o alerta de vitoria ou derrota + o saldo 
function alertFimDeJogo(){
    if(identificarVitoria == 1) alert(`Parabéns! Você ganhou! O seu saldo agora é ${saldoValue}`);
    if(identificarVitoria == 2) alert(`Droga! Você perdeu! Seu saldo agora é ${saldoValue}, continue jogando, quem sabe na próxima você não ganha?`);
    valorApostado = Number(0);
}
//função de jogar o jogo(gera numero aleatorio e define se ganhou ou perdeu + altera o saldo)
function jogo() {
    chance = 2;
    results = parseInt(Math.random() * chance + 1);
    identifyVictory();
    resultsJogo();
    alertFimDeJogo();
    commands();
}
//define o valor da aposta e verifica se é maior que 0/se o valor da aposta não e maior que o saldo
function verifyValorApostado(){
    texto = 'jogar';
    valorApostado = Number(prompt(`Quantos reais você deseja apostar? Saldo:${saldoValue}`));
        if(Number(valorApostado) <= 0) alert('É necessário apostar um numero acima de 0'); 
        if(Number(valorApostado) <= 0) jogar();
        if(Number(valorApostado) <= Number(saldoValue)) jogo();
        if(Number(valorApostado) > Number(saldoValue)) alert('Você não tem saldo suficiente para fazer esta aposta, aposte menos para jogar');
        if(Number(valorApostado) > Number(saldoValue)) jogar();
    }
//verifica se há saldo para iniciar o jogo
function jogar() {
    if(saldoValue <= 0) alert('Seu saldo está zerado, deposite para jogar');
    if(saldoValue <= 0) commands();
    if(saldoValue > 0) verifyValorApostado();
        
    
}

commands();