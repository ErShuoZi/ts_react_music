import React, { memo, useEffect, useState } from "react"
import type { FC, ReactNode } from "react"
import { useAppDispatch } from "@/store"
import { fetchRankingDataAction, fetchRecommandDataAction } from "./store/recommend"
import Banners from "./c-cpns/top-banners"
import { RecommandLeft, RecommandRight, RecommandSection, RecommandWrapper } from "./style"
import HotRecommend from "./c-cpns/hot-recommend"
import NewAlbum from "./c-cpns/new-album"
import TopRanking from "./c-cpns/top-ranking"
import UserLogin from "./c-cpns/user-login"
import SettleArtist from "./c-cpns/settle-artist"
import HotAnchor from "./c-cpns/hot-anchor"
interface IProps {
  children?: ReactNode
}

const Recommand: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRecommandDataAction())
    dispatch(fetchRankingDataAction())
  }, [])

  return (
    <RecommandWrapper>
      <Banners />
      <RecommandSection className="wrap-v2">
        <RecommandLeft>
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </RecommandLeft>
        <RecommandRight>
          <div className="right">
            <UserLogin />
            <SettleArtist />
            <HotAnchor />
          </div>
        </RecommandRight>
      </RecommandSection>
    </RecommandWrapper>
  )
}

export default memo(Recommand)
