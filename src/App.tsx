import BudgetForm from "./components/BudgetForm"


function App() {
 
  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
          <h1 className="text-2xl text-center font-bold text-white uppercase">Planificador de Gastos</h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white mt-10 shadow-lg rounded-lg p-10">
          <BudgetForm />
      </div>
    </>
  )
}

export default App
