///После введения slice этот файл можно удалять.

import {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted
} from "../actions";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}
// создание reducer с помощью builder, @reduxjs/toolkit
// const heroes = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = 'loading';
//         })
//         .addCase(heroesFetched, (state, action) => {
//             state.heroesLoadingStatus = 'idle';
//             state.heroes = action.payload
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'error'
//         })
//         .addCase(heroCreated, (state, action) => {
//             state.heroes.push(action.payload);
//         })
//         .addCase(heroDeleted, (state, action) => {
//             state.heroes = state.heroes.filter(item => item.id !== action.payload)
//         })
//         .addDefaultCase(()=>{});
// })

// еще один вариант из  @reduxjs/toolkit
const heroes = createReducer(initialState, {
        [heroesFetching]: state => {
            state.heroesLoadingStatus = 'loading'
        },
        [heroesFetched]: (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload
        },
        [heroesFetchingError]: state => {
            state.heroesLoadingStatus = 'error'
        },
        [heroCreated]: (state, action) => {
            state.heroes.push(action.payload);
        },
        [heroDeleted]: (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload)
        }
    },
    [],
    state => state
)

// создание reducer ручками.
// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         // Самая сложная часть - это показывать новые элементы по фильтрам
//         // при создании или удалении
//         case 'HERO_CREATED':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload]
//             }
//         case 'HERO_DELETED':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(item => item.id !== action.payload)
//             }
//         default: return state
//     }
// }

export default heroes;