import { useState } from "react";

const Dropdown = () => {
  return (
    <div className="dropDown">
      <option value="hi">My Profile</option>
      <option value="h">Logout</option>
    </div>
  );
};
function AppHeader() {
  const [isPrifleMenuOpen, setIsPrifleMenuOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <li>Logo</li>
        <li>Home </li>
        <li>Order</li>
        <li className="profile" >
          Profile
        {!isPrifleMenuOpen ? <span onClick={() => setIsPrifleMenuOpen(true)} style={{position:'relative'}}>arrow</span>: <span onClick={() => setIsPrifleMenuOpen(false)} >down arrow</span>

}
          {isPrifleMenuOpen &&
           <Dropdown />
         } 
        </li>
      </nav>
    </div>
  );
}

export default AppHeader;
