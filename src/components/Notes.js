import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {    
    const context = useContext(NoteContext);
    const { notes } = context;
    return (
        <>
            <AddNote />
            <div className='row'>
                <h1 className='mt-2'>Your Notes</h1>
                    {notes.map((notes)=>{
                        return <NoteItem notes={notes} key={notes._id}/>;
                    })}
            </div>
        </>
    )
}

export default Notes