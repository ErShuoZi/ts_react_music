import React from "react"
import { Navigate } from "react-router-dom"
import type { RouteObject } from "react-router-dom"
// import Discover from "@/views/discover/index"
// import Mine from "@/views/mine/index"
// import Download from "@/views/download/index"
// import Focus from "@/views/focus/index"

// 分包
const Discover = React.lazy(() => import("@/views/discover/index"))
const Mine = React.lazy(() => import("@/views/mine/index"))
const Download = React.lazy(() => import("@/views/download/index"))
const Focus = React.lazy(() => import("@/views/focus/index"))

const Recommand = React.lazy(() => import("@/views/discover/c-views/recommend/index"))
const Songs = React.lazy(() => import("@/views/discover/c-views/songs/index"))
const Ranking = React.lazy(() => import("@/views/discover/c-views/ranking/index"))
const Djradio = React.lazy(() => import("@/views/discover/c-views/djradio/index"))
const Artist = React.lazy(() => import("@/views/discover/c-views/artist/index"))
const Album = React.lazy(() => import("@/views/discover/c-views/album/index"))
const routes: RouteObject[] = [
  // {
  //   path: "/",
  //   element: "组件对象"
  // }

  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: "/discover/recommend",
        element: <Recommand />
      },
      {
        path: "/discover/songs",
        element: <Songs />
      },
      {
        path: "/discover/ranking",
        element: <Ranking />
      },
      {
        path: "/discover/djradio",
        element: <Djradio />
      },
      {
        path: "/discover/artist",
        element: <Artist />
      },
      {
        path: "/discover/album",
        element: <Album />
      }
    ]
  },
  {
    path: "/mine",
    element: <Mine />
  },
  {
    path: "/download",
    element: <Download />
  },
  {
    path: "/focus",
    element: <Focus />
  }
]

export default routes
