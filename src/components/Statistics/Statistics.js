import { List, ListItem, Headerstatistics } from "./Statistics.styled"

export const Statistics = ({statisticData})=>{
    return(
<section>
  <Headerstatistics>Upload stats</Headerstatistics>

  <List>
    {statisticData.map(statItem=>(<ListItem key={statItem.id} >
      <span >{statItem.label}</span>
      <span >{statItem.percentage}</span>
    </ListItem>))}
      </List>
</section>

    )
}
