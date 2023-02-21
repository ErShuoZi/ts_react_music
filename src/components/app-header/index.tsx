import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import type { FC, ReactNode } from "react"
import { Input } from "antd"
import { SearchOutlined } from "@ant-design/icons"

import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style"

import HeaderTitles from "@/assets/data/header_titles.json"
import Recommend from "@/views/discover/c-views/recommend"
interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: any, index: number) {
    if (item.type === "path") {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? "active" : undefined
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }
  return (
    <div>
      <HeaderWrapper>
        <div className="content">
          <HeaderLeft>
            <a href="/" className="logo sprite_01">
              网易云音乐
            </a>
            <div className="title-list">
              {HeaderTitles.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    {showItem(item, index)}
                  </div>
                )
              })}
            </div>
          </HeaderLeft>

          <HeaderRight>
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />

            <div className="center">创作者中心</div>
            <div className="login">登录</div>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  )
}

export default AppHeader
