import { Link, useLocation } from "react-router";
import { MdHome } from "react-icons/md";
import "./account-header.scss";

const AccountHeader = () => {

  const { pathname } = useLocation();

 const apiUrl = import.meta.env.VITE_RHOMBOID_URL

  // console.log(apiUrl);

  return (
    <div className="account-header">

        <Link to={apiUrl}>
            <MdHome />
            Home        
        </Link>

    {  pathname.includes("provider/") && 
      <Link to="/patient">
        Login
      </Link>
    }

    </div>
  );
};

export default AccountHeader;
