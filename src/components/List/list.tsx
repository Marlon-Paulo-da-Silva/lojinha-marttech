import { Column } from ".."

import { ListItem, ListPropsItem } from './listItem';


type ListProps = {
  items: ListPropsItem[]
}

export const List: React.FC<ListProps> = ({items}) => {
  return (
    <Column>
      {items.map((item, index) => <ListItem key={index} {...item} />)}
    </Column>
  )
}