import css from "./Statistics.module.css"
import { StatisticsItem } from './StatisticsItem'

export const StatisticsList = ({ title, statsData }) => {
    return (
        <><section>
            {title ? (<h2>{title}</h2>) : ("")}
            <ul >
                <div className={css.statList}>
                    {statsData.map(item =>
                        < StatisticsItem key={item.id} data={item} />
                    )}
                </div>
            </ul>
        </section></>
    )
}

