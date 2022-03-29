import "./SearchInput.css";
import { SearchProviderContext } from "providers/searchProvider";
import { useContext } from "react";

const SearchInput = () => {
  const {
    searchVal: [, changeSearchVal],
  } = useContext(SearchProviderContext);

  return (
    <input
      className="default"
      type="text"
      onChange={({ target: { value } }) => changeSearchVal(value)}
    />
  );
};

export default SearchInput;
