import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { HotRecommandWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-rmd"
import { useAppSeletor, useAppShallowEqual } from "@/store"

import SongMenuItem from "@/components/song-menu-item"
interface IProps {
  children?: ReactNode
}

const HotRecommand: FC<IProps> = () => {
  const { HotRecommand } = useAppSeletor(
    (state) => ({
      HotRecommand: state.recommend.HotRecommand
    }),
    useAppShallowEqual
  )

  return (
    <HotRecommandWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moderLink="/discover/songs"
      />
      <div className="hot-recommend-list">
        {HotRecommand.map((item, index) => {
          // <div key={item.id}>{item.name}</div>
          return <SongMenuItem itemData={item} key={item.id} />
        })}
      </div>
    </HotRecommandWrapper>
  )
}

export default memo(HotRecommand)
