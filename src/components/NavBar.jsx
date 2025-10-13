import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <div>Dropdown</div>
    </nav>
  );
}
