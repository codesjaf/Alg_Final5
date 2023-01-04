import React, { useState } from "react";
import {SearchBlock, Search, Advanced} from "./SearchBarStyles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchFilterCoins} from "../../redux/actions";


const SearchBar = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState("");

  const handlerSearch = () => {
    props.dispatch(fetchFilterCoins(input));
  };

  const advanceHandler = () => {
    setIsClicked(true);
    if (isClicked) setIsClicked(false);
  };
  return (
    <SearchBlock id={"SearchBlock"}>
      <Search>
        <input
          type="search"
          onChange={(event) => setInput(event.target.value)}
        />
        <Link
          onClick={handlerSearch}
          to={{
            pathname: "/coinListSearch",
            state:{
              searchHistory:true
            }
          }}
        >
          Search
        </Link>
      </Search>
      <Advanced onClick={advanceHandler}>
        <Link to={"/advanceSearch"} id={"Advanced"}>
          Advanced filter
        </Link>
      </Advanced>
    </SearchBlock>
  );
};
const mapStateToProps = (state) => {
  return {
    coins: state.coins.items,
    loading: state.coins.loading,
    error: state.coins.error,
    search: state.search.items,
  };
};
export default connect(mapStateToProps)(SearchBar);
