import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`; 

export const Item = styled.li`
    font-family: Cambria;
    font-weight: 500;
    font-size: 24px;

    display: flex;
    justify-content:space-between;
`; 

export const Button = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid gray;

    padding: 5px;

    text-align: center;
    font-family: Cambria;
    font-weight: 700;
    font-size: 24px;
    &:active, 
    &:hover,
    &:focus {
        background-color: orangered;
        color: white;
        border-color: none;
}`; 

