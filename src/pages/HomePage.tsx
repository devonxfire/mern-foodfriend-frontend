import landing from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gsp-5 text-center -mt-16 md:px-32">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-lg pt-4 text-slate-500  ">
          Food is just a click away!
        </span>
        <SearchBar
          placeholder="Search by City or Town..."
          onSubmit={handleSearchSubmit}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5 ">
        <img src={landing} alt="landging-image" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold tracking-tighter text-3xl">
            Order takeaways even faster!
          </span>
          <span className="text-slate-500">
            Download the FoodFriend mobile app for faster food at your door.
          </span>
          <img src={appDownload} alt="appDownload-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
