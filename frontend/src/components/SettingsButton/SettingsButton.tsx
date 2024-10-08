import { Text } from "@fluentui/react";
import { Settings24Regular } from "@fluentui/react-icons";

import styles from "./SettingsButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
}

export const SettingsButton = ({ className, onClick }: Props) => {
    return (
        <div
            className={`${styles.container} ${className ?? ""}`}
            onClick={onClick}
            onKeyDown={(e) => e.key === "Enter" && onClick()}
            role="button"
            tabIndex={0}
        >
            <Settings24Regular />
            <Text>{"設定"}</Text>
        </div>
    );
};
