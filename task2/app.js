const currentYear = +2020;

let userName = prompt('Добро пожаловать к нам на сайт! Введите Ваше имя');

if (userName != +userName && userName !== null) {
    alert(userName + ', ' + 'рады знакомству, мы компания Lohika');
    let userYearOfBirth = +prompt('Введите год Вашего рождения');

    if (userYearOfBirth > 0 && userYearOfBirth < currentYear) {
        let userAge = currentYear - userYearOfBirth;

        if (userAge >= 24 && userAge <= 32) {
            companyQuestion = confirm('У Вас есть опыт работы в сфере Frontend разработки?');

            if (companyQuestion == true) {
                let userExpirience = +prompt('Сколько лет Вы работаете в этой сфере');

                if (userExpirience >= 2) {
                    let userEnglishLevel = prompt('Прекрасно, укажите Ваш уровень английского: pre-intermediate, intermediate, upper-intermediate?');

                    if (userEnglishLevel.toLocaleLowerCase() == 'intermediate' || userEnglishLevel.toLocaleLowerCase() == 'upper-intermediate') {
                        let personalUserProjects = confirm('Прекрасно, у Вас есть персональные проекты?');

                        if (personalUserProjects == true) {
                            let companyAnswer = alert('Хорошо, вышлите вашы проекты на email:job_odessa@lohika.com\nРады знакомству, мы с Вами свяжемся в ближайшее время!!');
                        } else {
                            companyAnswer = confirm('Извените, но нам нужны опытные разработчики');
                        }
                    } else {
                        companyAnswer = confirm('Извените, но нам нужны люди с мимальным уровнем английского Intermediate');
                    }

                } else {
                    companyAnswer = alert('Извените, но нам нужны люди с опытом работы не менее 2 лет')
                }
            } else {
                companyAnswer = alert('Извените, но нам нужны люди с опытом работы')
            }

        } else {
            let companyAnswer = alert('Извените, но Вы нам не подходите по возрастным ограничениям');
        }
    } else {
        let companyQuestion = alert('Вы ввели некоректное значение, обновите станицу и начните сначала');
    }
} else {
    let companyQuestion = alert('Вы не ввели имя, обновите станицу и начните сначала');
}