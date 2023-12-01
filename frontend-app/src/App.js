import {
    BrowserRouter as Router, Navigate,
    Route, Routes,
} from "react-router-dom";

import './App.css';
import ProductoCreatePage from "./pages/Producto/create";
import ProductoPage from "./pages/Producto";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/producto/create/" element={ <ProductoCreatePage/>}/>
                <Route path="/productos" element={ <ProductoPage/>}/>
                    
            </Routes>
        </Router>

    );
}

export default App;
