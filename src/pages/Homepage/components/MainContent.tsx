import React, { useEffect, useState } from "react";
import trending from "../../../assets/trendingicon.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "../../../components/icons/Image";
import { getTrendingGifs, searchTrendingGifs } from "../../../api/trending";
import Modal from "../../../components/Modal";
import ModalContent from "../../../components/ModalContent";
import Button from "../../../components/Button";
type Props = {
  keyword: string;
};

const HeaderContent = (props: Props) => {
  return (
    <div className="flex justify-between my-5">
      {props.keyword.length === 0 && window.location.pathname === "/" ? (
        <div className="flex items-center gap-5">
          <Image src={trending} width={40} height={40} alt={"trending"} />
          <h1 className="font-bold text-2xl">Trending</h1>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <h1 className="font-bold text-2xl">{props.keyword}</h1>
        </div>
      )}
    </div>
  );
};
const MainContent = (props: Props) => {
  const [trendingList, setTrendingList] = useState([]);
  const [limit, setLimit] = useState(12);
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const [isShowing, setIsShowing] = useState(false);
  const openModal = (item: any) => {
    setIsShowing(true);
    setActiveItem(item);
  };

  const closeModal = () => {
    setIsShowing(false);
  };
  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };
  console.log(limit);
  useEffect(() => {
    if (props.keyword.length === 0) {
      getTrendingGifs({ limit: limit, offset: 0, setState: setTrendingList });
    }
  }, []);

  const handleLoadMore = () => {
    setLimit((prev) => prev + 12);
    if (props.keyword.length === 0) {
      getTrendingGifs({ limit: limit, offset: 0, setState: setTrendingList });
    } else {
      searchTrendingGifs({
        query: props.keyword,
        setState: setTrendingList,
        limit: limit,
        offset: 0,
      });
    }
  };

  useEffect(() => {
    if (props.keyword.length !== 0) {
      searchTrendingGifs({
        query: props.keyword,
        setState: setTrendingList,
        limit: limit,
        offset: 0,
      });
    }
  }, [props.keyword, limit]);
  return (
    <div>
      <HeaderContent keyword={props.keyword} />
      <div className="flex justify-center">
        <div className="items">
          {trendingList.map((item: any) => {
            return (
              <div className="main-container item cursor-pointer" key={item.id}>
                <div
                  className="image-main-container content"
                  onMouseOver={showOverlay}
                  onMouseOut={hideOverlay}
                  onClick={() => openModal(item)}
                >
                  <img
                    src={item.images?.original.url}
                    alt="test"
                    className="rounded-sm shadow-lg border "
                    width={220}
                    height={164}
                  />
                  {show && (
                    <div className="overlay">
                      <div className="flex items-center gap-5">
                        <Image
                          src={item.user?.avatar_url}
                          width={50}
                          height={50}
                          alt={"user"}
                        />
                        <h1>{item.user?.username}</h1>
                      </div>
                    </div>
                  )}
                </div>
                <Modal
                  isShowing={isShowing}
                  hide={closeModal}
                  children={() => <ModalContent activeItem={activeItem} />}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Button
        className="flex font-bold items-center gap-5 bg-white hover:bg-black hover:text-white text-black transition ease-in-out w-32 p-2 rounded-md justify-center cursor-pointer border mx-auto my-5"
        onClick={handleLoadMore}
      >
        <h1>Load More</h1>
        <MdKeyboardArrowDown />
      </Button>
    </div>
  );
};

export default MainContent;
