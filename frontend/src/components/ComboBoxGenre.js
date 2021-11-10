import {Autocomplete, TextField} from "@mui/material";
import styled from 'styled-components';

const genres = [
    { label: 'Concerts', id: 1 },
    { label: 'Sport', id: 2 },
    { label: 'Comedy', id: 3 },
];

export default function ComboBoxGenre() {
    return (
        <ComboBoxGenreContainer>
            <Autocomplete
                disablePortal
                id="combo-box-genre"
                options={genres}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Genre" />}
            />
        </ComboBoxGenreContainer>
    )
}

const ComboBoxGenreContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`