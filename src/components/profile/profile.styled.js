import styled from "styled-components"
export const Card = styled.div`
background-color: white;
border: 1px solid #D3D3D3; 
border-radius: 20px;

`
export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
padding:15px;`

export const Stats = styled.ul`
display:flex;
gap:35px;
justify-content:center;
align-items:center;
background-color:#D3D3D3;
margin-top:20px;
border-bottom-left-radius:20px;
border-bottom-right-radius:20px;
`
export const StatsLiItem = styled.li`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
padding-top:15px;
padding-bottom:15px;
`
