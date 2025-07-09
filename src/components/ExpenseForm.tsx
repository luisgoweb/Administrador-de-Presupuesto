import { categories } from "../data/categories"


const ExpenseForm = () => {
  return (
    <form className="space-y-3">
        <legend className="text-2xl uppercase font-bold text-blue-600 text-center border-b-4 border-blue-600">Nuevo Gasto</legend>

        <div className="grid grid-cols-1 gap-2 mt-5">
            <label htmlFor="expenseName">Nombre del Gasto:</label>
            <input 
            id="expenseName"
            className="w-full border border-slate-300 p-2 rounded-lg"
            type="text"
            placeholder="Escribe el nombre del gasto"
            name="expenseName"
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
            />
        </div>

        <div className="grid grid-cols-1 gap-2 mt-5">
            <label htmlFor="category">Categoría:</label>
            <select 
            id="category"
            name="category"
            className="w-full border border-slate-300 p-2 rounded-lg"
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
