import React from "react"
import type { FC, ReactNode } from "react"
import { TopRankingWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-rmd"
import { useAppSeletor, useAppShallowEqual } from "@/store"
import TopRankingItem from "../top-ranking-item"
interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { UpRanking, NewRanking, OriginRanking } = useAppSeletor(
    (state) => ({
      UpRanking: state.recommend.upRanking,
      NewRanking: state.recommend.newRanking,
      OriginRanking: state.recommend.originRanking
    }),
    useAppShallowEqual
  )

  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title="榜单" moderLink="https://music.163.com/#/discover/toplist" />
      <div className="content">
        {/* 飙升榜 */}

        <TopRankingItem info={UpRanking} />

        {/* 新歌榜 */}

        <TopRankingItem info={NewRanking} />

        {/* 原创榜 */}

        <TopRankingItem info={OriginRanking} />
      </div>
    </TopRankingWrapper>
  )
}

export default TopRanking
