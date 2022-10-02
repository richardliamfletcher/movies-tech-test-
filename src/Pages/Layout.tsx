import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navigation-items">
        <div className="page-navigation-item" >
          <Link className="link" to="/">Movies</Link>
        </div>
        <div className="page-navigation-item" >
          <Link className="link" to="/timeSeries">Time Series</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;