import './main.css'
import { Navbar } from './Components/Navbar/Navbar';
import {Home} from './Components/Home/Home';
import {Search} from './Components/Search/Search';
import {Support} from './Components/Support/Support';
import {Info} from './Components/Info/Info';
import {Lounge} from './Components/Lounge/Lounge';
import {Travelers} from './Components/Travelers/Travelers'
import {Subscribers} from './Components/Subscribers/Subscribers';
import {Footer} from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Search></Search>
      <Support></Support>
      <Info></Info>
      <Lounge></Lounge>
      <Travelers></Travelers>
      <Subscribers></Subscribers>
      <Footer></Footer>
    </div>
  );
}

export default App;
