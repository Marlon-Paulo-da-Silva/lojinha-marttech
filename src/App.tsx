import { Routes } from 'react-router-dom';
import './App.css';
import { RoutesApp } from './routes';
import { Theme } from './themes/theme';

export const App = ( ) => {
  return (
    <Theme>
      <RoutesApp />
    </Theme>
  );
}

export default App;
