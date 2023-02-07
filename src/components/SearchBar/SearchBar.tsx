// importing libraries
import { useState, useEffect, useContext } from "react";
import { Box, TextField, Autocomplete } from "@mui/material";

// importing utilities
import countries from "../../utilities/country";
import { CountryType } from "../../utilities/country";

// importing context
import DashboardContext from "../../context/dashboardContext";

// search bar component
export default function SearchBar() {
  // context
  const dashboardCtx = useContext(DashboardContext);

  // states
  const [value, setValue] = useState<CountryType | null>(null);
  const [inputValue, setInputValue] = useState<string | undefined>("");

  // set search value when the value of search changes
  useEffect(() => {
    if (value == null) {
      dashboardCtx.setCurrentSearch(null);
      return;
    }

    dashboardCtx.setCurrentSearch(value);
  }, [value]);

  return (
    <div className="searchBar">
      <Autocomplete
        value={value}
        className="md:w-3/5"
        onChange={(event: any, newValue: CountryType | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="country-select-demo"
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label ?? option}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
}
