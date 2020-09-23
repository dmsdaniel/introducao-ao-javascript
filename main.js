function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!!!</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://uol.com.br");
    //window.location.href ="https://uol.com.br";
}
/*
var validar = 0;
function validarIdade(idade){
    var validar;
    if (idade >=18 ) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

idade = prompt("Qual a sua idade:");
validarIdade(idade);
console.log(validar);

var d = new Date();
alert(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
alert(d.getHours() +":" + d.getMinutes());

for(count=0; count <=5; count++){
    alert(count);
}

var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
};

var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("Você é maior de idade");
} else {
    alert("Você é de menor!!!");

}
var nome = "Daniel MS";
var idade = 29;
var idade2 = 10;
var lista = ["maçã","pera","laranja"];
var fruta = {nome: "maça", cor: "vermelha"};
var frutas = [{nome: "uva", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[1].nome);

frase = "Japão é o melhor time do mundo!!!";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(lista);
console.log(lista[1]);
lista.push("Uva");
console.log(lista);
lista.pop("maçã");
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("-"));
console.log(fruta);
console.log(fruta.nome);
*/