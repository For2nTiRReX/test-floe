import { ImageList } from "components";
import SearchProvider from "providers/searchProvider";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <SearchProvider>
        <ImageList />
      </SearchProvider>
    </div>
  );
};

export default App;
