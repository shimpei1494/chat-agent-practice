import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ChatMode from "./page/chat/chat";
// import SettingsMode from './components/SettingsMode';
// import HistoryMode from './components/HistoryMode';

function App() {
    const [currentMode, setCurrentMode] = useState("chat");

    return (
        <Router>
            <div className="app-container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/" onClick={() => setCurrentMode("chat")}>
                                チャット
                            </Link>
                        </li>{" "}
                        <li>
                            <Link
                                to="/settings"
                                onClick={() => setCurrentMode("settings")}
                            >
                                設定
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/history"
                                onClick={() => setCurrentMode("history")}
                            >
                                履歴
                            </Link>
                        </li>
                    </ul>
                </nav>

                <main>
                    <Routes>
                        <Route path="/" element={<ChatMode />} />
                        {/* <Route path="/settings" element={<SettingsMode />} />
            <Route path="/history" element={<HistoryMode />} /> */}
                    </Routes>
                </main>

                <footer>
                    <p>現在のモード: {currentMode}</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
