import PropTypes from 'prop-types'
import css from "./Profile.module.css"

export const Profile = ({ username, location, tag, avatar, stats: { followers, views, likes } }) => {
    return (
        <><div >
            <div className={(css.ProfileContainer)}>
                <img
                    src={avatar}
                    alt="User avatar"
                    width={120}
                />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <div className={(css.listWrap)}>
                    <li className={(css.listEl)}>
                        <span >Followers</span>
                        <span>{followers}</span >
                    </li >
                    <li className={(css.listEl)}>
                        <span>Views</span>
                        <span> {views}</span>
                    </li >
                    <li className={(css.listEl)}>
                        <span>Likes</span>
                        <span> {likes}</span >
                    </li >
                </div>
            </ul >
        </div ></>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })

}
