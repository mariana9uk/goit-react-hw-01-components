import styled from 'styled-components';

export const FriendsSTList = styled.ul`
  margin-top: 30px;
`;
export const ListSt = styled.li`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #d3d3d3;
  border-radius: 20px;
`;
export const DivSt = styled.div`
  display: flex;
`;
export const Avatar = styled.img`
  width: 48px;
  margin-right: 160px;
`;
const getBgColor = props => {
  return props.status === 'true' ? 'green' : 'red';
};

export const StatusSpan = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${getBgColor};
`;
