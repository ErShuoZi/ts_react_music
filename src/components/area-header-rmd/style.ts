import styled from "styled-components"

export const AreaHeaderV1Wrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const AreaHeaderV1Left = styled.div`
  display: flex;
  align-items: center;
  .title {
    font-size: 20px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    margin-right: 20px;
  }
  .keywords {
    display: flex;
    align-items: center;
    .item {
      position: relative;
      top: 2px;
      .text {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .divider {
        margin: 0 15px;
      }
      &:last-child {
        .divider {
          display: none;
        }
      }
    }
  }
`
export const AreaHeaderV1Right = styled.div`
  display: flex;
  align-items: center;
  .more {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    background-position: 0 -240px;
  }
`
