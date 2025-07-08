import { useState } from "react"
import { useBudget } from "../hooks/useBudget"

const BudgetForm = () => {
    const [budget, setBudget] = useState(0)
    const {dispatch} = useBudget()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }

    const isValidForm = () => {
        return budget > 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({type: "save-budget", payload: {budget}})
    }

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
            <label htmlFor="budget" className="text-2xl text-blue-600 text-center font-bold">Define tu presupuesto</label>
            <input 
            id="budget"
            type="number"
            placeholder="Ej. 300 o 500"
            className="border border-slate-300 p-2 rounded-lg w-full"
            value={budget}
            onChange={handleChange}
            />
        </div>

        <input 
        type="submit"
        value="Guardar Presupuesto"
        className="bg-blue-600 hover:bg-blue-900 cursor-pointer p-2 text-white uppercase rounded-lg w-full disabled:opacity-10"
        disabled={!isValidForm()}
        />
    </form>
  )
}

export default BudgetForm
