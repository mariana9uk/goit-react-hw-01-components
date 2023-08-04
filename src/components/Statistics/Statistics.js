import { List, ListItem } from "./Statistics.styled"

export const Statistics = ({statisticData})=>{
    return(
<section className="statistics">
  <h2 className="title">Upload stats</h2>

  <List>
    {statisticData.map(statItem=>(<ListItem key={statItem.id}>
      <span >{statItem.label}</span>
      <span >{statItem.percentage}</span>
    </ListItem>))}
      </List>
</section>

    )
}
