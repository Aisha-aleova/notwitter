import "./Home.css";
import { NavLink } from "react-router-dom";
import background from "../../utils/images/background.jpg";
function Home(){
    return(
        <div className="Homepage">
            <div className="description">
                <p>Welcome to Not Twitter</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cumque hic culpa architecto deleniti rem atque ex rerum impedit natus?</p>
                <div className="Mainbuttons">
                        <button><NavLink className="navlink" to="/Products">Products</NavLink></button>
                        <button><NavLink className="navlink" to="/About">About</NavLink></button>
                </div>
            </div>
            <div className="HomepageBackground">
            <figure className="BackgroundImage">
                <img src={background} alt="background" />
            </figure>
            </div>
            
        </div>
    )
}
export default Home;