function getTimeFromMinutes(number) { 

    while (isNaN(number) || number < 0 || !Number.isInteger(number)) {
        return "Ошибка, проверьте данные";
    }

    let minutes = 0;
    let hours = 0;
    hours = Math.floor(number / 60);
    minutes = number % 60;


    let hoursStr = "";

    switch (hours) {
    case 1: 
        hoursStr = "час";
        break;
    case 2:
    case 3:
    case 4:
        hoursStr = "часа";
        break;
    default:
        hoursStr = "часов";
        break;	
		
    }
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(580);

function findMaxNumber(number_one, number_two, number_three, number_four) {
    while (isNaN(number_one) || isNaN(number_two) || isNaN(number_three) || isNaN(number_four)) {
        return 0;
    }
    return Math.max(number_one, number_two, number_three, number_four);
}

findMaxNumber(1, 2 , 3, 4);