import css from './TransactionHistory.module.css'

import { TransactionTableRow } from './TransactionTableRow'

export const TransactionHistory = ({ transactionsData }) => {
    return <table className={css.transactionHistoryTable}>
        <thead className={css.transactionHistoryHead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {transactionsData.map(item =>
                < TransactionTableRow key={item.id} data={item} />
            )
            }</tbody>
    </table >
}
