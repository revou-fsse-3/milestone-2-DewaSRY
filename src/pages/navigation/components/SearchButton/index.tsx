import Button, { ButtonTypes } from "@/common/Button";
import { CiSearch } from "react-icons/ci";
import useSearch from "../../context/useSearch";
import { useNavigate } from "react-router-dom";
import { ButtonHTMLAttributes, FC } from "react";

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
type SearchButtonComponents = FC<SearchButtonProps>;
const SearchButton: SearchButtonComponents = ({ ...resProps }) => {
  const navigate = useNavigate();
  const { searchText } = useSearch();
  const handelSearch = () => {
    navigate(searchText);
  };
  return (
    <Button
      {...resProps}
      onClick={handelSearch}
      ButtonType={ButtonTypes.BaseButton}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <span className="text-lg">Search</span>
      <CiSearch className="inline-block  text-4xl " />
    </Button>
  );
};

export default SearchButton;
