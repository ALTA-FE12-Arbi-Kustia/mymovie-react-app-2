import { configureStore } from "@reduxjs/toolkit"

import {FavoriteSlice} from './src/Feature/FavoriteSlice'

export default configureStore({
    reducer: {
        favorite: FavoriteSlice.reducer
    }
})