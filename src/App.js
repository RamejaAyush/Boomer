import Nav from "./components/Nav";
import "./styles/global.scss";
import Bubble from "./Media/bubble.svg";

const App = () => {
 return (
  <>
   <div className="background-bubble">
    <img src={Bubble} className="left bubble" alt="" />
    <img src={Bubble} className="right bubble" alt="" />
   </div>
   <Nav />
  </>
 );
};

export default App;
