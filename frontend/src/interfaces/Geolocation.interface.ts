export interface GeolocationResponse {
    data: Data;
}

export interface Data {
    timezone:   Timezone;
    ip:         string;
    type:       string;
    connection: Connection;
    location:   Location;
}

export interface Connection {
    asn:          number;
    organization: string;
    isp:          string;
}

export interface Location {
    geonames_id: number;
    latitude:    number;
    longitude:   number;
    zip:         string;
    continent:   Continent;
    country:     Country;
    city:        City;
    region:      Region;
}

export interface City {
    name:            string;
    name_translated: string;
}

export interface Continent {
    code:            string;
    name:            string;
    name_translated: string;
}

export interface Country {
    alpha2:               string;
    alpha3:               string;
    calling_codes:        string[];
    currencies:           Currency[];
    emoji:                string;
    ioc:                  string;
    languages:            Language[];
    name:                 string;
    name_translated:      string;
    timezones:            string[];
    is_in_european_union: boolean;
}

export interface Currency {
    symbol:         string;
    name:           string;
    symbol_native:  string;
    decimal_digits: number;
    rounding:       number;
    code:           string;
    name_plural:    string;
}

export interface Language {
    name:        string;
    name_native: string;
}

export interface Region {
    fips:            string;
    alpha2:          string;
    name:            string;
    name_translated: string;
}

export interface Timezone {
    id:                 string;
    current_time:       Date;
    code:               string;
    is_daylight_saving: boolean;
    gmt_offset:         number;
}

export interface IGeolocation {
    cityCountry: string;
}