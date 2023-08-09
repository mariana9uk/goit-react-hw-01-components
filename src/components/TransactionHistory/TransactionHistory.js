import {
  HeadStyled,
  TdStyled,
  ThStyled,
  TableStyled,
  TrStyled,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TableStyled style={{ borderColor: 'red' }}>
      <HeadStyled>
        <tr>
          <ThStyled>Type</ThStyled>
          <ThStyled>Amount</ThStyled>
          <ThStyled>Currency</ThStyled>
        </tr>
      </HeadStyled>
      <tbody>
        {items.map(item => (
          <TrStyled key={item.id}>
            <TdStyled>{item.type}</TdStyled>
            <TdStyled>{item.amount}</TdStyled>
            <TdStyled>{item.currency}</TdStyled>
          </TrStyled>
        ))}
      </tbody>
    </TableStyled>
  );
};
