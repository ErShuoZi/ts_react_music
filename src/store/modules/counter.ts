import { createSlice } from "@reduxjs/toolkit"

interface IinitialState {
  count: number
  message: string
  address: string
}
const initialState: IinitialState = {
  count: 0,
  message: "Hello Redux",
  address: "广州市"
}
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
