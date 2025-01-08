import { useReducer } from "react"
import CalorieForm from "./components/CalorieForm"
import Header from "./components/Header"
import { activityReducer, initialState } from "./reducers/activityReducer";
import ActivityList from "./components/ActivityList";

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState);

  console.log(state);

  return (
    <>
      <Header />
      <CalorieForm dispatch={dispatch} />
      <ActivityList activities={state.activities} />
    </>
  )
}

export default App
