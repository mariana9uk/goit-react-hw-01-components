
import { HeadStyled, TdStyled, ThStyled, TableStyled } from "./TransactionHistory.styled"
export const TransactionHistory = ({items}) => {
    return (
        <TableStyled >
  <HeadStyled>
    <tr>
      <ThStyled>Type</ThStyled>
      <ThStyled>Amount</ThStyled>
      <ThStyled>Currency</ThStyled>
    </tr>
  </HeadStyled>
  <tbody>
    {items.map((item)=>(
     <tr key={item.id}>
      <TdStyled>{item.type}</TdStyled>
      <TdStyled>{item.amount}</TdStyled>
      <TdStyled>{item.currency}</TdStyled>
    </tr>))}
  
  </tbody>
</TableStyled >

    )
}