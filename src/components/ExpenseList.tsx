import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

const ExpenseList = () => {
    const { state } = useBudget()

    const filteredExpense = state.currencyCategory ? state.expenses.filter( expense => expense.category === state.currencyCategory) : state.expenses
    const isEmpty = useMemo(() => filteredExpense.length === 0,[state.currencyCategory])

  return (
    <div className="mt-10 bg-white shadow-lg p-5 rounded-lg">
        {isEmpty ? <p className="text-gray-600 text-2xl font-bold">Aún no hay gastos</p> : (
            <>
                <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos</p>
                {filteredExpense.map( expense => (
                    <ExpenseDetail 
                    key={expense.id}
                    expense={expense}
                    />
                ))}
            
            </>
        )}
    </div>
  )
}

export default ExpenseList
