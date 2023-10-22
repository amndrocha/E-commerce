import { createSlice } from "@reduxjs/toolkit"

export const filterSlice = createSlice({
        name: 'filter',
        initialState: {
            showCategoria: '',
            text: '',
            sortBy: 'price',
            minPrice: 0,
            maxPrice: 99999999,
            view: 'product-card-list',
        },
        reducers: {
            setShowCategoria: (state,action) => {
                state.showCategoria = action.payload || '';
            },
            setFilterText: (state, action) => {
                state.text = action.payload || '';
            },
            setSortBy: (state, action) =>  {
                state.sortBy = action.payload;
            },
            setPriceFilter: (state, action) => {
                switch (action.payload) {
                    case '1':
                        state.minPrice = 0;
                        state.maxPrice = 99999999;
                        break;
                    case '2':
                        state.minPrice = 0;
                        state.maxPrice = 5000;
                        break;
                    case '3':
                        state.minPrice = 5000;
                        state.maxPrice = 25000;
                        break;
                    case '4':
                        state.minPrice = 25000;
                        state.maxPrice = 75000;
                        break;
                    case '5':
                        state.minPrice = 75000;
                        state.maxPrice = 99999999;
                        break;
                  }
            },
            setView: (state, action) => {
                state.view = action.payload;
            },
        }

    }
);

export const {setShowCategoria, setFilterText, setSortBy, setPriceFilter, setView} =  filterSlice.actions;
export default filterSlice.reducer
