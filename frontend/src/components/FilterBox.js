import {Autocomplete, TextField} from "@mui/material";

export default function FilterBox() {

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

    return(
        <div>
        <TextField id="outlined-basic" label="Name" variant="outlined"/>
            <Autocomplete
                disablePortal
                id="combo-box-city"
                options={cities}
                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} label="City"/>}
                getOptionLabel={(city) => city.label}
                isOptionEqualToValue={(option, value) => option.label === value.label}
            />
            <Autocomplete
                disablePortal
                id="combo-box-genre"
                options={genres}
                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} label="Genre"/>}
                getOptionLabel={(genre) => genre.label}
                isOptionEqualToValue={(option, value) => option.label === value.label}
            />
        </div>
    )
}


