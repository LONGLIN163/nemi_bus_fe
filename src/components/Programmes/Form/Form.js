import React,{useState,useEffect} from 'react';
import {FormControl,MenuItem,InputLabel,Select,TextField,Button} from '@material-ui/core';
import { useVehicleContext } from '../../../store/VehicleContextProvider';
import {actives} from "../../../store/store";


const Form = ({vehicle,onSubmit}) => {

    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [imageUrl,setImageUrl]=useState('');
    const [client,setClient]=useState('');
    const [location,setLocation]=useState('');
    const [active,setActive]=useState('');

    const {setOpenDialog,vehicleStatus} = useVehicleContext()

    const [currentVehicle,setCurrentVehicle]=useState({});
    
    useEffect(() => {
        if(vehicle){
            setCurrentVehicle(vehicle)
            setId(vehicle.id)
            setName(vehicle.name)
            setImageUrl(vehicle.imageUrl)
            setClient(vehicle.client)
            setLocation(vehicle.location)
            setActive(vehicle.active)
        }
    },[vehicle])

    const handleChange=({target:{value,name}}) => {
        if(name==="name"){
            setName(value);
            if(!vehicle){
                setId(value);
            }
        }
        if(name==="imageUrl") setImageUrl(value);
        if(name==="client") setClient(value);
        if(name==="location") setLocation(value);
        if(name==="active") setActive(value);
    };

    useEffect(() => {
        setCurrentVehicle({
            id,
            name: name,
            imageUrl:imageUrl,
            client: client,
            location: location,
            active:active
        })
    },[name,imageUrl,client,location,active])

    const handleSubmit = () => {
        onSubmit(currentVehicle)
        setCurrentVehicle({
            name:'',
            imageUrl:'',
            client:'',
            location:'',
            active:'',
        })
        setOpenDialog(false)
    }

    return (<>
                <form action="" title="formPane">
                    <TextField
                        label="Name"
                        value={name}
                        name='name'
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        label="Image"
                        value={imageUrl}
                        name='imageUrl'
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        label="Client"
                        value={client}
                        name='client'
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        label="Location"
                        value={location}
                        name='location'
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <FormControl fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Select
                            value={active}
                            name='active'
                            onChange={handleChange}
                        >
                            {

                                vehicleStatus.map( (cat) => {
                                    return(
                                        <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    <br />
                    <br />
                    <br />
                    <Button
                        variant="contained"
                        color="secondary"
                        title="formbtn"
                        onClick={handleSubmit}
                        disabled={!name || !vehicleStatus}
                    >
                        { vehicle ? 'Done' : 'Create' }
                    </Button>

                </form>
    </>);
    
}
 
export default Form;