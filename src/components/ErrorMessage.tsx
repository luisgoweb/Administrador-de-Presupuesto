import type { PropsWithChildren } from "react"


const ErrorMessage = ({children} : PropsWithChildren) => {
  return (
    <p className="bg-red-600 p-2 text-white text-center">
        {children}
    </p>
  )
}

export default ErrorMessage
