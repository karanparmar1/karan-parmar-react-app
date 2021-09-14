import { COUNTRY_FLAG_URL } from "./config";

export const GetFlagURLByCountryCode = (country) => {
    const code = country.split("-")[0];
    return COUNTRY_FLAG_URL+code+'/flat/24.png';
}