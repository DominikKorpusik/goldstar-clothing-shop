import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles.jsx";

export const CartDropdownContainer = styled.div`
  ::-webkit-scrollbar {
    background: white;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 5px;
  }

  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  gap: 1.87rem;

  ${BaseButton},
  ${GoogleSignInButton}, 
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.span`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
