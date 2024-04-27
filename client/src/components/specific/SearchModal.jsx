import GlassCard from "../UI/GlassCard.jsx";
import searchIcon from "../../assets/icon_search.svg";
import styles from "./SearchModal.module.css";

const SearchModal = ({ className }) => {
  return (
    <form className={`${className} ${styles["search-form"]}`}>
      <input type="text" placeholder="Search" />
      <button title="Click Here">
        <img src={searchIcon} />
      </button>
    </form>
  );
};

export default GlassCard(SearchModal);