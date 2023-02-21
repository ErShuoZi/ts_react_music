import React, { Suspense, useEffect } from "react"
import { useRoutes } from "react-router-dom"

import routes from "./router"

import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
import AppPlayerBar from "./views/player/app-player-bar"
import { fetchCurrentSongAction } from "./views/player/app-player-bar/store/player"
import { useAppDispatch } from "./store"
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(1922888354))
  })

  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="main"> {useRoutes(routes)}</div>
      </Suspense>

      <AppPlayerBar />
      <AppFooter />
    </div>
  )
}

export default App
