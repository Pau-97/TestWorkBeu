export interface WorldtimeResponse {
    abbreviation: string;
    client_ip:    string;
    datetime:     Date;
    day_of_week:  number;
    day_of_year:  number;
    dst:          boolean;
    dst_from:     null;
    dst_offset:   number;
    dst_until:    null;
    raw_offset:   number;
    timezone:     string;
    unixtime:     number;
    utc_datetime: Date;
    utc_offset:   string;
    week_number:  number;
}

export interface IWorldTime {
    time: string;
    datetime: Date;
    timezone: string;
    dayWeek: number;
    weekNumber: number;
    dateYear: number;
    timeOfDay: String;
    dayOrNight: String;
    code: String;
    cityCountry: String;
  }