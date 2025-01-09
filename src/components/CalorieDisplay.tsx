

type CalorieDisplayProps = {
    calories: number,
    type: 'consumed' | 'burned' | 'net'
}

const CalorieDisplay = ({ calories, type }: CalorieDisplayProps) => {


    if (type === 'net') {
        return (
            <p className={`font-bold rounded-full grid grid-cols-1 gap-3 text-center text-3xl ${calories < 0 ? 'text-yellow-500' : 'text-red-600'
                } `}>
                <span className="font-black text-6xl ">
                    {calories}
                </span>

                {calories < 0 ? 'Deficit' : 'Superavit'}
            </p>

        )
    }

    return (
        <p className={`font-bold rounded-full grid grid-cols-1 gap-3 text-center text-3xl ${type === 'consumed' ? 'text-lime-500' : 'text-orange-500'}`}>
            <span className="font-black text-6xl ">
                {calories}
            </span>
            {type === 'consumed' ? 'Consumed' : 'Burned'}
        </p>
    )
}

export default CalorieDisplay