// importing libraries
import { useState, useEffect } from "react";
import { Box, TextField, Autocomplete } from "@mui/material";

// importing utilities
import countries from "../../utilities/country";
import { CountryType } from "../../utilities/types";

// importing context

// search bar component
export default function SearchBar(_props: {
  setCode: (value: string | null) => void;
}) {
  // destructuring props
  const { setCode } = _props;

  // states
  const [value, setValue] = useState<CountryType | null>(null);
  const [inputValue, setInputValue] = useState<string | undefined>("");

  // set search value when the value of search changes
  useEffect(() => {
    if (value === null) {
      setCode(null);
      return;
    }

    setCode(value.code);
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
