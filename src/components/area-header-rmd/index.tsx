import React from "react"
import type { FC, ReactNode } from "react"
import { Link } from "react-router-dom"
import { AreaHeaderV1Left, AreaHeaderV1Right, AreaHeaderV1Wrapper } from "./style"
interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  more?: string
  moderLink?: string
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const { title = "默认标题", keywords = [], more = "更多", moderLink = "/" } = props
  return (
    <div>
      <AreaHeaderV1Wrapper className="sprite_02">
        <AreaHeaderV1Left>
          <h3 className="title">{title}</h3>
          <div className="keywords">
            {keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className="text">{item}</span>
                  <span className="divider">|</span>
                </div>
              )
            })}
          </div>
        </AreaHeaderV1Left>
        <AreaHeaderV1Right>
          <Link to={moderLink} className="more">
            {more}
          </Link>
          <i className="icon sprite_02"></i>
        </AreaHeaderV1Right>
      </AreaHeaderV1Wrapper>
    </div>
  )
}

export default AreaHeaderV1
