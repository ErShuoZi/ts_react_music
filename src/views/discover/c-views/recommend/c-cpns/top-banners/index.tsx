import React, { memo, useRef, useState, useEffect } from "react"
import type { FC, ReactNode, ElementRef } from "react"
import { Carousel } from "antd"
import classnames from "classnames"
import { SwitchTransition, CSSTransition } from "react-transition-group"

import { BannersControl, BannersLeft, BannersRight, BannersWrapper } from "./style"
import { useAppSeletor, useAppShallowEqual } from "@/store"
interface IProps {
  children?: ReactNode
}

const Banners: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dotIndex, setDotIndex] = useState(0)
  const [bgImage, setBgImage] = useState<string>()
  const indexRef = useRef(currentIndex)
  const timerRef = useRef<ReturnType<typeof setInterval>>()

  const { banners } = useAppSeletor(
    (state) => ({
      banners: state.recommend.banners
    }),
    useAppShallowEqual
  )

  useEffect(() => {
    if (!banners.length) return
    setBgImage(banners[currentIndex].imageUrl + "?imageView&blur=40x20")
  }, [banners])

  /** 事件监听的方法 */
  function handleChangeClick(isNext: boolean) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex > banners.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = banners.length - 1
    setCurrentIndex(newIndex)
    indexRef.current = newIndex
    setDotIndex(-1)
  }

  const handleAfterChange = () => {
    setBgImage(banners[indexRef.current].imageUrl + "?imageView&blur=40x20")
    setDotIndex(indexRef.current)
  }

  // get background image
  let imageUrl = ""
  if (banners.length) {
    imageUrl = banners[currentIndex].imageUrl
  }

  /** 定时器 */
  if (timerRef.current) clearInterval(timerRef.current)
  timerRef.current = setInterval(() => {
    handleChangeClick(true)
  }, 5000)

  return (
    <BannersWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannersLeft>
          <div className="banner-list">
            <SwitchTransition mode="out-in">
              <CSSTransition
                classNames="fade"
                timeout={1000}
                key={currentIndex}
                onExited={() => handleAfterChange()}
              >
                <div className="banner-item">
                  <img className="image" src={imageUrl} />
                </div>
              </CSSTransition>
            </SwitchTransition>
            {/* <Carousel
              ref={bannerRef}
              dots={false}
              autoplay
              autoplaySpeed={10000}
              beforeChange={handleBeforeChange}
              afterChange={handleAfterChange}
              effect="fade"
            >
              {banners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} />
                  </div>
                )
              })}
            </Carousel> */}
            <ul className="dots">
              {banners.map((item, index) => {
                return (
                  <li key={item.imageUrl}>
                    <span className={classnames("item", { active: index === dotIndex })}></span>
                  </li>
                )
              })}
            </ul>
          </div>
        </BannersLeft>
        <BannersRight>
          <span className="down-list">PC 安卓 iPhone WP iPad Mac 六大客户端</span>
        </BannersRight>

        <BannersControl>
          <button className="btn left" onClick={() => handleChangeClick(false)}></button>
          <button className="btn right" onClick={() => handleChangeClick(true)}></button>
        </BannersControl>
      </div>
    </BannersWrapper>
  )
}

export default memo(Banners)
