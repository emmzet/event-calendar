import axios from "axios";

function getAllEvents(eventFilter){
    return axios.get('api/event', {
        params: {
            name: eventFilter.name,
            city: eventFilter.city,
            genre: eventFilter.genre
        }
    })
        .then(response => response.data)
}

function addEvent(eventToAdd){
    axios.post('/api/event', eventToAdd).then(response => response.data)
}

function deleteEvent(eventID){
    return axios.delete(`api/event/${eventID}`)
}

export {getAllEvents, addEvent, deleteEvent}