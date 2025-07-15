import { createContext, useMemo, useReducer, type Dispatch, type ReactNode } from "react";
import { BudgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer";

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpense: number
    disponibleExpense: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)


export const BudgetProvider = ({children}: BudgetProviderProps) => {
    const[state, dispatch] = useReducer(BudgetReducer, initialState)
    const totalExpense = useMemo(() => state.expenses.reduce((total, expense) => total + expense.amount, 0),[state.expenses])
    const disponibleExpense = useMemo(() => state.budget - totalExpense, [state])

    return (
        <BudgetContext.Provider
        value={{
            state,
            dispatch,
            totalExpense,
            disponibleExpense
        }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
