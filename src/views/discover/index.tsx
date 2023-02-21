import React, { Suspense } from "react"
import type { FC, ReactNode } from "react"
import { Link, Outlet } from "react-router-dom"
import NavBar from "./c-cpns/discover-nav"
import { DiscoverWrapper } from "./style"
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <DiscoverWrapper>
      <div className="nav-bar">
        <NavBar />
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
}

export default Discover
