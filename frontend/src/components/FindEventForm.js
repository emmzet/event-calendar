import {Autocomplete, Button, TextField} from "@mui/material";
import styled from "styled-components";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import {useState} from "react";

export default function FindEventForm() {

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

    const [findEvent, setFindEvent] = useState({
        name: "",
        city: "",
        genre: "",
    })

    const handleNameChange = (event) => {
        setFindEvent({...findEvent, name: event.target.value})
    }

    const handleCityChance = (event, value) => {
        setFindEvent({...findEvent, city: value})
    }

    const handleGenreChange = (event, value) => {
        setFindEvent({...findEvent, genre: value})
    }

    const handleDateChange = (event) => {
        setFindEvent({...findEvent, date: event._d.toJSON()})
    }

    const handleMaxCapacityChange = (event) => {
        setFindEvent({...findEvent, name: event.target.value})
    }

    return (<FindEventFormContainer>
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
                value={findEvent?.date}
                onChange={handleDateChange}
            />
        </LocalizationProvider>
        <TextField id="outlined-basic" label="Max Capacity" variant="outlined" onChange={handleMaxCapacityChange}/>
        <Button type="submit" variant="contained">Find Event</Button>
    </FindEventFormContainer>)
}

const FindEventFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 5px;
  gap: 25px;
`