import {Autocomplete, Button, TextField} from "@mui/material";
import styled from "styled-components";

export default function FilterBox({setEventFilter}) {

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

    const handleNameChange = (event) => {

        if (event.target.value === "") {
            setEventFilter(
                (eventFilter) => {
                    return {
                        name: undefined,
                        city: eventFilter.city,
                        genre: eventFilter.genre
                    }
                }
            )

        } else {
            setEventFilter(
                (eventFilter) => {
                    return {
                        name: event.target.value,
                        city: eventFilter.city,
                        genre: eventFilter.genre
                    }
                }
            )

        }
    }

    const handleCityChange = (event, value) => {

        if (value === "") {
            setEventFilter(
                (eventFilter) => {
                    return {
                        name: eventFilter.name,
                        city: undefined,
                        genre: eventFilter.genre
                    }
                }
            )
        } else {
            setEventFilter((eventFilter) => {
                    return {
                        name: eventFilter.name,
                        city: value,
                        genre: eventFilter.genre
                    }
                }
            )
        }
    }

    const handleGenreChange = (event, value) => {

        if (value === "") {
            setEventFilter(
                (eventFilter) => {
                    return {
                        name: eventFilter.name,
                        city: eventFilter.city,
                        genre: undefined
                    }
                }
            )
        } else {
            setEventFilter((eventFilter) => {
                    return {
                        name: eventFilter.name,
                        city: eventFilter.city,
                        genre: value
                    }
                }
            )
        }
    }

    return (
        <FilterBoxContainer>
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleNameChange}/>
            <Autocomplete
                disablePortal
                id="combo-box-city"
                options={cities}
                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} label="City"/>}
                onInputChange={(event, value) => handleCityChange(event, value)}
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
        </FilterBoxContainer>
    )
}

const FilterBoxContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 5px;
  gap: 25px;
`
