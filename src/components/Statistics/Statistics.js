import { List, ListItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <List>
        {stats.map(statItem => (
          <ListItem key={statItem.id}>
            <span>{statItem.label}</span>
            <span>{statItem.percentage}</span>
          </ListItem>
        ))}
      </List>
    </section>
  );
};
