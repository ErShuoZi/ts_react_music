import React from "react"
import type { FC, ReactNode } from "react"
import { TopRankingItemWrapper } from "./style"
import { getImageUrl } from "@/utils/format"
import { useAppDispatch } from "@/store"
import { fetchCurrentSongAction } from "@/views/player/app-player-bar/store/player"
interface IProps {
  children?: ReactNode
  info: any
}

const TopRankingItem: FC<IProps> = (props) => {
  const { info } = props
  const { tracks = [] } = info

  const dispatch = useAppDispatch()

  function handlePlayClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }

  return (
    <TopRankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageUrl(info.coverImgUrl, 80)} alt="" />
          <a href="/" className="cover sprite_covor"></a>
        </div>
        <div className="info">
          <div className="name">{info.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="list-content">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button
                    className="sprite_02 btn play"
                    onClick={() => handlePlayClick(item.id)}
                  ></button>
                  <button className="sprite_icon2 btn add"></button>
                  <button className="sprite_02 btn favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <a className="footer">查看全部 &gt;</a>
    </TopRankingItemWrapper>
  )
}

export default TopRankingItem
