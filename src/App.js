import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Carlist from './components/Carlist';
import { useRef } from 'react';
import EditCar from './components/EditCar';
import axios from 'axios';
import React, {useEffect} from 'react';


function App() {

  const url = 'https://carstockrest.herokuapp.com/cars';

  const [cars, setCars] = React.useState([]);

  const gridRef = useRef(null);

  const [barIndex, setBarIndex] = React.useState(1);

  const addCar = (car) => {
    axios.post(url, car)
    .then(res => {
      console.log(res);
      getCars();
    })
    .catch(err => console.error(err));
  }

  const editCar = (car, id) => {
    axios.put(`${url}/${id}`, car)
    .then(res => {
      console.log(res);
      getCars();
    })
    .catch(err => console.error(err));
  }

  const deleteCar = (car) => {
     console.log(car) 
  }

  const getCars = () => {
      axios.get(url)
      .then(res => {
          setCars(res.data._embedded.cars);
          console.log(cars);})
      .catch(err => console.error(err));
  }


  useEffect(() => {
    getCars();
  },[])

  useEffect(() => {
    console.log(cars);
  },[gridRef.current])


  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Button color="inherit" onClick={() => setBarIndex(1)}>Carshop</Button>
          <Button color="inherit" onClick={() => setBarIndex(2)}>Add car</Button>
          <Button color="inherit" onClick={() => setBarIndex(3)}>Edit car</Button>
          <Button color="inherit" onClick={() => deleteCar(cars[gridRef.current.getSelectedNodes()[0].childIndex])}>Delete car</Button>
        </Toolbar>
      </AppBar>
      {barIndex===1 && <Carlist gridRef={gridRef} cars={cars}/>}
      {barIndex===2 && <EditCar gridRef={gridRef} function={editCar}/>}
      {barIndex===3 && <EditCar function={addCar}/>}
    </div>
  );
}

export default App;
