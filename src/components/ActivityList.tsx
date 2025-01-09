import { ActivityActions } from "../reducers/activityReducer";
import { Activity } from "../types"
import ActivityItem from './ActivityItem';
type ActivityListProps = {
    activities: Activity[],
    dispatch: React.Dispatch<ActivityActions>
}

const ActivityList = ({ activities, dispatch}: ActivityListProps) => {


    if(activities.length === 0) return <h1 className="p-10 text-center text-5xl">No activities to show.</h1>

    return (
        <div className="p-10 mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-600 text-center">
                Food and Activities
            </h2>

            {
                activities.map((activity: Activity)=> (
                    <ActivityItem key={activity.id} activity={activity} dispatch={dispatch}/>
                ))
            }            
        </div>
    )
}

export default ActivityList