import { Link } from "react-router-dom"
const Home = () => {
    return(
        <ul className="home">
          <li><Link to="/category/all">ALL</Link></li>
          <li><Link to="/category/FSD">FULL STACK DEVELOPMENT</Link></li>
          <li><Link to="/category/datascience">DATA SCIENCE</Link></li>
          <li><Link to="/category/cybersecurity">CYBER SECURITY</Link></li>
          <li><Link to="/category/career">CAREER</Link></li>
          </ul>
    )
}

export default Home