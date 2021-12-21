import styles from './app.module.scss';
import MortgageCalculator from './pages/mortgage-calculator.page';

import { Route, Link } from 'react-router-dom';

export function App() {
  return (
    <MortgageCalculator></MortgageCalculator>
  );
}

export default App;
