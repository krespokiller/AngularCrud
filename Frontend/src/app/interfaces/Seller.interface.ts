export interface Seller {
    _id:             string;
    role:            string;
    language:        string[];
    email:           string;
    name:            string;
    lastname:        string;
    currency:        Currency;
    country:         string;
    countryCode:     string;
    countryCodeName: string;
    phone:           string;
}

export interface Currency {
    code:   string;
    name:   string;
    symbol: string;
}
