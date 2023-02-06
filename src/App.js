import './App.css';
import { Profile } from './Profile/Profile'
import { StatisticsList } from './Statistics/StatisticsList'
import { FriendsList } from './Friends/FriendsList'
import { TransactionHistory } from './TransactionsHistory/TransactionHistory.js'
import profile from './user.json'
import stats from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'

function App() {
  return (
    <div className="App">
      <Profile profileData={profile} />
      <StatisticsList statsData={stats} />
      <TransactionHistory transactionsData={transactions} />
      <FriendsList friendsData={friends} />
    </div>
  );
}

export default App;
