import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "6289136ac84a3cb875f0cfbc",
          "user": "6288cc44ae77f60b46fb405a",
          "title": "First Note",
          "description": "Added first note",
          "tag": "personal",
          "date": "2022-05-21T16:29:30.332Z",
          "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;