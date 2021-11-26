import styled from "styled-components";

export const ContactPartDiv = styled.div`
  width: 100%;
  position: relative;
`;

export const ContactDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 55% 45%;
  align-items: center;
`;

export const ContactTextDiv = styled.div`
  margin: auto;
  margin-right: 0;
  width: 80%;
  color: white;
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
  .w_title {
    font-size: 46px;
    font-weight: 900;
  }
  .w_subtitle {
    font-size: 20px;
    font-weight: 900;
  }
  .link_item {
    svg {
      margin-left: 5px;
    }
    display: flex;
    align-items: center;
  }
`;

export const WelcomeContactPart = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const ContactForm = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  .form_title {
    font-size: 24px;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  .btn_div {
    width: auto;
  }
  margin: 50px 0;
  width: 100%;
  max-width: 500px;
  background-color: rgba(185, 0, 0, 0.7);
  padding: 30px 40px;
  box-shadow: 0 0 1em rgba(40, 0, 0, 0.4);
`;

export const SocialIconGroup = styled.div`
  display: flex;
  font-size: 20px;
  svg {
    cursor: pointer;
    transition: all 0.2s;
    :hover {
      transform: scale(1.2);
    }
  }
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;