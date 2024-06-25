// 6.6.1. 

function palindromeChecker(str) {
	str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
	const lastIndex = str.length - 1;
	for (let i = 0; i < str.length / 2; i++) {
			if (str[i] !== str[lastIndex - i]) {
					return false;
			}
	}
	return true;
}
let str = 'Довод'
if (palindromeChecker(str) === true) {
	console.log(`Слово ${str} является палиндромом`);
} else {
	console.log(`Слово ${str} не является палиндромом`)
}
// 6.6.2. // 

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
console.log(unique(arr));

// 6.6.3. // 

const promptText = prompt('Введите любое число');

const newArray = [];
    for (let i = 1; i <= 5; i += 1) {
        newArray.push(i);
    }
console.log(newArray)

// 6.6.4. // 

const board = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
];

for (let i = 0; i < board.length; i++) {
    console.log(board[i].join(' '));
}

// 6.6.5. // 

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

Object.values(obj)
console.log(Object.values(obj))