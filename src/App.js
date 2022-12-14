
import './App.css';
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import AccountSummary from './components/AccountSummary/AccountSummary';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import AddTransaction from './components/AddTransaction/AddTransaction';
import myStore from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div>
<Provider store={myStore}>

     <Header/>
     <div className='container'>
      <Balance/>
      <AccountSummary/>
      <TransactionHistory/>
      <AddTransaction/>
     </div>
</Provider>
    </div>
  );
}

export default App;
