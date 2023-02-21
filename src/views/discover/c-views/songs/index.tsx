import React from "react"
import type { FC, ReactNode } from "react"
interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  return (
    <div>
      <div>Songs</div>
    </div>
  )
}

export default Songs
