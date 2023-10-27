import AddNote from "../components/AddNote";

import '../assets/css/Home.css';
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

const Home = () => {

    const [ notes, setNotes ] = useState([]);


    // Fetch notes from db on load
    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(setNotes);
    }, []);



    return (
        <div className="home-page">
            <header>
                <h1>Kept Notes</h1>
            </header>

            <main>
                <div className="pin-header"><i style={{ marginBottom: '1em' }}>pinned</i></div>
                {
                    notes.filter(item => item.pinned === true).length > 0 && 
                    <div className="pinned-section" style={{ display: 'flex', flexDirection: 'row'}}>
                        
                        {
                            notes.filter(item => item.pinned === true).map(note => {
                                return (
                                    <NoteCard 
                                        key={note.id} 
                                        title={note.title}
                                        note={note.note}
                                        backgroundColor={note.backgroundColor}   
                                        id={note.id} 
                                        pinned={note.pinned}
                                    />
                                )
                            })
                        }
                    </div>
                }
                <div className="others-header"><i style={{ marginBottom: '1em' }}>others</i></div>
                {   
                    
                    notes.length > 0 && 
                    <div className="others-section" style={{ display: 'flex', flexDirection: 'row'}}>
                        
                        {
                            notes.filter(item => item.pinned === false).map(note => {
                                    return <NoteCard 
                                        key={note.id} 
                                        title={note.title}
                                        note={note.note}
                                        backgroundColor={note.backgroundColor}    
                                        id={note.id} 
                                        pinned={note.pinned}
                                    />
                                })
                        }
                    </div>
                }
                <AddNote />
            </main>
        </div>
    );
};


export default Home;