import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { AppContext } from "../../context/AppContext";
import Button from "../../components/Button";
import { ToastContainer, toast } from "react-toastify";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { AiFillDelete } from "react-icons/ai";
type Props = {};

// Component to show favourite page
const FavouritePage = (props: Props) => {
  const { favouriteList, setFavouriteList } = useContext(AppContext); // get favourite list from context

  // get favourite list from local storage when component mount
  useEffect(() => {
    const favouriteList = JSON.parse(
      localStorage.getItem("favouriteList") || "[]"
    );
    setFavouriteList(favouriteList);
  }, []);

  // handle share gif by copying gif url to clipboard
  const handleShare = async (item: any) => {
    await navigator.clipboard.writeText(item.images?.original.url);
    toast.success("Copied to clipboard successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <Header />
      <div className="main-container">
        <h1 className="text-2xl font-bold my-10">My Favourite</h1>
        {favouriteList.length > 0 ? (
          <div className="">
            {favouriteList.map((item: any) => (
              <div key={item.id} className="grid grid-cols-2 gap-x-5 mb-10">
                <div>
                  <img
                    src={item.images.original.url}
                    alt={item.title}
                    className="w-full mx-auto"
                  />
                </div>
                <div className="flex flex-col gap-y-10">
                  <h1>{item.title}</h1>
                  <h1>Rating: {item.rating}</h1>
                  <Button
                    onClick={() => {
                      // remove item from favourite list
                      const newFavouriteList = favouriteList.filter(
                        (favouriteItem: any) => favouriteItem.id !== item.id
                      );
                      localStorage.setItem(
                        "favouriteList",
                        JSON.stringify(newFavouriteList)
                      );
                      setFavouriteList(newFavouriteList);
                    }}
                    className="flex items-center gap-5 hover:bg-red-500 hover:border-red-500 hover:text-white transition ease-in-out w-32 p-2 rounded-md justify-center cursor-pointer border"
                  >
                    <AiFillDelete />
                    <h1>Remove</h1>
                  </Button>
                  <Button
                    className="flex items-center gap-5 hover:bg-white hover:text-black transition ease-in-out w-32 p-2 rounded-md justify-center cursor-pointer border"
                    onClick={() => {
                      handleShare(item); // handle share gif
                    }}
                  >
                    <PiPaperPlaneTiltFill />
                    <h1>Share</h1>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No favourite GIFs right now.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default FavouritePage;
