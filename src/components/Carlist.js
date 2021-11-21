
import React, {useEffect } from "react";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import Button from '@mui/material/Button'
import EditCar from './EditCar';

export default function Carlist(props) {




useEffect(() => console.log(props.cars),[props.cars])

const columns = [
    {field:'brand', sortable: true, filter: true},
    {field:'model', sortable: true, filter: true},
    {field:'color', sortable: true, filter: true},
    {field:'year', sortable: true, filter: true},
    {field:'fuel', sortable: true, filter: true},
    {field:'price', sortable: true, filter: true},
    {cellRendererFramework: params => <Button  color="primary" onClick={() => props.deleteCar(params.data)}>Delete</Button>},
    {cellRendererFramework: params => <EditCar oldCar={params.data} function={props.editCar}/>}
    
]

return(
    <div className="ag-theme-alpine" style={{height: 800, padding:100, width:'80%',margin:'auto'}}>
  <AgGridReact
    
    onGridReady={ params => props.gridRef.current = params.api }
    ref={props.gridRef}
    rowSelection="single"
    rowData={props.cars}
    columnDefs={columns}>
    </AgGridReact>
    </div>
)

}