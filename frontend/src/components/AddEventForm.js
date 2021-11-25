import {Autocomplete, Button, TextField} from "@mui/material";
import {DatePicker, DateTimePicker, LocalizationProvider} from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import moment from "moment";


export default function AddEventForm() {

    const cities = [
        {label: 'Hamburg'},
        {label: 'Berlin'},
        {label: 'Stuttgart'},
    ];

    const genres = [
        {label: 'Concert'},
        {label: 'Sport'},
        {label: 'Comedy'},
    ];

    const [eventToAdd, setEventToAdd] = useState({
        name: "",
        city: "",
        genre: "",
        date: "",
    })

    const handleNameChange = (event) => {
        setEventToAdd({...eventToAdd, name: event.target.value})
    }

    const handleCityChance = (event, value) => {
        setEventToAdd({...eventToAdd, city: value})
    }

    const handleGenreChange = (event, value) => {
        setEventToAdd({...eventToAdd, genre: value})
    }

    const handleDateTimeChange = (event) => {
        setEventToAdd({...eventToAdd, date: moment(event).format("MMMM Do YYYY, h:mm a")})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/event', eventToAdd).then(response => response.data)
    }

    return (<AddEventFormContainer onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleNameChange}/>
            <Autocomplete
                disablePortal
                id="combo-box-city"
                options={cities}
                renderInput={(params) => <TextField {...params} label="City"/>}
                onInputChange={(event, value) => handleCityChance(event, value)}
                getOptionLabel={(city) => city.label}
                isOptionEqualToValue={(option, value) => option.label === value.label}
            />
            <Autocomplete
                disablePortal
                id="combo-box-genre"
                options={genres}
                renderInput={(params) => <TextField {...params} label="Genre"/>}
                onInputChange={(event, value) => handleGenreChange(event, value)}
                getOptionLabel={(genre) => genre.label}
                isOptionEqualToValue={(option, value) => option.label === value.label}
            />



            <LocalizationProvider dateAdapter={DateAdapter}>
                <DateTimePicker
                    label='Date and time'
                    defaultValue={null}
                    value={eventToAdd.date}
                    onChange={handleDateTimeChange}
                    name='dateTime'
                    renderInput={(params) => <TextField {...params} />}
                    showTodayButton={true}
                />
            </LocalizationProvider>
            <Button type="submit" variant="contained">Submit</Button>
        </AddEventFormContainer>
    )
}

const AddEventFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  gap: 25px;
`