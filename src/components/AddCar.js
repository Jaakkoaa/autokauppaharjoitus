
import Paper from '@mui/material/Paper';
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AddCar(props) {

    const [car, setCar] = useState({brand: '', model: '', color: '', year: '', fuel: '', price: ''});

    const buttonClicked = () => {
        props.function(car);
    }

    
  const inputChanged = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
    console.log(car);
  }

return(
    <Paper style={{width:'60%', margin:'auto', marginTop:100,padding:20}} elevation={3}>

          <TextField
            name="brand"
            value={car.brand}
            onChange={inputChanged}
            label="Brand"
            fullWidth
          />
          <TextField
            name="model"
            value={car.model}
            onChange={inputChanged}
            label="Model"
            fullWidth
          />
          <TextField
            name="color"
            value={car.color}
            onChange={inputChanged}
            label="Color"
            fullWidth
          />
          <TextField
            name="fuel"
            value={car.fuel}
            onChange={inputChanged}
            label="Fuel"
            fullWidth
          />
          <TextField
            name="year"
            value={car.year}
            onChange={inputChanged}
            label="Year"
            fullWidth
          />
          <TextField
            name="price"
            value={car.price}
            onChange={inputChanged}
            label="Price (€)"
            fullWidth
          />

        <Button onClick={buttonClicked}>Add car</Button>
    </Paper>
)

}