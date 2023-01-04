import styled from "styled-components";

export const CoinPageMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;
export const ImageBlock = styled.div`
  margin-right: 30px;
  img {
    width: 300px;
  }
`;
export const InformationBlock = styled.div`
  padding: 20px 43px;
  width: 35%;
  background-color: rgba(196, 196, 196, 0.5);
  p {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 125%;
    color: #000000;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 40px;
    white-space: pre-line;
  }
  a {
    display: inline-block;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    line-height: 12px;
    padding-top: 145px;
    color: black;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    tr {
      td,
      th {
        font-family: Roboto, sans-serif;
        font-weight: bold;
        font-size: 16px;
        line-height: 105.2%;
        padding: 10px;
      }
      th {
        text-align: left;
        border-right: 1px solid #b1abab;
      }
    }
    tr:nth-child(odd) {
      background: #ffffff;
      border-top: 1px solid #b1abab;
      border-bottom: 1px solid #b1abab;
    }
    tr:nth-child(1) {
      border-top: none;
    }
  }
`;
