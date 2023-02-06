import css from './Friends.module.css'
import { FriendsListItem } from './FriendsListItem'

export const FriendsList = ({ friendsData }) => {
    return (
        <ul className={css.friendsListUl}>
            <div className={css.friendsList}>
                {friendsData.map(item =>
                    < FriendsListItem key={item.id} data={item} />)}
            </div>
        </ul >
    )
}