import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  getArtistList,
  getBanners,
  getHotRecommand,
  getNewAlbum,
  getPlayListDetail
} from "../service/recommend"
import { BannersType, IHotRecommandType } from "./types"

export const fetchRecommandDataAction = createAsyncThunk("fetchData", (_, { dispatch }) => {
  getBanners().then((res) => {
    dispatch(changeBannersAction(res.banners))
  }),
    getHotRecommand(8).then((res) => {
      dispatch(changeHotRecommandAction(res.result))
    })
  getNewAlbum().then((res) => {
    dispatch(changeNewAlbumAction(res.albums))
  }),
    getArtistList().then((res) => {
      dispatch(changeArtistListAction(res.artists))
    })
})

const RankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk("rankingData", (_, { dispatch }) => {
  for (const id of RankingIds) {
    getPlayListDetail(id).then((res) => {
      switch (id) {
        case 19723756:
          dispatch(changeUpRankingAction(res.playlist))
          break

        case 3779629:
          dispatch(changeNewRankingAction(res.playlist))
          break

        case 2884035:
          dispatch(changeOriginRankingAction(res.playlist))
          break

        default:
          break
      }
    })
  }
})

interface IRecommandType {
  banners: BannersType[]
  HotRecommand: IHotRecommandType[]
  newAlbum: any[]
  upRanking: any
  originRanking: any
  newRanking: any
  artistList: any[]
}
const initialState: IRecommandType = {
  banners: [],
  HotRecommand: [],
  newAlbum: [],
  upRanking: {},
  originRanking: {},
  newRanking: {},
  artistList: []
}
const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommandAction(state, { payload }) {
      state.HotRecommand = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    },
    changeUpRankingAction(state, { payload }) {
      state.upRanking = payload
    },
    changeOriginRankingAction(state, { payload }) {
      state.originRanking = payload
    },
    changeNewRankingAction(state, { payload }) {
      state.newRanking = payload
    },
    changeArtistListAction(state, { payload }) {
      state.artistList = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannersDataAction.pending, (state, action) => {
  //       console.log("pending")
  //     })
  //     .addCase(fetchBannersDataAction.fulfilled, (state, { payload }) => {
  //       console.log("fulfilled")
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannersDataAction.rejected, (state, action) => {
  //       console.log("rejected")
  //     })
  // }
})

export const {
  changeBannersAction,
  changeHotRecommandAction,
  changeNewAlbumAction,
  changeUpRankingAction,
  changeNewRankingAction,
  changeOriginRankingAction,
  changeArtistListAction
} = recommendSlice.actions

export default recommendSlice.reducer
