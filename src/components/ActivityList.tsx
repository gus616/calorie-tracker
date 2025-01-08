import { Activity } from "../types"
import ActivityItem from './ActivityItem';
type ActivityListProps = {
    activities: Activity[]
}

const ActivityList = ({ activities }: ActivityListProps) => {
    return (
        <section className="p-10 mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-600 text-center">
                Food and Activities
            </h2>

            {
                activities.map((activity: Activity)=> (
                    <ActivityItem activity={activity} />
                ))
            }            
        </section>
    )
}

export default ActivityList