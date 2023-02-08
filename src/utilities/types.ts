// country data type
export type countryDataType = {
  name: string;
  population: number;
  region: string;
  area: number;
  borders: Array<string>;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  latlng: Array<number>;
  timezones: Array<string>;
  capital: Array<string>;
  currencies: any;
  continents: Array<string>;
};

// dashboard content type
export type DashboardContentType = {
  countryCode: string | null;
  setCountryCode: (code: string | null) => void;
  countryData: any | null;
  setCountryData: (value: any | null) => void;
};

// country type
export type CountryType = {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
};
