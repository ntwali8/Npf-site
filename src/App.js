import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Donate from './pages/donate';
import Stories from './pages/stories';
import GetStarted from './pages/get-started';
import About from './pages/about-us';
import WeDo from './pages/what-we-do';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/donate' element={<Donate />}></Route>
        <Route path='/stories' element={<Stories />}></Route>
        <Route path='/get-started' element={<GetStarted />}></Route>
        <Route path='/what_we_do' element={<WeDo />}></Route>
        <Route path='/donate' element={<Donate/>}></Route>
      </Routes>
    </>
  );
}

export default App;
