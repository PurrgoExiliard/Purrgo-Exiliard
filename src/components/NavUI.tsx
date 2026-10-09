import {Link} from"react-router"

function NavUI() {
    return  <>
            <nav className="nav_menu">
                <div className="nav_container">
                    <div className="link_box">
                        <Link className="nav-link" to="/">Home</Link>
                    </div>
                    <div className="link_box">
                        <Link className="nav_link" to="/Guitar">Guitar Stuff</Link>
                    </div>
                    <div className="link_box">
                        <Link className="nav_link" to="/Projects">Projects</Link>
                    </div>
                </div>
            </nav>
            </>
}

export default NavUI