import React from "react"
import type { FC, ReactNode } from "react"
interface IProps {
  children?: ReactNode
}

const Focus: FC<IProps> = () => {
  return (
    <div>
      <div>Focus</div>
    </div>
  )
}

export default Focus
