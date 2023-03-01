import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import React, { useState } from 'react'
export interface Item {
    img: string;
    desc: string;
    rate: number;
    title: string;
    handleId?: React.MouseEventHandler<HTMLDivElement>
    id: number
    isAdd: boolean
}

export interface FavoriteState {
    items: Item[]

}

const initialState: FavoriteState = {
    items: [],

}

export const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite(state, action: PayloadAction<Item>) {
            state.items.push(action.payload);
            localStorage.setItem('dataFav', JSON.stringify(state.items))
        },
    }
})

export const { addToFavorite } = FavoriteSlice.actions














//ketika favorite btn di click jalan kan fanction hanldefav
//lalu jalankan function yang ada di faforiteslice 