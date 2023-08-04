import styled from "styled-components";
const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
export const List = styled.ul`
list-style:none;
display:flex;
gap: 30px;

`
export const ListItem = styled.li`
backround-color: ${getRandomColor()};
display:flex;
flex-direction:column;
align-items:center;
gap:20px`