const currentYear = +2020;

let userYearOfBirth = +prompt('Введите год Вашего рождения');
let userAge;

userYearOfBirth > 0 && userYearOfBirth < currentYear ? (
    userAge = currentYear - userYearOfBirth,
    console.log('Ваш возраст', +userAge),

    (userAge >= 18) ?
        console.log('Добро пожаловать на наш сайт !') : userAge <= 12 ? 
        console.log('Извини, но мы тебя не пропустим, посети learn.javascript.ru и узнаешь как сюда попасть') : 
        console.log('Извини, но тебе нет 18 :( Когда исполнится - заходи в любое время, мы будем ждать')
) : (

    (userYearOfBirth === currentYear) ? console.log('Тебе меньше года') : 
    (userYearOfBirth > currentYear) ? console.log('Ти родишся в', userYearOfBirth + ' году') : 
    (userYearOfBirth <= 0) ? console.log('Указан некоректный год') :
            
    ((userYearOfBirth !== Number),
    console.log("Введите числовое значение!"))           
);