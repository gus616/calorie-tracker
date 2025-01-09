import { Activity } from '../types';
import { categories } from '../data/categories';
import { useMemo } from 'react';

import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { ActivityActions } from '../reducers/activityReducer';

type ActivityItemProps = {
  activity: Activity,
  dispatch: React.Dispatch<ActivityActions>
};

const ActivityItem = ({ activity, dispatch }: ActivityItemProps) => {

  const categoryName = useMemo(() => (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ''), [activity]);

  return <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
    <div className="space-y-2 relative">
      <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>{categoryName(+activity.category)}</p>
      <p className="text-2xl font-bold pt-5">{activity.name}</p>
      <p className="font-black text-4xl text-lime-500">{activity.calories} {' '} <span>Calories</span></p>
    </div>
    <div className="flex gap-5 items-center">
      <button>
        <PencilSquareIcon className="h-8 w-8 text-gray-800" onClick={() => dispatch({
          type: 'set-activeId',
          payload: { id: activity.id }
        })} />
      </button>
      <button>
        <XCircleIcon className="h-8 w-8 text-red-500" onClick={() => dispatch({
          type: 'delete-activity',
          payload: { id: activity.id }
        })} />
      </button>
    </div>
  </div>
};

export default ActivityItem;
