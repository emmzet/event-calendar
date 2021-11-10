import {Autocomplete, Button, TextField} from "@mui/material";
import styled from "styled-components";
import {useState} from "react";

export default function AddLocationForm() {

    const cities = [
        {label: 'Hamburg'},
        {label: 'Berlin'},
        {label: 'Stuttgart'},
    ];

    const [locationToAdd, setLocationToAdd] = useState({
        name: "",
        address: "",
        city: "",
    })

    const handleNameChange = (event) => {
        setLocationToAdd({...locationToAdd, name: event.target.value})
    }

    const handleAddressChange = (event) => {
        setLocationToAdd({...locationToAdd, name: event.target.value})
    }

    const handleCityChance = (event, value) => {
        setLocationToAdd({...locationToAdd, city: value})
    }

    return (<AddLocationFormContainer>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleNameChange}/>
        <TextField id="outlined-basic" label="Address" variant="outlined" onChange={handleAddressChange}/>
        <Autocomplete
            disablePortal
            id="combo-box-city"
            options={cities}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="City"/>}
            onInputChange={(event, value) => handleCityChance(event, value)}
            getOptionLabel={(city) => city.label}
            isOptionEqualToValue={(option, value) => option.label === value.label}
        />
        <Button variant="contained">Submit</Button>
    </AddLocationFormContainer>)

}

const AddLocationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 5px;
  gap: 25px;
`