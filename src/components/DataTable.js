import React from 'react'
import launchLink from '../assets/images/launch_link.svg';
import {v4 as uuid } from 'uuid';
import '../assets/css/DataTable.css';

export const DataTable = ({ tableInfo }) => {
    const dataKeys =  tableInfo.length > 0 ?  Object.keys(tableInfo[0]) : null;

    return (
        <>
            {tableInfo.length > 0 ?
                <table className="data-table">
                    <thead>
                        <tr>
                            {
                                dataKeys.map(item => {
                                    return (<th key={item}>{item}</th>);
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                            {
                                tableInfo.map(item => {
                                    const values = Object.values(item);
                                    return (<tr key={uuid()}>
                                        {values.map ((value,index) => {
                                            if(index === 0){
                                                return <td key={uuid()}><img className="img-dataTable" src={value} alt="house-iamge" onError={(event) => event.target.src = 'https://www.blackwallst.directory/images/NoImageAvailable.png'}/></td>
                                            }
                                            else if( index === 3){
                                                return <td key={uuid()}><a href={value}><img src={launchLink} alt='icon-link' /></a></td>
                                            }
                                            else {
                                                return <td key={uuid()}>{value}</td>
                                            }
                                        })}
                                    </tr>)
                                })
                            }
                    </tbody>
                </table>
                : 
                <h3>No results in DB</h3>
            }
        </>
    )
}
