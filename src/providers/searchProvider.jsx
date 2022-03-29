import React, { useState } from "react";

export const SearchProviderContext = React.createContext(null);

const SearchProvider = ({ children }) => {
  const [searchVal, changeSearchVal] = useState("");

  const store = {
    searchVal: [searchVal, changeSearchVal],
  };

  return (
    <SearchProviderContext.Provider value={store}>
      {children}
    </SearchProviderContext.Provider>
  );
};

export default SearchProvider;