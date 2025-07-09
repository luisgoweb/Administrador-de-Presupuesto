
type AmountDisplayProps = {
    amount: number
    label: string
}

const AmountDisplay = ({amount, label}: AmountDisplayProps) => {
  return (
    <p>
        {label}: {''}
        <span className="text-black font-bold">{amount}</span>
    </p>
  )
}

export default AmountDisplay
