import React from "react"
import type { FC, ReactNode } from "react"
import { HotAnchorWrapper } from "./style"
import AreaHeader2 from "@/components/area-header-rmd2"
import { hotRadios } from "@/assets/data/local-data"
interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <HotAnchorWrapper>
      <AreaHeader2 title="热门主播" />
      <div className="anchors">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <img src={item.picUrl} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="desc">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotAnchorWrapper>
  )
}

export default HotAnchor
