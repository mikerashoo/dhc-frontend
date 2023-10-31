import React from 'react'

type Props = {
  children: React.ReactNode,
  className?: string
}

const RadioGroup: React.FC<Props> = ({children}) => {

  return (
    <div className={"radio__block"}>
      {children}
    </div>
  )
}

export default RadioGroup