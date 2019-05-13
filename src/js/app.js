var sum = 300;
function balance (n, forms) {
     return forms[(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2) ];

}

console.log('Ваш баланс: ' + sum + balance(sum, [" балл3", " балла", " баллов"] ));