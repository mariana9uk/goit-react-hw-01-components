import styled from 'styled-components';
export const HeadStyled = styled.thead`

text-align:center;
background-color:#30D5C8;
color: white;
font-size:25px;

`
export const TableStyled = styled.table`
margin-top:50px;
border-collapse: collapse;
`

export const ThStyled = styled.th`
padding-top:20px;
padding-bottom:15px;
padding-left:60px;
padding-right:60px;
text-align:center;
border:1px solid white;
`

export const TdStyled = styled.td`
padding-top:15px;
padding-bottom:15px;
padding-left:60px;
padding-right:60px;
text-align:center;
border-left: 1px solid #D3D3D3;
border-right: 1px solid #D3D3D3;
font-size:18px;
`
export const TrStyled = styled.tr`
&:nth-child(even){background-color:  #D3D3D3;};
`