const currentYear = +2020;

let userName = prompt('Добро пожаловать к нам на сайт! Введите Ваше имя');

    if (userName == false){
        let companyQuestion = prompt('Введите Ваше имя');
    } else {
        console.log('Привет', userName);
        let userYearOfBirth = +prompt('Введите год Вашего рождения');
       
        if (userYearOfBirth > 0 && userYearOfBirth < currentYear) {

            let userAge = currentYear - userYearOfBirth;
       
            if (userAge >= 24 && userAge <= 32 )   {
               companyQuestion = confirm('У Вас есть опыт работы в сфере Frontend разработки?');

                if (companyQuestion == true) {
                    companyQuestion = +prompt('Сколько лет Вы работаете в этой сфере');
                } else {
                    let companyAnswer = alert('Извените, но нам нужны люди с опытом работы') 
                }
    
            } else if (userYearOfBirth > currentYear) {
                console.log('Ти родишся в', userYearOfBirth + ' году')
            } else if (userYearOfBirth <= 0) {
                console.log('Указан некоректный год');
            } else if (userYearOfBirth !== Number){
                
                console.log("Введите числовое значение!");
            
            
            }
            
            else {
                let companyAnswer = alert('Извените, но Вы нам не подходите по возрастным ограничениям');
            }
    }
    

 


}