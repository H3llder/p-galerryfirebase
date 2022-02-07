import styled from "styled-components";

export const Container = styled.div`
    background-color: #202F48;
    color: #fff;
    min-height: 100vh;
`;

export const Header = styled.h1`
    margin: 0;
    text-align: center;
    padding: 30px 0;
`;

export const Area = styled.div`
    width: 100%;
    max-width: 980px;

    margin: 0 auto;
    padding: 30px 0;
`;

export const ScreenWarning = styled.div`
    text-align: center;
    margin-top: 30px;

    .load--text {
        margin-top: 10px;
        color: #ccc;
    }

    .not-found { font-size: 50px;}

    .emoji {
        padding: 40px;
        margin: 0 auto;
        border: 5px solid transparent;
        border-radius: 50%;
        border-top: 5px solid #FFBC3F;
        width: 50px;
        height: 50px;
        -webkit-animation: spin 6s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
      }
      
      /* Safari */
      @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
`;

export const PhotoList = styled.div`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
`;

export const UploadForm = styled.form`
      display: flex;
      justify-content: space-between;
      background: rgba(0 ,0 ,0 , 0.4);
      margin-bottom: 10px;
      padding: 10px 20px;
      border-radius: 5px;
      align-items: center;

      input[type=file] {
        display: none;
      }

      label {
        background: transparent;
        padding: 10px;
        color: #fff;
        border: 2px solid #fff;
        cursor: pointer;
        border-radius: 5px;
        transition: all ease 0.2s;
      } label:hover {
        background: #fff;
        color: #000;
      }

      input[type=submit] {
        background-color: transparent;
        color: tomato;
        padding: 10px 20px;
        border: 2px solid tomato;
        border-radius: 5px;
        cursor: pointer;
        transition: all ease 0.3s;
      }

      input[type=submit]:hover {
        background-color: tomato;
        color: #fff;
      }
`;