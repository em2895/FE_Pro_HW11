let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log("Масив: " + arr);

// Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = 0;
let idxMinElement = 0;

// Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = 0;
let idxMaxElement = 0;

// Визначити кількість негативних елементів.
let negativeEl = 0;

// Знайти кількість непарних позитивних елементів.
let countOddEl = 0;

// Знайти кількість парних позитивних елементів.
let countCouplesEl = 0;

// Знайти суму парних позитивних елементів.
let sumCouplesEl = 0;

// Знайти суму непарних позитивних елементів.
let sumOddEl = 0;

// Знайти добуток позитивних елементів.
let multPositiveEl = 1;

for (let i = 0; i < arr.length; i++) {
    if (minElement > arr[i]) {
        minElement = arr[i];
        idxMinElement = i;
    }
    if (maxElement < arr[i]) {
        maxElement = arr[i];
        idxMaxElement = i;
    }
    if (arr[i] < 0) {
        negativeEl++;
    }
    if (arr[i] > 0 && arr[i] % 2 == 0){
        sumOddEl += arr[i];
        countOddEl++;
    } else if (arr[i] > 0 && arr[i] % 2 != 0) {
        sumCouplesEl += arr[i];
        countCouplesEl++;
    }
    if (arr[i] > 0) {
        multPositiveEl *= arr[i];
    }
}

console.log("Мінімальний елемент масиву: " + minElement + ". Порядковий номер: " + idxMinElement);

console.log("Максимальний елемент масиву: " + maxElement + ". Порядковий номер: " + idxMaxElement);

console.log("Кількість негативних елементів масиву: " + negativeEl);

console.log("Кількість непарних позитивних елементів: " + countOddEl);

console.log("Кількість парних позитивних елементів: " + countCouplesEl);

console.log("Сума парних позитивних елементів: " + sumCouplesEl);

console.log("Сума непарних позитивних елементів: " + sumOddEl);

console.log("Добуток позитивних елементів: " + multPositiveEl);

// Знайти найбільший серед елементів масиву, остальні обнулити.
for (let i = 0; i < arr.length; i++) {
    if (arr[i] != maxElement) {
        arr[i] = 0;
    }
}

console.log("Найбільший серед елементів масиву, остальні обнулити: " + arr);