import styled from "styled-components"

type BannersWrapper = {
  bgImage?: string
}

export const BannersWrapper = styled.div<BannersWrapper>`
  background: url(${(props) => props.bgImage}) center center / 6000px;

  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`

export const BannersLeft = styled.div`
  position: relative;
  width: 730px;
  .banner-list {
  }
  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 1s linear;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0.1;
    transition: opacity 1s linear;
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    > li {
      margin: 0 2px;
      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require("@/assets/img/banner_sprite.png")}) 3px -343px;
        cursor: pointer;
        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`
export const BannersRight = styled.a.attrs({
  href: "http://music.163.com/#/download",
  target: "_blank"
})`
  color: #8d8d8d;
  position: relative;
  width: 250px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .down-list {
    position: relative;
    top: -5px;
    text-align: center;
    font-size: 12px;
  }
  :hover {
    color: #8d8d8d;
  }
`

export const BannersControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 63px;

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
