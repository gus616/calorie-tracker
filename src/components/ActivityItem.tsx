import { Activity } from '../types';

type ActivityItemProps = {
  activity: Activity,
};

const ActivityItem = ({ activity }: ActivityItemProps) => {
  return <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
    <div className="space-y-2 relative">
      <p>{activity.category}</p>
      <p className="text-2xl font-bold pt-5">{activity.name}</p>
      <p className="font-black text-4xl text-lime-500">{activity.calories} {' '} <span>Calories</span></p>
    </div>
    <div>

    </div>
  </div>
};

export default ActivityItem;
