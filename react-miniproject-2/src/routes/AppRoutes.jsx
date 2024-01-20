import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PageNotFound from "../pages/PageNotFound";
import SignupPage from "../pages/SignupPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="signup" element={<SignupPage {...props} />} />

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
