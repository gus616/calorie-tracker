import { useEffect, useReducer } from "react"
import CalorieForm from "./components/CalorieForm"
import Header from "./components/Header"
import { activityReducer, initialState } from "./reducers/activityReducer";
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities]);

  const isActivitiesListEmpty = state.activities.length === 0 ? true : false;

  return (
    <>
      <Header dispatch={dispatch} activitiesEmpty={isActivitiesListEmpty} />
      <section className="bg-lime-500 py-20 px-5">
        <CalorieForm dispatch={dispatch} state={state} />
      </section>
      {
        state.activities.length > 0 &&
        <section className="bg-gray-800 py-10">

          <div className="max-w-4xl mx-auto">
            <CalorieTracker activities={state.activities} />
          </div>

        </section>
      }

      <section className="bg-gray-200 min-h-screen">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>

    </>
  )
}

export default App
