import {
    UPDATE_ADVERTS, 
    UPDATE_PAGE, 
    UPDATE_FIELDTYPE, 
    UPDATE_ORDERTYPE, 
    UPDATE_ITEMLIMITS, 
    UPDATE_PAGINATION} from './dataTableActionsTypes';

export const initialState = {
    adverts: [],
    pagination: 0,
    page: 1, 
    orderType: 'asc',
    fieldType: 'city',
    itemLimits: 10,
}

export const dataTableReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_ADVERTS:
            return {...state, adverts: action.value}
        case UPDATE_PAGE:
            return {...state, page: action.value}
        case UPDATE_PAGINATION:
            return {...state, pagination: action.value}
        case UPDATE_ORDERTYPE:
            return {...state, orderType: action.value}
        case UPDATE_FIELDTYPE:
            return {...state, fieldType: action.value}
        case UPDATE_ITEMLIMITS:
            return {...state, itemLimits: action.value}
        default:
            return state;
    }
}