import { Link, useLocation } from "react-router";
import { MdHome } from "react-icons/md";
import "./account-header.scss";

const AccountHeader = () => {

  const { pathname } = useLocation();

 const apiUrl = import.meta.env.VITE_RHOMBOID_URL

  // console.log(apiUrl);

  return (
    <div className="account-header">

        <Link to="https://www.rhomboidhealth.com">
            <MdHome />
            Home        
        </Link>

    {  (pathname.includes("provider/") || pathname.includes("patient/")) && 
      <Link to={pathname.includes("provider/") ? "/provider"  : "/patient"}>
        Login
      </Link>
    }

    </div>
  );
};

export default AccountHeader;
