import {
  fetchCoinsBegin,
  fetchCoinsFailure,
  fetchCoinsSuccess,
  fetchProductsBegin,
  fetchProductsFailure,
  fetchProductsSuccess,
} from "./coinAction";

export function fetchProducts(type) {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    if (type) {
        console.log('hi');
      return fetch(`http://localhost:3001/coinByType?type=${type}`)
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch((error) => dispatch(fetchProductsFailure(error)));
    } else {
      return fetch(`http://localhost:3001/coins`)
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch((error) => dispatch(fetchProductsFailure(error)));
    }
  };
}

//filter search
export function fetchFilterCoins(input, values) {
  return (dispatch) => {
    dispatch(fetchCoinsBegin());
    if (values) {
      return fetch(
        `http://localhost:3001/coinsSearch?name=${input}&country=${values.country}&composition=${values.composition}&priceFrom=${values.priceFrom}&priceTo=${values.priceTo}&yearFrom=${values.yearFrom}&yearTo=${values.yearTo}`
      )
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchCoinsSuccess(json));
          return json;
        })
        .catch((error) => dispatch(fetchCoinsFailure(error)));
    } else if (input && input !== "undefined") {
      return fetch(`http://localhost:3001/coinsSearch?name=${input}`)
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchCoinsSuccess(json));
          return json;
        })
        .catch((error) => dispatch(fetchCoinsFailure(error)));
    } else {
      return fetch(`http://localhost:3001/coins`)
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchCoinsSuccess(json));
          return json;
        })
        .catch((error) => dispatch(fetchCoinsFailure(error)));
    }
  };
}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
