import styled from 'styled-components';
export const HeadStyled = styled.thead`
  text-align: center;
  background-color: #30d5c8;
  color: white;
  font-size: 25px;
`;
export const TableStyled = styled.table`
  margin-top: 50px;
  border-collapse: collapse;
`;

export const ThStyled = styled.th`
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 60px;
  padding-right: 60px;
  text-align: center;
  border: 1px solid white;
`;

export const TdStyled = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 60px;
  padding-right: 60px;
  text-align: center;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  font-size: 18px;
`;
export const TrStyled = styled.tr`
  &:nth-child(even) {
    background-color: #d3d3d3;
  }
`;
