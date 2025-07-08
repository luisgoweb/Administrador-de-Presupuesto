import { useContext } from "react"
import { BudgetContext } from "../context/Budget-Context"

export const useBudget = () => {
    const context = useContext(BudgetContext)
    if(!context){
        throw new Error('Asegurate de haber rodeado el app.tsx con el provider')
    }
    return context
}