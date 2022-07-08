import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const OrderingItems = ({handleChangeOrder, handleChangeField, handleChangeItemPage, defaultValues}) => {

    const { orderType, fieldType, itemLimits} = defaultValues;

    return (
        <div className="order-content">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Order</InputLabel>
            <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Order"
            value={orderType}
            onChange={handleChangeOrder}
            >
            <MenuItem value={'desc'}>Desc</MenuItem>
            <MenuItem value={'asc'}>Asc</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Field</InputLabel>
            <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Order"
            value={fieldType}
            onChange={handleChangeField}
            >
            <MenuItem value={'city'}>City</MenuItem>
            <MenuItem value={'address'}>Address</MenuItem>
            </Select>
        </FormControl>
        <Box sx={{ width: 300 }}>
            <InputLabel id="demo-select-small">Items/Page</InputLabel>
            <Slider
                aria-label="ItemsPerPage"
                defaultValue={10}
                value={itemLimits}
                onChange={handleChangeItemPage}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={100}
            />
        </Box>
    </div>
    )
}
