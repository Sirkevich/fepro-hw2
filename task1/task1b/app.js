const currentYear = +2020;

let userYearOfBirth = +prompt('Введите год Вашего рождения');

if (userYearOfBirth > 0 && userYearOfBirth < currentYear) {

    let userAge = currentYear - userYearOfBirth;
    console.log('Ваш возраст', +userAge);

    userAge = (userAge >= 18) ? console.log('Добро пожаловать на наш сайт !') : (userAge <= 12) ? console.log('Извини, но мы тебя не пропустим, посети learn.javascript.ru и узнаешь как сюда попасть') : console.log('Извини, но тебе нет 18 :( Когда исполнится - заходи в любое время, мы будем ждать');

} else if (userYearOfBirth > currentYear) {
    console.log('Ти родишся в', userYearOfBirth + ' году')
} else if (userYearOfBirth <= 0) {
    console.log('Указан некоректный год');
} else {
    (userYearOfBirth !== Number)
    console.log("Введите числовое значение!");
}

