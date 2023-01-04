import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  .homepage {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 50px;
    line-height: 59px;
    a {
      font-family: "Shrikhand", cursive;
      text-decoration: none;
      color: black;
    }
  }
  .admin {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 109%;
    a {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      padding: 10px 15px;
      color: black;
      border: 1px solid black;
      border-radius: 8px;
      margin-bottom: 5px;
      text-align: center;
      &:hover {
        background-color: blueviolet;
        color: white;
        border: 1px solid white;
      }
    }
    p {
      text-align: center;
      padding-top: 5px;
    }
  }
`;
const HeaderBlock = styled.div`
  width: 95%;
  padding-bottom: 50px;
  padding-top: 20px;
  margin: 0 auto;
`;
const Header = () => {
  return (
    <HeaderBlock>
      <List>
        <li className={"homepage"}>
          <Link to="/">Coins Wiki</Link>
        </li>
      </List>
    </HeaderBlock>
  );
};
export default Header;
