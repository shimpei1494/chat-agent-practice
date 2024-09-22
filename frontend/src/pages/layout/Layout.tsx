import { Link, NavLink, Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitleLeft}>
                            企業内向けChatと社内文書検索
                        </h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.headerNavPageLinkActive
                                            : styles.headerNavPageLink
                                    }
                                >
                                    企業内向けChat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink
                                    to="/docsearch"
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.headerNavPageLinkActive
                                            : styles.headerNavPageLink
                                    }
                                >
                                    社内文書検索
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <h3 className={styles.headerTitleRight}>ゲストユーザー</h3>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
