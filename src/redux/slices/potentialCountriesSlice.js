import {createSlice} from "@reduxjs/toolkit";

const potentialCountriesSlice = createSlice({
    name: 'potentialCountries',
    initialState: {
        value: [
            {
                name: {
                    common: 'America'
                },
            },
        ],
    },
    reducers: {
        setPotentialCountries: (state, action) => {
             state.value = action.payload;
        },
        deletePotentialContries: (state) => {
             state.value = null;
        },
    },
});

export const {setPotentialCountries, deletePotentialContries } = potentialCountriesSlice.actions;

export const selectPotentials = (state) => state.potentialCountries.value;

export default potentialCountriesSlice.reducer;