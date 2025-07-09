import AmountDisplay from "./AmountDisplay"


const BudgetTracker = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center ">
            <img src="/grafico.jpg" alt="Grafico de Gastos" />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
            <button type="button" className="bg-pink-600 hover:bg-pink-900 text-white p-2 uppercase cursor-pointer w-full rounded-lg">
                Reset App
            </button>
            <AmountDisplay 
            label="Presupuesto"
            amount={500}
            />
            <AmountDisplay 
            label="Gastado"
            amount={300}
            />
            <AmountDisplay 
            label="Disponible"
            amount={200}
            />
        </div>
        
    </div>
  )
}

export default BudgetTracker
