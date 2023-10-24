import MainContent from "../Homepage/components/MainContent";
import Header from "../../components/Header";

type Props = {};

// Component to show search result page
const SearchResultPage = (props: Props) => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

export default SearchResultPage;
