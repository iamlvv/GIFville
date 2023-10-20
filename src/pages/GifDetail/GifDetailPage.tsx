import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGifDetail } from "../../api/trending";
import Header from "../../components/Header";
import Searchbar from "../../components/Search/Searchbar";
import Image from "../../components/icons/Image";
import heart from "../../assets/heart.png";
import planet from "../../assets/planet.png";
import test from "../../assets/test.jpg";
import expandicon from "../../assets/expand.png";
type Props = {};

const GifDetailPage = (props: Props) => {
  const { id } = useParams();
  const [gifDetail, setGifDetail] = React.useState<any>({});

  const [show, setShow] = useState(false);

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  useEffect(() => {
    getGifDetail({ id, setState: setGifDetail });
  }, []);

  return (
    <div>
      <Header />
      <Searchbar />
      <div className="grid grid-cols-4">
        <div className="flex items-center">
          <Image
            src={gifDetail.user?.avatar_url}
            width={50}
            height={50}
            alt={"user"}
          />
          <h1>{gifDetail.user?.username}</h1>
        </div>
        <div className="">
          <div className="flex items-center gap-5">
            <h1>{gifDetail.title}</h1>
            <h1>Rating: {gifDetail.rating}</h1>
          </div>
          <div className="container">
            <div
              onMouseOver={showOverlay}
              onMouseOut={hideOverlay}
              className="image-container"
            >
              <img src={gifDetail.images?.original.url} alt="test" />
              {show && (
                <div className="overlay">
                  <Image
                    src={expandicon}
                    width={35}
                    height={35}
                    alt={"expandicon"}
                  />{" "}
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <Image src={heart} width={50} height={50} alt={"heart"} />
            <h1>Favorite</h1>
          </div>
          <div className="flex items-center gap-5">
            <Image src={planet} width={50} height={50} alt={"planet"} />
            <h1>Share</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifDetailPage;
