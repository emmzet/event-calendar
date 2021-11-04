import {Autocomplete, TextField} from "@mui/material";
import styled from 'styled-components';

const cities = [
    { label: 'Hamburg', id: 1 },
    { label: 'Berlin', id: 2 },
    { label: 'Stuttgart', id: 3 },
];

export default function ComboBoxCity() {
    return (
        <ComboBoxCityContainer>
        <Autocomplete
            disablePortal
            id="combo-box-city"
            options={cities}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="City" />}
        />
        </ComboBoxCityContainer>
    )
}

const ComboBoxCityContainer = styled.div`
  display: grid;
  justify-content: center;
    `