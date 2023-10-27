/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';
import '../assets/css/NoteCard.css'

const NoteCard = ({ title, note, backgroundColor, id, pinned }) => {

    const navigate = useNavigate();


    const handleClick = () => {
        
        navigate(
            `/editnote/${id}`, 
            {
                state: {
                    note: note,
                    title: title,
                    backgroundColor: backgroundColor,
                    id: id,
                    pinned: pinned
                }            
            }
        );
    };
 
    return (
        <div className="note-card" 
            onClick={handleClick}
            style={{ 
                width: "30%",
                backgroundColor: backgroundColor,
                margin: '1em 1em 1em 0',
                padding: '.5em',
                border: '3px solid #424242',
                borderRadius: '5px' 
            }}>
            <h2>{title}</h2>

            <p>{note}</p>
        </div>
    )
};

export default NoteCard;