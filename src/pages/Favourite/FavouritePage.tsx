import React, { useEffect } from "react";
import Header from "../../components/Header";

type Props = {
  setKeyword: (value: string) => void;
};

const FavouritePage = (props: Props) => {
  const [favouriteList, setFavouriteList] = React.useState<any[]>([]);

  useEffect(() => {
    const favouriteList = localStorage.getItem("favourite");
    if (favouriteList) {
      setFavouriteList(JSON.parse(favouriteList));
    }
  }, []);
  return (
    <div>
      <Header setKeyword={props.setKeyword} />
      <div className="main-container">
        <h1>My Favourite</h1>
        {favouriteList.length > 0 ? (
          <div className="row">
            {favouriteList.map((item: any) => (
              <div>
                <img src={item.images.original.url} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No favourite</p>
        )}
      </div>
    </div>
  );
};

export default FavouritePage;
