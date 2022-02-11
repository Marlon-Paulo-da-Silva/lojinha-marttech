import { Input, Text, Button, Row, Column, List } from "../components";

export const Home = () => {
  return (
    <div>
      <Column width="600px" margin="0 auto">
        <Text fontWeight="bold" fontSize="bodyLarge" >Home</Text>
        <Row width="100%">
          <Input flex={1} placeholder="Insira o nome do produto" />
          <Button>Cadastrar</Button>
        </Row>
        <List items={[
          {label: 'Tarefa 1'},
          {label: 'Tarefa 2'},
          {label: 'Tarefa 3'}
         ]} />
      </Column>
      
    </div>
  );
};