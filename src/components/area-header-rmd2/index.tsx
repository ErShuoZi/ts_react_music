import React from "react"
import type { FC, ReactNode } from "react"
import { AreaHeader2Wrapper } from "./style"
interface IProps {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}

const AreaHeader2: FC<IProps> = (props) => {
  const { title = "默认标题", moreText, moreLink } = props
  return (
    <AreaHeader2Wrapper>
      <h3 className="title">{title}</h3>
      {moreText && moreLink && <a href={moreLink}>{moreText}</a>}
    </AreaHeader2Wrapper>
  )
}

export default AreaHeader2
