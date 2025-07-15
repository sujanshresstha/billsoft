import './Menubar.css';
import { assets } from '../../assets/assets'

const Menubar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
        <a className="navbar-brand" href="#">
            <img 
                src={assets.logo} 
                alt="Logo" 
                height={50} 
                style={{borderRadius:'50%'}}/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse p-2" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/explore">Explore</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/items">Mangae Items</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/category">Manage Categories</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/users">Manage Users</a>
                </li>
            </ul>
        </div>
    </nav>

  )
}

export default Menubar
