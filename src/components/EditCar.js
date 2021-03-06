
import Paper from '@mui/material/Paper';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function EditCar(props) {

  const [car, setCar] = useState({brand: '', model: '', color: '', year: '', fuel: '', price: ''});

  const [open, setOpen] = useState(false);

  const buttonClicked = () => {
      console.log(props.oldCar);
      props.function(car, props.oldCar);
      setOpen(false);
   }

  const inputChanged = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
    console.log(car);
  }

return(
  <>
  <Button onClick={() => setOpen(true)}>Edit</Button>
  <Dialog open={open} onClose={() => setOpen(false)}>
  <DialogContent>

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
    </DialogContent>
    </Dialog>
   </>
)

}