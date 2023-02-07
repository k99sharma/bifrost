// importing libraries
import { createContext, ReactNode, useState, useMemo } from "react";
import { CountryType } from "../utilities/country";

// dashboard context type
type dashboardContextType = {
  currentSearch: CountryType | null;
  searchDetails: any | null;
  setCurrentSearch: (arg: CountryType | null) => void;
  setSearchDetails: (arg: any | null) => void;
};

// creating dashboard context
const DashboardContext = createContext<dashboardContextType>({
  currentSearch: null,
  searchDetails: null,
  setCurrentSearch: (val) => {},
  setSearchDetails: (val) => {},
});

// dashboard context provider type
type dashboardContextProviderType = {
  children: ReactNode;
};

export function DashboardContextProvider({
  children,
}: dashboardContextProviderType) {
  // states
  const [currentSearch, setCurrentSearch] = useState<CountryType | null>(null);
  const [searchDetails, setSearchDetails] = useState<any | null>(null);

  // function to set current search
  const currentSearchSetter = (value: CountryType | null) => {
    // if value is null
    if (value == null) {
      setCurrentSearch(null);
      return;
    }

    // set current search
    setCurrentSearch(value);
  };

  // function to set search details
  const searchDetailsSetter = (value: any | null) => {
    // if value is null
    if (value == null) {
      setSearchDetails(null);
      return;
    }

    // set search details
    setSearchDetails(value);
  };

  // value for context
  // using memoization for improving performance
  const contextValue = useMemo(() => {
    return {
      currentSearch: currentSearch,
      searchDetails: searchDetails,
      setCurrentSearch: currentSearchSetter,
      setSearchDetails: searchDetailsSetter,
    };
  }, [currentSearch]);

  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardContext;
