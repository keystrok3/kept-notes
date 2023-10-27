/* eslint-disable react/prop-types */


const NoteCard = ({ title, note, backgroundColor }) => {


    return (
        <div className="note-card" style={{ backgroundColor: backgroundColor }}>
            <h2>{title}</h2>

            <p>{note}</p>
        </div>
    )
};

export default NoteCard;