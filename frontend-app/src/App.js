import {
    BrowserRouter as Router, Navigate,
    Route, Routes,
} from "react-router-dom";

import './App.css';
import LoginPage from "./pages/login";
import MovieIndexPage from "./pages/movies";
import CreateMoviePage from "./pages/movies/create";
import MovieReviewPage from "./pages/reviews/movie_review";
import CreateReviewPage from "./pages/reviews/create"


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/movies/" element={
                        <MovieIndexPage/>
                }
                />
                <Route path="/movies/create/" element={ <CreateMoviePage/>}/>
                <Route path="/movies/:id/reviews/" element={ <MovieReviewPage/>}/>
                <Route path="/movies/:id/reviews/create"
                       element={ <CreateReviewPage/>}/>
            </Routes>
        </Router>

    );
}

export default App;
