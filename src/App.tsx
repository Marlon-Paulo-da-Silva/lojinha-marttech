import { Routes } from 'react-router-dom';
import './App.css';
import { RoutesApp } from './routes';
import { Theme, GlobalStyles } from './themes';

export const App = ( ) => {
  return (
    <Theme>
      <GlobalStyles />
      <RoutesApp />
    </Theme>
  );
}

export default App;
