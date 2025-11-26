import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import AccountLayout from "./layouts/account/AccountLayout";
import AccountHome from "./pages/account/account-home/AccountHome";
import ProviderSignin from "./pages/account/provider/sign-in/ProviderSignin";
import SelectAccount from "./pages/account/provider/select-account/SelectAccount";
import ProfessionalAccount from "./pages/account/provider/create-account/ProfessionalAccount";
import OrganizationAccount from "./pages/account/provider/create-account/OrganizationAccount";





function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AccountLayout />}>
              <Route index element={<AccountHome />} />

              {/* <Route path="/patient" element={<SignIn />} /> */}

              {/* <Route
                path="/patient/create-account"
                element={<CreateAccount />}
              /> */}

              <Route path="/provider" element={<ProviderSignin />} />
              <Route
                path="/provider/select-account"
                element={<SelectAccount />}
              />

              <Route
                path="/provider/professional"
                element={<ProfessionalAccount />}
              />
              <Route
                path="/provider/organization"
                element={<OrganizationAccount />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
