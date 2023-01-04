import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchFilterCoins, fetchProducts } from "../../redux/actions";
import {
  AdvancedSearch,
  Options,
  Price,
  RangeSearch,
  Year,
  AdvanceMain,
  Search,
} from "./SearchBarStyles";
import { Link } from "react-router-dom";
const AdvanceSearch = (props) => {
  const [country, setCountry] = useState("");
  const [composition, setComposition] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [input, setInput] = useState("");
  const {coins} = props;

  useEffect(() => {
    props.dispatch(fetchProducts());
  }, []);
  const handlerSearch = () => {
    const value = {
      country: country,
      composition: composition,
      priceFrom: priceFrom,
      priceTo: priceTo,
      yearFrom: yearFrom,
      yearTo: yearTo,
    };
    props.dispatch(fetchFilterCoins(input, value));
  };
  const countries = coins ? coins.map((el) => el.country) : null;
  const filteredCountries = countries
    ? countries.filter((el, index) => countries.indexOf(el) >= index)
    : null;
  const metal = coins ? coins.map((el) => el.composition) : null;
  const filteredMetal = metal
    ? metal.filter((el, index) => metal.indexOf(el) >= index)
    : null;
  const quality = coins ? coins.map((el) => el.quality) : null;
  const filteredQuality = quality
    ? quality.filter((el, index) => quality.indexOf(el) >= index)
    : null;
  const OptionCountry = coins
    ? filteredCountries.map((el) => {
        return (
          <option value={el} key={el}>
            {el}
          </option>
        );
      })
    : null;
  const OptionMetal = coins
    ? filteredMetal.map((el) => {
        return (
          <option value={el} key={el}>
            {el.toUpperCase()}
          </option>
        );
      })
    : null;
  const OptionQuality = coins
    ? filteredQuality.map((el) => {
        return (
          <option value={el} key={el}>
            {el.toUpperCase()}
          </option>
        );
      })
    : null;
  return (
    <AdvanceMain>
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
      <AdvancedSearch>
        <Options>
          <p>Issuing country</p>
          <label>
            <select
              onChange={(event) => setCountry(event.target.value)}
              value={country}
            >
              <option value="Country">Country</option>
              {OptionCountry}
            </select>
          </label>
          <p>Metal</p>
          <label>
            <select
              onChange={(event) => setComposition(event.target.value)}
              value={composition}
            >
              <option value="Metal">Metal</option>
              {OptionMetal}
            </select>
          </label>
          <p>Quality of the coin</p>
          <label>
            <select>{OptionQuality}</select>
          </label>
        </Options>
        <RangeSearch>
          <Price>
            <p>Price</p>
            <label>
              from
              <input
                type="text"
                onChange={(event) => setPriceFrom(event.target.value)}
              />
            </label>
            <label>
              to
              <input
                type="text"
                onChange={(event) => setPriceTo(event.target.value)}
              />
            </label>
          </Price>
          <Year>
            <p>Year of issue</p>
            <label>
              from
              <input
                type="text"
                onChange={(event) => setYearFrom(event.target.value)}
              />
            </label>
            <label>
              to
              <input
                type="text"
                onChange={(event) => setYearTo(event.target.value)}
              />
            </label>
          </Year>
        </RangeSearch>
      </AdvancedSearch>
    </AdvanceMain>
  );
};

const mapStateToProps = (state) => {
  return {
    coins: state.coins.items,
  };
};
export default connect(mapStateToProps)(AdvanceSearch);
