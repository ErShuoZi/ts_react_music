import { parseLyric } from "@/utils/parse-lyric"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getSongDetail, getSongLyric } from "../service/player"
import { ILyric } from "./types"

interface IPlayerState {
  currentSong: any
  lyric: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
}
const initialState: IPlayerState = {
  currentSong: {},
  lyric: [],
  lyricIndex: -1,
  playSongList: [],
  playSongIndex: -1
}

export const fetchCurrentSongAction = createAsyncThunk(
  "currentSong",
  (id: number, { dispatch }) => {
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      dispatch(changeCurrentSong(res))
    })
    getSongLyric(id).then((res) => {
      const lyricString = res.lrc.lyric
      const lyric = parseLyric(lyricString)
      console.log(lyric)
      dispatch(changeLyricAction(lyric))
    })
  }
)

const playSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeCurrentSong(state, { payload }) {
      state.currentSong = payload.songs[0]
    },
    changeLyricAction(state, { payload }) {
      state.lyric = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})

export const { changeCurrentSong, changeLyricAction, changeLyricIndexAction } = playSlice.actions
export default playSlice.reducer
