import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"


const FilterByCategory = () => {

    const {dispatch} = useBudget()
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: "add-filter-category", payload: {id: e.target.value}})
    }

  return (
    <div className="bg-white shadow-lg p-10 rounded-lg">
        <form>
            <div className="flex flex-col md:flex-row md:items-center gap-5">
                <label htmlFor="category">Filtrar Gasto</label>
                <select
                id="category"
                className="border border-slate-300 p-2 rounded-lg"
                onChange={handleChange}
                >
                    <option value="" >--Seleccionar Todos</option>
                    {categories.map( category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    </div>
  )
}

export default FilterByCategory
