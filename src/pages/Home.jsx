import AddNote from "../components/AddNote";

import '../assets/css/Home.css';

const Home = () => {


    return (
        <div className="home-page">
            <header>
                <h1>Kept Notes</h1>
            </header>

            <main>
                <AddNote />
            </main>
        </div>
    );
};


export default Home;