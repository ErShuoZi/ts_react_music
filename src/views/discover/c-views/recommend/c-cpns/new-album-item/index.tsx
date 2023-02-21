import React from "react"
import type { FC, ReactNode } from "react"
import { AlbumItemWrapper } from "./style"
import { getImageUrl } from "@/utils/format"
interface IProps {
  children?: ReactNode
  albumData: any
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { albumData } = props
  return (
    <AlbumItemWrapper>
      <div className="top">
        <img src={getImageUrl(albumData.picUrl, 100)} alt="" />
        <a href="" className="cover sprite_covor"></a>
      </div>
      <div className="bottom">
        <div className="name">{albumData.name}</div>
        <div className="artist">{albumData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
}

export default NewAlbumItem
