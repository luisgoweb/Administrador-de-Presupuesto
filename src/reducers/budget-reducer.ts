
export type BudgetActions = 
{type: "save-budget", payload: {budget: number}}

export type BudgetState = {
    budget: number
}

export const initialState: BudgetState = {
    budget: 0
}

export const BudgetReducer = (
        state: BudgetState = initialState,
        action: BudgetActions
    ) => {

        if(action.type === 'save-budget'){
            return {
                ...state,
                budget: action.payload.budget
            }
        }


        return state

    }