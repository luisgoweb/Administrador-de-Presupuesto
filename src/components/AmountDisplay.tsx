import { formatCurrency } from "../helpers/formatCurrency"

type AmountDisplayProps = {
    amount: number
    label: string
}

const AmountDisplay = ({amount, label}: AmountDisplayProps) => {
  return (
    <p className="text-lg">
        {label}: {''}
        <span className="text-black font-bold">{ formatCurrency(amount) }</span>
    </p>
  )
}

export default AmountDisplay
