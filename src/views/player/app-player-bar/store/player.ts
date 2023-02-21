import { FnReturnType } from "@/store"
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
  playMode: number
}
const initialState: IPlayerState = {
  currentSong: {},
  lyric: [],
  lyricIndex: -1,
  playSongList: [],
  playSongIndex: -1,
  playMode: 0
}

export const fetchCurrentSongAction = createAsyncThunk<void, number, { state: FnReturnType }>(
  "currentSong",
  (id: number, { dispatch, getState }) => {
    // 先从列表中尝试播放
    const playSongList = getState().player.playSongList

    const findIndex = playSongList.findIndex((item) => item.id === id)
    if (findIndex === -1) {
      getSongDetail(id).then((res) => {
        if (!res.songs.length) return
        const song = res
        const newPlaySongList = [...playSongList]
        newPlaySongList.push(song)
        dispatch(changeCurrentSong(song))
        dispatch(changePlaySongListAction(newPlaySongList))
        dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
      })
    } else {
      const song = playSongList[findIndex]
      dispatch(changeCurrentSong(song))
      dispatch(changePlaySongIndexAction(findIndex))
    }
    getSongLyric(id).then((res) => {
      const lyricString = res.lrc.lyric
      const lyric = parseLyric(lyricString)
      dispatch(changeLyricAction(lyric))
    })
  }
)

export const changeMusicAction = createAsyncThunk<void, boolean, { state: FnReturnType }>(
  "changeMusic",
  (isNext, { dispatch, getState }) => {
    const player = getState().player
    const playMode = player.playMode
    const playSongList = player.playSongList
    const playSongIndex = player.playSongIndex

    let newIndex = -1
    if (playMode === 1) {
      newIndex = Math.floor(Math.random() * playSongList.length)
    } else {
      newIndex = isNext ? playSongIndex + 1 : playSongIndex - 1

      if (newIndex > playSongList.length - 1) newIndex = 0
      if (newIndex < 0) newIndex = playSongList.length - 1
    }

    const song = playSongList[newIndex]
    dispatch(changeCurrentSong(song))
    dispatch(changePlaySongIndexAction(newIndex))

    getSongLyric(song.id).then((res) => {
      const lyricString = res.lrc.lyric
      const lyric = parseLyric(lyricString)
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
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSong,
  changeLyricAction,
  changeLyricIndexAction,
  changePlaySongIndexAction,
  changePlaySongListAction,
  changePlayModeAction
} = playSlice.actions
export default playSlice.reducer
