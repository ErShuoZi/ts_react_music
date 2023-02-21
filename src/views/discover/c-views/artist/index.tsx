import React from "react"
import type { FC, ReactNode } from "react"
interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return (
    <div>
      <div>Artist</div>
    </div>
  )
}

export default Artist
