import { useMemo } from "react";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";
import type { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";

type ExpenseDetailProps = {
    expense: Expense
}

const ExpenseDetail = ({expense} : ExpenseDetailProps) => {

    const {dispatch} = useBudget()

    const categoryInfo = useMemo(() => categories.filter(category => category.id === expense.category)[0],[expense])

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction 
            onClick={()=> dispatch({type: 'get-expense-by-id', payload: {id: expense.id}})}
            >
                Actualizar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
            onClick={()=> dispatch({type: 'delete-expense', payload: {id: expense.id}})}
            destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
        
    );

  return (
        <SwipeableList > 
            <SwipeableListItem 
                maxSwipe={30} 
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
                >
                    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
                        <div>
                            <img 
                            src={`/icono_${categoryInfo.icon}.svg`}
                            alt="icono gasto"
                            className="w-20"
                            />
                        </div>
                        <div className="flex-1 space-y-2">
                            <p className="text-sm font-bold text-slate-500">{categoryInfo.name}</p>
                            <p className="font-bold text-lg">{expense.expenseName}</p>
                            <p className="text-slate-600 text-sm">{expense.date}</p>
                        </div>

                        <AmountDisplay 
                        amount={expense.amount}
                        />
                    </div>
             </SwipeableListItem>
         </SwipeableList>
  )
}

export default ExpenseDetail
