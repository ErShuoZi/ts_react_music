import React, { Suspense } from "react"
import { useRoutes, Link } from "react-router-dom"

import routes from "./router"
import { useAppSeletor, useAppDispatch, useAppShallowEqual } from "./store"
import { changeMessageAction } from "./store/modules/counter"

import Demo02 from "@/views/demo/demo02"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
// import { FnReturnType } from "@/store/index"

// import store from "@/store/index"

// type GetStateType = typeof store.getState
// type FnReturnType = ReturnType<GetStateType>

// interface IRootState {
//   counter: { count: number; message: string }
// }
function App() {
  // const { count, message } = useSelector((state: FnReturnType) => {
  //   return {
  //     count: state.counter.count,
  //     message: state.counter.message,
  //     address: state.counter.address
  //   }
  // }, shallowEqual)

  const { count, message } = useAppSeletor((state) => {
    return {
      count: state.counter.count,
      message: state.counter.message,
      address: state.counter.address
    }
  }, useAppShallowEqual)

  const dispatch = useAppDispatch()
  function handleChangeMessage() {
    dispatch(changeMessageAction("haha"))
  }
  return (
    <div className="app">
      {/* 第二种路由配置 */}
      {/* {useRoutes(routes)} */}

      {/* 路由第一种配置方式 */}
      {/* <Route path="/discover" element={组件} />
      <Route path="/discover" element={组件} />
      <Route path="/discover" element={组件} />
      <Route path="/discover" element={组件} /> */}

      <AppHeader />
      <Suspense fallback="loading">
        <div className="main"> {useRoutes(routes)}</div>
      </Suspense>

      <AppFooter />

      <Demo02 name="123" />
    </div>
  )
}

export default App
