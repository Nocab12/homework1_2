/*Первый вариант*/
function showData (n) {
    if (n%10==1 && n%100!=11) {
        console.log(`Ваш баланс ${n} балл`);
    } else if (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20)){
        console.log(`Ваш баланс ${n} балла`);
    } else {
        console.log(`Ваш баланс ${n} баллов`);
    }
}
showData(10);

/*Второй вариант*/
/*balance = 10;
function showData (n, forms) {
    return forms[(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2) ];
}

console.log(`Ваш баланс: ${balance} ${showData(balance, [" балл", " балла", " баллов"])}`);*/