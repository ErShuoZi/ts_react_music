import React from "react"
import type { FC, ReactNode } from "react"
interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = () => {
  return (
    <div>
      <div>Mine</div>
    </div>
  )
}

export default Mine
