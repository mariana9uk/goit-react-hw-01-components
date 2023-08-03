import { List } from "./Statistics.styled"

export const Statistics = ({statisticData})=>{
    return(
<section className="statistics">
  <h2 className="title">Upload stats</h2>

  <List>
    {statisticData.map(statItem=>(<li key={statItem.id} className="item">
      <span className="label">{statItem.label}</span>
      <span className="percentage">{statItem.percentage}</span>
    </li>))}
      </List>
</section>

    )
}