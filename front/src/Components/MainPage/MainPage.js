import React, {useState } from "react";
import { Link } from "react-router-dom";
import { MainCoinBlock, Coins, CoinBlock } from "./MainPageStyle";
import SearchBar from "../SearchBar/SearchBar";
import { connect } from "react-redux";
const MainPage = () => {
  return (
    <MainCoinBlock>
      <SearchBar />
      <Coins>
        <CoinBlock>
          <h3>Bullion coins</h3>
          <Link
            to={{
                pathname: "/coinByType/investment",
              state: {
                type: "Investment",
              },
            }}
          >
            Show all
            <img
              src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png"
              alt=">"
            />
          </Link>
          <img
            src="https://i.postimg.cc/mkdPNp9f/South-Vietnamese-Dong-1.png"
            alt="Bullion coins"
          />
        </CoinBlock>
        <CoinBlock>
          <h3>Exclusive coins</h3>
          <Link
            to={{
              pathname: "/coinByType/exclusive",
              state: {
                type: "Exclusive",
              },
            }}
          >
            Show all
            <img
              src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png"
              alt=">"
            />
          </Link>
          <img
            src="https://i.postimg.cc/QdzprCHG/ISK-2.png"
            alt="Exclusive coins"
          />
        </CoinBlock>
        <CoinBlock>
          <h3>Commemorative coins</h3>
          <Link
            to={{
              pathname: "/coinByType/memorable",
              state: {
                type: "Memorable",
              },
            }}
          >
            Show all
            <img
              src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png"
              alt=">"
            />
          </Link>
          <img
            src="https://i.postimg.cc/J44JDZXC/Looney-1.png"
            alt="Commemorative coins"
          />
        </CoinBlock>
      </Coins>
    </MainCoinBlock>
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
export default connect(mapStateToProps)(MainPage);
