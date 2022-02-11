import { Column, Text } from ".."

export type ListPropsItem = {
  label: string;
}

export const ListItem: React.FC <ListPropsItem> = ({label}) => {
  return (
    <Column>
      <Text>{label}</Text>
    </Column>
  )
}