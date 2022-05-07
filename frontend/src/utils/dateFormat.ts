import moment from "moment-timezone"

const dateFormat = (datetime : Date, timezone: string, format : string = 'HH:mm') => {
    const date = moment(datetime).tz(timezone).format(format).toString();
    return date;
}

const timeOfDay = (datetime: Date, timezone: string) : String => {
    const hours = parseInt(moment(datetime).tz(timezone).format('HH'));
    switch(true) {
        case hours >= 5 && hours < 12 :
            return `GOOD MORNING`;
        case hours >=12 && hours < 18 :
            return `GOOD AFTERNOON`;
        default:
            return `GOOD EVENING`;
    }
}

const dayOrNight = (datetime: Date) : String => {
    const hours = parseInt(moment(datetime).format('HH'));
    switch(true) {
        case hours >= 5 && hours < 18 :
            return 'day';
        default:
            return 'night';
    }
}

const cityCountry = (timezone = '') : String => {
    const separateCity = timezone.split('/');
    const city = separateCity[1] || '';
    const country = separateCity[0] || '';
    return `IN ${city}, ${country}`;
}

export {
    dateFormat,
    timeOfDay,
    dayOrNight,
    cityCountry
}
