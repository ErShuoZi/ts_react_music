import React from "react"
import type { FC, ReactNode } from "react"
import { SongMenuItemWrapper } from "./style"
import { IHotRecommandType } from "@/views/discover/c-views/recommend/store/types"
import { formatCount, getImageUrl } from "@/utils/format"

interface IProps {
  children?: ReactNode
  itemData: IHotRecommandType
}

const SongMenuItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <SongMenuItemWrapper>
      <div className="covertop">
        <img src={getImageUrl(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </SongMenuItemWrapper>
  )
}

export default SongMenuItem
