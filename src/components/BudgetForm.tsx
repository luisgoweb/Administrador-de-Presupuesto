

const BudgetForm = () => {
  return (
    <form className="space-y-3">
        <div className="flex flex-col gap-3">
            <label htmlFor="budget" className="text-2xl text-blue-600 text-center font-bold">Define tu presupuesto</label>
            <input 
            id="budget"
            type="number"
            placeholder="Ej. 300 o 500"
            className="border border-slate-300 p-2 rounded-lg w-full"
            />
        </div>

        <input 
        type="submit"
        value="Guardar Presupuesto"
        className="bg-blue-600 hover:bg-blue-900 cursor-pointer p-2 text-white uppercase rounded-lg w-full"
        />
    </form>
  )
}

export default BudgetForm
