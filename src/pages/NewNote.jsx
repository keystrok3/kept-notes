import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/NewNote.css';
import { useEffect, useRef, useState } from 'react';

const NewNote = () => {
    const newNote = useRef(true);

    const [ title, setTitle ] = useState("");
    const [ note, setNote ] = useState("");
    const [ pinned, setPinned ] = useState(false);

    const navigate = useNavigate();

    const location = useLocation();

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    };

    const handleChangeNote = (e) => {
        setNote(e.target.value)
    };

    const handleSetPin = () => {

        setPinned(!pinned);
    };


    const handlePublish = () => {
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                title: title,
                note: note,
                pinned: pinned,
                backgroundColor: 'inherit'
            })
        })
        .then(res => res.json())
        .then(navigate('/'));
    };


    const handleEdit = () => {
        if(location.state === null) return;
        fetch(`http://localhost:3000/posts/${location.state.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                title: title,
                note: note,
                pinned: pinned,
                backgroundColor: 'inherit'
            })
        })
        .then(res => res.json())
        .then(navigate('/'));
    };

    useEffect(() => {
        if(location.state !== null) {
            newNote.current = false;
            setTitle(location.state.title);
            setNote(location.state.note);
            setPinned(location.state.pinned);
        }
    }, []);


    useEffect(() => {
        if(location.state === null) {
            setPinned(!pinned);
            return;
        }

        fetch(`http://localhost:3000/posts/${location.state.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                title: title,
                note: note,
                pinned: pinned,
                backgroundColor: 'inherit'
            })
        })
        .then(res => res.json())
    }, [ pinned ])

    return (
        <div className="new-note" style={{
            height: '100vh',
            
        }}>
            <div className="top-bar">
                <Link type='button' to={'/'}>Back</Link>

                <button className='pin-button' onClick={handleSetPin}>Pin</button>
            </div>

            <div className="note-area">
                <div className="textbox">
                    <input 
                        onChange={handleChangeTitle} 
                        type="text" 
                        placeholder="Title" 
                        value={title}    
                    />
                </div>
                <div className="textarea">
                    <textarea 
                        onChange={handleChangeNote} 
                        name="note" 
                        id="note" 
                        placeholder='Note'
                        value={note}
                    ></textarea>
                </div>
            </div>

            <div className="action-bar">
                <button 
                    onClick={ newNote === true ? handlePublish : handleEdit } 
                    className='submit-note'>Publish</button>
            </div>
        </div>
    );
};

export default NewNote;