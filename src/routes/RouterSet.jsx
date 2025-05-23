import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "../pages/signin/Signin";
import MainLayout from "../pages/mainLayout/mainLayout";
import Dashboard from "../pages/Dashboard/dashboard";
import UserMangement from "../pages/userManagement/User mangement";
import IdVerification from "../pages/idVerification/idVerification";
import PendingIds from "../pages/pendingId/PendingIds";
import ReportAnalytic from "../pages/reportAnalitic/reportAnalytic";
import PersonalDetails from "../pages/personalDetails/personalDetails";
import Signup from "../pages/signup/Signup";

// import MainLayout from "../pages/mainLayout/MainLayout";

export default function RouterSet() {
  return (
    <Routes>
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usermangemnt" element={<UserMangement />} />
        <Route path="/idverification" element={<IdVerification />} />
        <Route path="/pending" element={<PendingIds />} />
        <Route path="/analatic" element={<ReportAnalytic />} />
        <Route path="/personalDetails" element={<PersonalDetails />} />
      </Route>
    </Routes>
  );
}
