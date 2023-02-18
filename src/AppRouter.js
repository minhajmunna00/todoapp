import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./components/LoginPage";
import NewGroupPage from "./components/NewGroupPage";
import InvitesPage from "./components/InvitesPage";
import GroupSettingsPage from "./components/GroupSettingsPage";
import AnnotationPage from "./components/AnnotationPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/new-group"} element={<NewGroupPage />} />
        <Route path={"/invites"} element={<InvitesPage />} />
        <Route path={"/group-settings"} element={<GroupSettingsPage />} />
        <Route path={"/annotate-pdf"} element={<AnnotationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
