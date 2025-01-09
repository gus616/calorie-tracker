import { ActivityActions } from "../reducers/activityReducer"

type HeaderProps = {
  dispatch: React.Dispatch<ActivityActions>,
  activitiesEmpty: boolean
}
const Header = ({ dispatch, activitiesEmpty }: HeaderProps) => {
  return (
    <header className="bg-lime-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-center text-lg font-bold text-white uppercase">
          Calorie Counter
        </h1>
        <button className="bg-gray-800 disabled:opacity-10 disabled:cursor-not-allowed hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm"
          onClick={() => dispatch({ type: 'restart-app' })}
          disabled={activitiesEmpty}
        >
          Restart App
        </button>
      </div>
    </header>
  )
}

export default Header