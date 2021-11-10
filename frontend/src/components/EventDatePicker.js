import DateAdapter from '@mui/lab/AdapterMoment';
import {DatePicker, LocalizationProvider} from "@mui/lab";
import {TextField} from "@mui/material";
import {useState} from "react";
import styled from "styled-components";

export default function EventDatePicker() {

    const [date, setDate] = useState()

    return (
        <EventDatePickerContainer>
        <LocalizationProvider dateAdapter={DateAdapter}>
                <DatePicker
                    label="Pick your Date"
                    renderInput={(params) => <TextField {...params} />}
                    value={date}
                    onChange={setDate}
                />
            </LocalizationProvider>
        </EventDatePickerContainer>
    );
}

const EventDatePickerContainer = styled.div`
    display: flex;
  justify-content: center;
  padding: 5px;
  `