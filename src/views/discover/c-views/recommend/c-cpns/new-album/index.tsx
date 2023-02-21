import React, { useRef } from "react"
import type { FC, ReactNode, ElementRef } from "react"
import { Carousel } from "antd"

import { AlbumWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-rmd"
import { useAppSeletor } from "@/store"
import NewAlbumItem from "../new-album-item"
interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const CarouselRef = useRef<ElementRef<typeof Carousel>>(null)
  function handlePrevClick() {
    CarouselRef.current?.prev()
  }
  function handleNextClick() {
    CarouselRef.current?.next()
  }
  const { newAlbum } = useAppSeletor((state) => ({
    newAlbum: state.recommend.newAlbum
  }))
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moderLink="/discover/album" />
      <div className="content">
        <button className="arrow sprite_02 arrow-left" onClick={handlePrevClick}></button>
        <div className="banner">
          <Carousel ref={CarouselRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbum.slice(item * 5, (item + 1) * 5).map((album, indey) => {
                      return <NewAlbumItem key={album.id} albumData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button className="arrow sprite_02 arrow-right" onClick={handleNextClick}></button>
      </div>
    </AlbumWrapper>
  )
}

export default NewAlbum
