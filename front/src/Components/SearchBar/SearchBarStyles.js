import styled from "styled-components";
export const SearchBlock = styled.div`
  width: 95%;
  position: relative;
  padding-bottom: 30px;
  p {
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: 109%;
    color: #000000;
    margin-bottom: 0;
    padding-bottom: 10px;
  }
`;
export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  a {
    background: #833ae0;
    border: none;
    outline: none;
    padding: 10px 20px;
    color: #ffffff;
    text-decoration: none;
  }
  input {
    border: 1px solid #000000;
    outline: none;
    padding: 10px 20px;
    width: 70%;
    &::-webkit-search-cancel-button {
      position: relative;
      right: -10px;
      cursor: pointer;
      font-size: 16px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 50%;
  }
`;
export const Advanced = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-top: 10px;
  a {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 109%;
    color: black;
    text-decoration: underline;
  }
`;
export const AdvanceMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const AdvancedSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 60%;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  margin: 0 auto;
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 80%;
  }
`;
export const Options = styled.div`
  width: 60%;
  select {
    width: 70%;
    padding: 10px 20px;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    background-image: url("https://cdn-icons-png.flaticon.com/128/2985/2985150.png");
    background-size: 12px;
    background-position-x: 98%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    transform: rotate(0deg);
    margin-bottom: 10px;
  }
`;
export const RangeSearch = styled.div`
  input {
    width: 20%;
    padding: 10px 20px;
    margin: 10px 5px;
  }
  label {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 109%;
    color: #000000;
  }
`;
export const Price = styled.div``;
export const Year = styled.div``;
