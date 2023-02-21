import React from "react"
import type { FC, ReactNode } from "react"
interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <div>
      <h2>AppFooter</h2>
    </div>
  )
}

export default AppFooter
