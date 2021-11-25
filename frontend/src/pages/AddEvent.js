import AddEventForm from "../components/AddEventForm";
import styled from "styled-components";

export default function AddEvent() {

    return (
        <AddEventContainer>
           <AddEventForm />
        </AddEventContainer>
    )
}

const AddEventContainer = styled.div`
    background-color: beige;
    `