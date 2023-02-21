import React from "react"
import type { FC, ReactNode } from "react"
import { SettleArtistWrapper } from "./style"
import AreaHeader2 from "@/components/area-header-rmd2"
import { useAppSeletor } from "@/store"
import { getImageUrl } from "@/utils/format"
interface IProps {
  children?: ReactNode
}

const SettleArtist: FC<IProps> = () => {
  const { ArtistList } = useAppSeletor((state) => ({
    ArtistList: state.recommend.artistList
  }))
  return (
    <SettleArtistWrapper>
      <AreaHeader2 title="入驻歌手" moreText="查看全部 &gt;" moreLink="/discover/artist" />
      <div className="artist-list">
        {ArtistList.map((item, index) => {
          return (
            <a href="/discover/artist" className="item" key={item.id}>
              <img src={getImageUrl(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="singer">{item.name}</div>
                <div className="desc">{item.alias.join(" ")}</div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="apply-for">
        <a href="/">申请成为网易音乐人</a>
      </div>
    </SettleArtistWrapper>
  )
}

export default SettleArtist
