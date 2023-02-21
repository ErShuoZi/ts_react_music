import React from "react"
import type { FC, ReactNode } from "react"
import { Link, NavLink } from "react-router-dom"

import { NavBarWrapper } from "./style"
import { discoverMenu } from "@/assets/data/local-data"
interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavBarWrapper>
      {discoverMenu.map((item, index) => {
        return (
          <div className="item" key={index}>
            <NavLink
              to={item.link}
              className={({ isActive }) => {
                return isActive ? "active" : undefined
              }}
            >
              {item.title}
            </NavLink>
          </div>
        )
      })}
    </NavBarWrapper>
  )
}

export default NavBar
