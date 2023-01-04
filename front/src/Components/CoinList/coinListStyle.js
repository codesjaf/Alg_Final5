import styled from "styled-components";
export const CoinsMainDiv = styled.div`
  width: 95%;
  #Advanced {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
  }
  #SearchBlock {
    padding-left: 40px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    text-decoration: none;
    margin: 20px;
    .coinName {
      font-family: Roboto, sans-serif;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #833ae0;
      padding-bottom: 12px;
    }
    .coinInfo {
      font-family: Roboto, sans-serif;
      font-size: 12px;
      line-height: 125.5%;
      color: #000000;
    }
  }
`;
export const CoinListBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 1024px) and (max-width: 1280px) {
    justify-content: space-around;
  }
`;
export const CoinSelf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: inline-block;
    margin-right: 30px;
    width: 120px;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 100%;
  }
`;
export const CoinInfo = styled.div`
  width: 50%;
`;
