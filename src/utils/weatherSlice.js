import { createSlice } from "@reduxjs/toolkit";


const weatherSlice=createSlice({
    name:"weatherSlice",
    initialState:{
        coordinates:{lat:26.85,lon:80.9167},
        dailyweather:[],
        selected:0
    },
    reducers:{
        addCoordinates:(state,action)=>{
            state.coordinates=action.payload
            // state.lon=action.payload.lon
        },
        addDailyWeater:(state,action)=>{
            state.dailyweather=action.payload
        },
        changeSelected:(state,action)=>{
            state.selected=action.payload
        }
    }
})

export default weatherSlice.reducer
export const {addCoordinates,addDailyWeater,changeSelected}=weatherSlice.actions