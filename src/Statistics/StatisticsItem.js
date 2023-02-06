import PropTypes from 'prop-types'
import css from "./Statistics.module.css"

export const StatisticsItem = ({ data: { label, percentage, id } }) => {

    return <li className={css.StatsItem}>
        <span className={css.StatsLiItem}>{label}</span>
        <span className={css.StatsLiItem}>{percentage}%</span>
    </li >
}

StatisticsItem.propTypes = {
    data: PropTypes.exact({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
}