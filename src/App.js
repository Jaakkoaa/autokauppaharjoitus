import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Carlist from './components/Carlist';
import { useRef } from 'react';
import AddCar from './components/AddCar';
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
      alert('car added');
    })
    .catch(err => console.error(err));
  }

  const editCar = (car, oldCar) => {
    axios.put(oldCar._links.self.href, car)
    .then(res => {
      console.log(res);
      getCars();
    })
    .catch(err => console.error(err));
  }

  const deleteCar = (car) => {
    axios.delete(car._links.self.href)
    .then(res => getCars())
    .catch(err => console.error(err));
    
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
          <Button color="inherit" onClick={() => setBarIndex(3)}>Add Car</Button>
        </Toolbar>
      </AppBar>
      {barIndex===1 && <Carlist editCar={editCar} gridRef={gridRef} cars={cars} deleteCar={deleteCar}/>}
      {barIndex===3 && <AddCar function={addCar}/>}
    </div>
  );
}

export default App;
