import PropTypes from 'prop-types'
import css from './Friends.module.css'

export const FriendsListItem = ({ data: { avatar, name, isOnline } }) => {
    return <li className={css.friendsListItem}>
        <div className={css.friendWrap}>
            <span className={`${isOnline ? css.isOnline : css.isNotOnline}`}></span>
            <img className='avatar' src={avatar} alt="User avatar" width="48" />
            <p className='name'>{name}</p>
        </div >
    </li >
}

FriendsListItem.propTypes = {
    data: PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired
    }).isRequired
}