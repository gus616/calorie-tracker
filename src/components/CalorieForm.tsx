import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { categories } from "../data/categories"
import { Activity } from "../types";
import { ActivityActions, ActivityState } from "../reducers/activityReducer";

type CalorieFormProps = {
    dispatch: React.Dispatch<ActivityActions>
    state: ActivityState
}

const CalorieForm = ({ dispatch, state }: CalorieFormProps) => {


    const initialState: Activity = {
        id: uuidv4(),
        category: 1,
        name: '',
        calories: 0
    }
    const [activity, setActivity] = useState<Activity>(initialState);

    useEffect(() => {
        if (state.activeId) {
            const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0];
            setActivity(selectedActivity);
        }
    }, [state])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const isNumberField = ['category', 'calories'].includes(e.target.id);

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        });
    }

    const isValidActivity = () => {
        const { name, calories } = activity;

        return name.trim() !== '' && calories > 0;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({
            type: "save-activity", payload: {
                newActivity: activity
            }
        });

        setActivity({
            ...initialState,
            id: uuidv4()
        })
    }

    return (
        <>
            <div className="max-w-4xl mx-auto">
                <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-3">
                        <label htmlFor="category" className="font-bold">Category</label>
                        <select
                            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                            id="category"
                            value={activity.category}
                            onChange={(e) => handleChange(e)}
                        >
                            {
                                categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        <label htmlFor="name" className="font-bold">Activity</label>
                        <input
                            id="name"
                            type="text"
                            value={activity.name}
                            onChange={handleChange}
                            className="border border-slate-300 p-2 rounded-lg"
                            placeholder="E.G Food, Orange Juice, Salad, Exercise, Weight Lifting, Bicycle"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        <label htmlFor="calories" className="font-bold">Calories</label>
                        <input id="calories" type="text" value={activity.calories} onChange={handleChange} className="border border-slate-300 p-2 rounded-lg" placeholder="E.G 300 or 500" />
                    </div>

                    <input
                        type="submit"
                        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold disabled:opacity-10 uppercase text-white cursor-pointer"
                        value={activity.category === 1 ? 'Track Food' : 'Track Exercise'}
                        disabled={!isValidActivity()}
                    />
                </form>
            </div>
        </>
    )
}

export default CalorieForm