import { configureStore } from "@reduxjs/toolkit"
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from "react-redux"
import CounterReducer from "./modules/counter"
import recommendSliceReducer from "@/views/discover/c-views/recommend/store/recommend"
import PlayerSlicReducer from "@/views/player/app-player-bar/store/player"
const store = configureStore({
  reducer: {
    counter: CounterReducer,
    recommend: recommendSliceReducer,
    player: PlayerSlicReducer
  }
})

type GetStateType = typeof store.getState
export type FnReturnType = ReturnType<GetStateType>
type AppDispatch = typeof store.dispatch

export const useAppSeletor: TypedUseSelectorHook<FnReturnType> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppShallowEqual = shallowEqual
export default store
