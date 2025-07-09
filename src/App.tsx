import BudgetForm from "./components/BudgetForm"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"
import { useBudget } from "./hooks/useBudget"

function App() {
  const {state} = useBudget()

  const isValidBudget = state.budget > 0

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
          <h1 className="text-2xl text-center font-bold text-white uppercase">Planificador de Gastos</h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white mt-10 shadow-lg rounded-lg p-10">
          {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto p-10">


           <ExpenseModal />
        </main>
      )}

     
    </>
  )
}

export default App
