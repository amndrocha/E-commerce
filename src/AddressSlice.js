import { createSlice } from "@reduxjs/toolkit"
const initialState = [
    {
        id: "-NZ707--8BxAGaASgmb_",
        bairro: "Jardim São Cristóvão",
        cidade: "São Luís",
        estado: "MA",
        numero: "611",
        rua: "Travessa 14 do Engenho"
    },
    {
        id: "-NZ707-1bpTzbY3FJfbx",
        bairro: "Lírio do Vale",
        cidade: "Manaus",
        estado: "AM",
        numero: "131",
        rua: "Rua Princesa Isabel"
    },
    {
        id: "-NalhfzUD_DYKKq_3qpy",
        bairro: "Barreto",
        cidade: "Niterói",
        estado: "RJ",
        numero: "134",
        rua: "Rua Prefeito Vila Nova Machado"
    }
]
export const addressSlice = createSlice({
    name: 'address',
    initialState: {
        list: initialState,
        id: 0,
    },
    reducers: {
        changeAddress: (state, action) => {
            if (action.payload.id !== "") {
                state.list = state.list.map((address) => {
                    if (address.id === action.payload.id) {
                        return({
                            id: action.payload.id,                            
                            rua: action.payload.rua,
                            numero: action.payload.numero,
                            bairro: action.payload.bairro,
                            cidade: action.payload.cidade,
                            estado: action.payload.estado
                        });
                    } else {
                        return(address);
                    }
                });
            } else {
                const newAddress = {
                    id: state.id,
                    rua: action.payload.rua,
                    numero: action.payload.numero,
                    bairro: action.payload.bairro,
                    cidade: action.payload.cidade,
                    estado: action.payload.estado,
                };
                state.list = [
                    ...state.list,
                    newAddress,
                ];
                state.id++;
            }            
        },
        removeAddress: (state, action) => {
            state.list = state.list.filter((address) => address.id !== action.payload);
        },        
    }

}
);

export  const {changeAddress, removeAddress } = addressSlice.actions;
export default addressSlice.reducer;