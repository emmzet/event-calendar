import {Autocomplete, Button, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import styled from "styled-components";
import {useState} from "react";

export default function AddEventForm() {

    const cities = [
        {label: 'Hamburg'},
        {label: 'Berlin'},
        {label: 'Stuttgart'},
    ];

    const genres = [
        {label: 'Concerts'},
        {label: 'Sport'},
        {label: 'Comedy'},
    ];

    const [eventToAdd, setEventToAdd] = useState({
        name: "",
        city: "",
        genre: "",
    })
    console.log(eventToAdd)

    const handleNameChange = (event) => {
        setEventToAdd({...eventToAdd, name: event.target.value})
    }

    const handleCityChance = (event, value) => {
        setEventToAdd({...eventToAdd, city: value})
    }

    const handleGenreChange = (event, value) => {
        setEventToAdd({...eventToAdd, genre: value})
    }

    const handleDateChange = (event) => {
        setEventToAdd({...eventToAdd, date: event._d.toJSON()})
    }

    return (<AddEventFormContainer>
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleNameChange}/>
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
            <Autocomplete
                disablePortal
                id="combo-box-genre"
                options={genres}
                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} label="Genre"/>}
                onInputChange={(event, value) => handleGenreChange(event, value)}
                getOptionLabel={(genre) => genre.label}
                isOptionEqualToValue={(option, value) => option.label === value.label}
            />
            <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                    label="Pick your Date"
                    renderInput={(params) => <TextField {...params} />}
                    value={eventToAdd?.date}
                    onChange={handleDateChange}
                />
            </LocalizationProvider>
            <Button variant="contained">Submit</Button>
        </AddEventFormContainer>
    )

}


const AddEventFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 5px;
  gap: 25px;
`