import React, { useEffect, useReducer } from 'react';
import { DataTable } from './components/DataTable';
import { getAdverts } from './dataService/houseAdverts/houseAdverts';
import Pagination from '@mui/material/Pagination';
import { dataTableReducer, initialState } from './useReducer/DataTable/dataTableReducer';
import {
  UPDATE_ADVERTS, 
  UPDATE_PAGE, 
  UPDATE_FIELDTYPE, 
  UPDATE_ORDERTYPE, 
  UPDATE_ITEMLIMITS, 
  UPDATE_PAGINATION } from './useReducer/DataTable/dataTableActionsTypes';

import './assets/css/App.css';
import Layout from './components/commons/layout/Layout';
import { OrderingItems } from './components/OrderingItems';

function App() {

  const [state, dispatch] = useReducer(dataTableReducer, initialState)
  

  useEffect(() =>{
    const fetchAdverts = async () => { 
      try {
        const {data} = await getAdverts(state.itemLimits, state.page , state.fieldType, state.orderType);
        dispatch({type: UPDATE_ADVERTS, value: data.result})
        dispatch({type: UPDATE_PAGINATION, value: Math.floor((data.documents/state.itemLimits))})
      } catch (error) {
        console.log(error);
      }
    }
    fetchAdverts();
  },[state.page, state.orderType, state.fieldType, state.itemLimits]);

  const handleChange = async (event, value) => {
    dispatch({type:UPDATE_PAGE, value});
  }
  
  const handleChangeOrder = (event) => {
    event.target.value === 'desc' ? dispatch({type:UPDATE_ORDERTYPE, value: 'desc'}) : dispatch({type:UPDATE_ORDERTYPE, value: 'asc'});
  };

  const handleChangeField = (event) => {
    event.target.value === 'city' ? dispatch({type:UPDATE_FIELDTYPE, value:'city'}) : dispatch({type:UPDATE_FIELDTYPE, value:'address'})
  }

  const handleChangeItemPage = (event) => {
    dispatch({type:UPDATE_ITEMLIMITS, value:event.target.value});
  }

  const advertsToTable = state.adverts.map( advert => {
    const advertInfo = {
        Image: advert.image,
        City: advert.city,
        Address: advert.address,
        Link: advert.link 
    }
    return advertInfo;
  })

  return (
    <Layout>
      <OrderingItems 
        handleChangeOrder={handleChangeOrder} 
        handleChangeField={handleChangeField} 
        handleChangeItemPage={handleChangeItemPage} 
        defaultValues={{
          orderType: state.orderType,
          fieldType: state.fieldType,
          itemLimits: state.itemLimits}}
      />
      <DataTable tableInfo={advertsToTable}/>
      <Pagination className="pagination" count={state.pagination} variant="outlined" shape="rounded" color="primary" onChange={handleChange} sx={{justifyContent:'center'}}/>
    </Layout>
  );
}

export default App;
