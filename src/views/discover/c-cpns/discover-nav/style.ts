import styled from "styled-components"

export const NavBarWrapper = styled.div`
  ${(props) => props.theme.mixin.wrapv1}
  display: flex;
  padding-left: 180px;
  position: relative;
  top: -4px;
  .item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 12px;
      margin: 7px 17px 0;
      color: #fff;
      font-size: 12px;

      &:hover,
      &.active {
        text-decoration: none;
        background-color: #9b0909;
        border-radius: 20px;
      }
    }
  }
`
