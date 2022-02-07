import styled from "styled-components";

export const Container = styled.div`
    background: #131E32;
    padding: 10px;
    border-radius: 4px;
    color: #7B8AA5;

    img {
        display: block;
        max-width: 100%;
        border-radius: 5px;
        margin-bottom: 10px;
        transform: scale(1);
        transition: all ease 0.3s;
        cursor: pointer;
    }
    img:hover {
        box-shadow: 0 0 5px #ccc;
        transform: scale(1.2);
    }
  
    button {
        display: block;
        background-color: transparent;
        border: 2px solid tomato;
        color: tomato;
        padding: 10px 20px;
        font-size: 15px;
        border-radius: 10px;
        margin: 10px auto 0 auto;
        cursor: pointer;
        transition: all ease 0.2s;

        &:hover {
            background-color: tomato;
            color: #fff;
        }
    }

`;

