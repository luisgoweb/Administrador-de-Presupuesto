import { v4 } from "uuid"
import type { Category, DraftExpense, Expense } from "../types"

export type BudgetActions = 
{type: "save-budget", payload: {budget: number}} |
{type: "show-modal"} |
{type: "close-modal"} |
{type: "add-expense", payload: {expense: DraftExpense}} |
{type: "delete-expense", payload: {id: Expense['id']}} |
{type: "get-expense-by-id", payload: {id: Expense['id']}} |
{type: "update-expense", payload: {expense: Expense}} |
{type: "reset-app"} |
{type: "add-filter-category", payload: {id: Category['id']}}

export type BudgetState = {
    budget: number
    modal: boolean
    expenses: Expense[]
    editingId: Expense['id']
    currencyCategory: Category['id']
}

const initialBudget = () : number => {
    const budgetStorage = localStorage.getItem('budget')
    return budgetStorage ? +budgetStorage : 0
}

const initialExpense = () : Expense[] => {
    const expenseStorage = localStorage.getItem('expenses')
    return expenseStorage ? JSON.parse(expenseStorage) : []
}

export const initialState: BudgetState = {
    budget: initialBudget(),
    modal: false,
    expenses: initialExpense(),
    editingId: '',
    currencyCategory: ''
}

const createExpense = (draftExpense: DraftExpense) : Expense => {
    return {
        ...draftExpense,
        id: v4()
    }
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

        if(action.type === 'show-modal'){
            return {
                ...state,
                modal: true
            }
        }
        if(action.type === 'close-modal'){
            return {
                ...state,
                modal: false,
                editingId: ''
            }
        }

        if(action.type === 'add-expense'){

            const expense = createExpense(action.payload.expense)
            return {
                ...state,
                expenses: [...state.expenses, expense ],
                modal: false
            }
        }

        if(action.type === 'delete-expense'){
            return {
                ...state,
                expenses: state.expenses.filter( expense => expense.id !== action.payload.id)
            }
        }

        if(action.type === 'get-expense-by-id'){
            return {
                ...state,
                editingId: action.payload.id,
                modal: true
            }
        }

        if(action.type === 'update-expense'){
            return {
                ...state,
                expenses: state.expenses.map( expense => expense.id === action.payload.expense.id ? action.payload.expense : expense),
                editingId: '',
                modal: false
            }
        }

        if(action.type === 'reset-app'){
            return { 
                ... state,

                budget: 0,
                modal: false,
                expenses: [],
                editingId: ''
            }
        }

        if(action.type === "add-filter-category"){
            return{
                ...state,
                currencyCategory: action.payload.id
            }
        }


        return state

    }