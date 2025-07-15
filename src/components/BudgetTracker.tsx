import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

const BudgetTracker = () => {

  const {state, dispatch, totalExpense, disponibleExpense} = useBudget()

  const percentage = +((totalExpense / state.budget) * 100).toFixed(2)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center ">
            <CircularProgressbar 
              value={percentage}
              styles={buildStyles({
                pathColor:  percentage === 100 ? '#DC2626' : '#3b82f6',
                textSize:8,
                textColor: percentage === 100 ? '#DC2626' : '#3b82f6'
              })}
              text={`${percentage}% Gastado`}
            />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
            <button type="button" className="bg-pink-600 hover:bg-pink-900 text-white p-2 uppercase cursor-pointer w-full rounded-lg"
            onClick={()=> dispatch({type: "reset-app"})}
            >
                Reset App
            </button>
            <AmountDisplay 
            label="Presupuesto"
            amount={state.budget}
            />
            <AmountDisplay 
            label="Gastado"
            amount={totalExpense}
            />
            <AmountDisplay 
            label="Disponible"
            amount={disponibleExpense}
            />
        </div>
        
    </div>
  )
}

export default BudgetTracker
