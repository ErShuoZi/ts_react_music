import React from "react"
import type { FC, ReactNode } from "react"
interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = () => {
  return (
    <div>
      <div>Player</div>
    </div>
  )
}

export default Player
