import { NavLink, Outlet } from "react-router-dom";

export default function Collage() {
  return (
    <div className="collage" style={{ textAlign: "center" }}>
      <h1>Collage Page</h1>
      <NavLink className="link" to="student">Student</NavLink>
      <NavLink className="link" to="department">Departement</NavLink>
      <NavLink className="link" to="details">Collage Details</NavLink>
      <Outlet />
    </div>
  );
}
