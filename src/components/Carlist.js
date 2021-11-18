
import React, {useEffect } from "react";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-material.css'

export default function Carlist() {

const [cars, setCars] = React.useState([]);

useEffect(() => {
    fetch('https://carstockrest.herokuapp.com/cars')
    .then(res => res.json())
    .then(data => setCars(data._embedded.cars))
    .catch(err => console.error(err))

},[])

const columns = [
    {field:'brand', sortable: true, filter: true},
    {field:'model', sortable: true, filter: true},
    {field:'color', sortable: true, filter: true},
    {field:'year', sortable: true, filter: true},
    {field:'fuel', sortable: true, filter: true},
    {field:'price', sortable: true, filter: true}

]

return(
    <div className="ag-theme-material" style={{height: 400, width: 600}}>
        <AgGridReact 
        
        rowData={cars}
        columnDefs={columns}
        >
        </AgGridReact>
    </div>
)

}