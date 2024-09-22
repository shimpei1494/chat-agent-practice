import { HashRouter, Route, Routes } from "react-router-dom";

import NoPage from "./pages/NoPage";
import Chat from "./pages/chat/Chat";
import Layout from "./pages/layout/Layout";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Chat />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}
