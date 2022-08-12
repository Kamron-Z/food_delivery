import {Header} from "./components/Header/Header";
import Settings from "./pages/Settings";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">

        <div className='main'>
            <Routes>
                <Route path='settings' element={<Settings/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>

        </div>
    </div>
  );
}

export default App;
