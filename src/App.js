import './App.css';
import { Profile } from './Profile/Profile'
import { StatisticsList } from './Statistics/StatisticsList'
import { FriendsList } from './Friends/FriendsList'
import { TransactionHistory } from './TransactionsHistory/TransactionHistory.js'
import user from './user.json'
import stats from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'

function App() {
  return (
    <div className="App">
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <StatisticsList statsData={stats} />
      <TransactionHistory transactionsData={transactions} />
      <FriendsList friendsData={friends} />
    </div>
  );
}

export default App;
