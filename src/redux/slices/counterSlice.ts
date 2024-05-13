import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokeList = createAsyncThunk(
  "counter/fetchPokeList",
  async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    console.log("fetch from createAsyncThunk");
    const response = await res.json();
    return response.results;
  }
);
export type CounterSliceInitialState = {
  value: number;
  pokelist: {
    name: string;
    url: string;
  }[];
};
const counterSlice = createSlice({
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  initialState: {
    value: 0,
    pokelist: [],
  } as CounterSliceInitialState,
  name: "counter",
  selectors: {
    selectValue: (state) => state.value,
    selectPokeList: (state) => state.pokelist,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokeList.fulfilled, (state, action) => {
      state.pokelist = action.payload;
    });
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
export const { selectValue, selectPokeList } = counterSlice.selectors;
console.log(",counterSlice = ", counterSlice);
