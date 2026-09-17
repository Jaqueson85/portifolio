let n1 = 0, n2 = 0, n3 = 0, r = 0;
function calcular () {
    n1 = prompt("Qual a nota do trimestre 1");
    n2 = prompt("Qual a nota do trimestre 2");
    n3 = prompt("Qual a nota do trimestre 3");
    r = n1 + n2 + n3 - 180;
    alert("essa é sua média é " + r);
}