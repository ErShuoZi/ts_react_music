import React from "react"
import type { FC, ReactNode } from "react"
interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  return (
    <div>
      <div>Album</div>
    </div>
  )
}

export default Album
