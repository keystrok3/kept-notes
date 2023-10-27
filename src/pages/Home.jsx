import AddNote from "../components/AddNote";

import '../assets/css/Home.css';
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

const Home = () => {

    const [ notes, setNotes ] = useState([]);


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
                {
                    notes.filter(item => item.pinned === true).length > 0 && 
                    <div className="pinned-section">
                        <i style={{ marginBottom: '1em' }}>pinned</i>
                        {
                            notes.filter(item => item.pinned === true).map(note => {
                                return <NoteCard 
                                    key={note.id} 
                                    title={note.title}
                                    note={note.note}
                                    backgroundColor={note.backgroundColor}    
                                />
                            })
                        }
                    </div>
                }

                {
                    notes.length > 0 && 
                    <div className="others-section">
                        <i style={{ marginBottom: '1em' }}>others</i>
                        {
                            notes.filter(item => item.pinned === false).map(note => {
                                    return <NoteCard 
                                        key={note.id} 
                                        title={note.title}
                                        note={note.note}
                                        backgroundColor={note.backgroundColor}    
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