import { useEffect, useState } from "react"
import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"
import type { DraftExpense } from "../types"
import ErrorMessage from "./ErrorMessage"


const ExpenseForm = () => {

    const initialState : DraftExpense = {
        expenseName:'',
        amount: 0,
        category: '',
        date: ''
    }
    const[expense, setExpense] = useState(initialState)
    const[error, setError] = useState('')
    const {state, dispatch} = useBudget()

    useEffect(()=> {
        if(state.editingId){
            const editingExpense = () => state.expenses.filter(expense => expense.id === state.editingId)[0]
            setExpense(editingExpense)
        }
       
    },[state.editingId])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const isNumberField = ['amount'].includes(e.target.id)
        setExpense({
            ...expense,
            [e.target.name] : isNumberField ? +e.target.value : e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //Validar
        if(Object.values(expense).includes('')){
           setError('Todos los campos son obligatorios')
           return
        }

        dispatch({type: 'add-expense', payload: {expense}})
       
    }

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
        <legend className="text-2xl uppercase font-bold text-blue-600 text-center border-b-4 border-blue-600">Nuevo Gasto</legend>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="grid grid-cols-1 gap-2 mt-5">
            <label htmlFor="expenseName">Nombre del Gasto:</label>
            <input 
            id="expenseName"
            className="w-full border border-slate-300 p-2 rounded-lg"
            type="text"
            placeholder="Escribe el nombre del gasto"
            name="expenseName"
            value={expense.expenseName}
            onChange={handleChange}
            />
        </div>

        <div className="grid grid-cols-1 gap-2 mt-5">
            <label htmlFor="amount">Cantidad:</label>
            <input 
            id="amount"
            className="w-full border border-slate-300 p-2 rounded-lg"
            type="number"
            placeholder="Ej. 300 o 500"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            />
        </div>

        <div className="grid grid-cols-1 gap-2 mt-5">
            <label htmlFor="category">Categoría:</label>
            <select 
            id="category"
            name="category"
            className="w-full border border-slate-300 p-2 rounded-lg"
            value={expense.category}
            onChange={handleChange}
            > 
                <option value="">-- Seleccione --</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-2 mt-5">
            <label htmlFor="date">Fecha:</label>
            <input 
            id="date"
            className="w-full border border-slate-300 p-2 rounded-lg"
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            />
        </div>

        <input 
        type="submit"
        value="Registrar Gasto"
        className="bg-blue-600 hover:bg-blue-800 text-white cursor-pointer uppercase font-bold rounded-lg w-full p-2"
        />

    </form>
  )
}

export default ExpenseForm
