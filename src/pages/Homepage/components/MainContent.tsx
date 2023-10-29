import { useContext, useEffect, useState } from "react";
import trending from "../../../assets/trendingicon.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "../../../components/icons/Image";
import { getTrendingGifs, searchTrendingGifs } from "../../../api/trending";
import Modal from "../../../components/Modal";
import ModalContent from "../../../components/ModalContent";
import Button from "../../../components/Button";
import { AppContext } from "../../../context/AppContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
type Props = {};

// Component to show header content: trending or search keyword
const HeaderContent = (props: Props) => {
  const { keyword } = useContext(AppContext);
  return (
    <div className="flex justify-between my-5">
      {keyword.length === 0 && window.location.pathname === "/" ? (
        <div className="flex items-center gap-5">
          <Image src={trending} width={40} height={40} alt={"trending"} />
          <h1 className="font-bold text-2xl">Trending</h1>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <h1 className="font-bold text-2xl">{keyword}</h1>
        </div>
      )}
    </div>
  );
};

// Component to show main content: trending gifs or search gifs result
const MainContent = (props: Props) => {
  const { keyword } = useContext(AppContext); // get keyword from context to show trending gifs or search gifs result

  const [trendingList, setTrendingList] = useState([]); // trendingList to store trending gifs or search gifs result
  const [limit, setLimit] = useState(12); // limit to show 12 gifs per page
  const [show, setShow] = useState(false); // show to show overlay when user hover on gif
  const [activeItem, setActiveItem] = useState(null); // activeItem to store active gif when user click on gif to show details in modal

  const [isShowing, setIsShowing] = useState(false); // isShowing to show modal when user click on gif

  // open modal when user click on gif
  const openModal = (item: any) => {
    setIsShowing(true);
    setActiveItem(item);
  };

  // close modal when user click outside of modal
  const closeModal = () => {
    setIsShowing(false);
  };

  // show overlay when user hover on gif
  const showOverlay = () => {
    setShow(true);
  };

  // hide overlay when user hover out of gif
  const hideOverlay = () => {
    setShow(false);
  };

  // get trending gifs when component mount and keyword is empty
  useEffect(() => {
    if (keyword.length === 0) {
      getTrendingGifs({ limit: limit, offset: 0, setState: setTrendingList });
    }
  }, [limit]);

  // get trending gifs when user click on load more button
  const handleLoadMore = () => {
    setLimit((prev) => prev + 12);
    if (keyword.length === 0) {
      // if keyword is empty, get trending gifs
      getTrendingGifs({ limit: limit, offset: 0, setState: setTrendingList });
    } else {
      // if keyword is not empty, get search gifs result
      searchTrendingGifs({
        query: keyword,
        setState: setTrendingList,
        limit: limit,
        offset: 0,
      });
    }
  };

  // get search gifs result when keyword is not empty
  useEffect(() => {
    console.log("keyword", keyword);
    if (keyword.length !== 0) {
      searchTrendingGifs({
        query: keyword,
        setState: setTrendingList,
        limit: limit,
        offset: 0,
      });
    }
  }, [keyword, limit]);
  return (
    <div>
      <HeaderContent />
      <div className="flex justify-center">
        <div>
          {trendingList.length > 0 ? (
            <div className="items">
              {trendingList.map((item: any, index: any) => {
                return (
                  <div
                    className="main-container item cursor-pointer"
                    key={index}
                  >
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
                      children={() => (
                        <ModalContent
                          activeItem={activeItem}
                          modalType="gifdetail"
                        />
                      )}
                      modalType="gifdetail"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
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
