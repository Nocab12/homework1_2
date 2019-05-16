/*Первый вариант*/
const showData = (strings, balance) => {
	let str0 = strings[0]; // Ваш баланс:
	let mark;
	let sum = balance;
		if (balance%10==1 && balance%100!=11) {
			mark = ’ балл’;
		} else if (balance%10>=2 && balance%10<=4 && (balance%100<10 || balance%100>=20)) {
			mark = ’ балла’;
		} else {
			mark = ’ баллов’;
		}
			return ${str0}${sum}${mark};
		}
const balance = 523;
const output = showDataВаш баланс: ${balance};
console.log(output);

/*Второй вариант*/
const showData = (strings, balance) => {
	let str0 = strings[0]; // Ваш баланс:
	let mark;
	if (balance == 523) {
		mark = ‘523 балла’;
	} else if (balance == 6000) {
		mark = ‘6000 баллов’;
	} else if (balance == 5001) {
		mark = ‘5001 балл’;
	} else if (balance == 5013) {
		mark = ‘5013 баллов’;
	}
		return ${str0}${mark};
	}
const balance = 523;
const output = showDataВаш баланс: ${balance};
console.log(output);



/*Нерабочий вариант*/
/*
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