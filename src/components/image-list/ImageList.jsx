import { useCallback, useContext, useState } from "react";
import { debounce } from 'lodash';
import { ToggleButton, SearchInput, ImageItem } from "components";
import { SearchProviderContext } from "providers/searchProvider";
import UnsplashService from "services/unsplash";

import "./ImageList.css";
import { useEffect } from "react";

const ImageList = () => {
  const [imageList, setImageList] = useState([]);
  const [viewStyle, setViewStyle] = useState('grid');
  const {
    searchVal: [searchVal],
  } = useContext(SearchProviderContext);

  const fetchImageData = async (searchVal) => {
    const fetchResult = await UnsplashService.searchRequest({ query: searchVal, perPage: 12, });
    const {
      response: { results },
    } = fetchResult;

    setImageList(results);
  };

  const toggleStyle = () => {
    if(viewStyle === 'list') {
      setViewStyle('grid');
    } else {
      setViewStyle('list');
    }
  }

  const debounceFetch = useCallback(debounce(fetchImageData, 400), []);

  useEffect(() => {
    debounceFetch(searchVal);
  }, [searchVal, debounceFetch]);

  return (
    <div className={`image-list-wrapper ${viewStyle}`}>
      <header className="header-wrapper">
        <SearchInput />

        <ToggleButton toggleCallback={toggleStyle}/>
      </header>

      <div className="list-items-wrapper">
        {imageList.length > 0
          ? imageList.map(({ id, profile_image: { large }, first_name, updated_at }) => {
              return <ImageItem key={id} src={large} title={first_name} updated={updated_at}/>;
            })
          : "No items by your search request"}
      </div>
    </div>
  );
};

export default ImageList;
