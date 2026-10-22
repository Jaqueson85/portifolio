function Maior(){
    let n1, n2;
    n1 = Number(prompt("fala um numero"));
    n2 = Number(prompt("fala outro numero"));
    if (n1 > n2){
        alert(n1 +" é Maior que " + n2);

    }
    if (n2 > n1){
        alert(n1 +" é Menor que " + n2);
    }
    if (n1 == n2){
        alert("Os dois numeros são iguais");
    }
}