import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types'

export const TransactionTableRow = ({ data: { type, amount, currency, id } }) => {
    return < tr className={css.transactionHistoryRow}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr >
}

TransactionTableRow.propTypes = {
    data: PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
}