import { Text } from "@fluentui/react";
import { Delete24Regular } from "@fluentui/react-icons";

import styles from "./ClearChatButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

export const ClearChatButton = ({ className, disabled, onClick }: Props) => {
    const handleInteraction = (
        event: React.MouseEvent | React.KeyboardEvent,
    ) => {
        if (
            event.type === "keydown" &&
            (event as React.KeyboardEvent).key !== "Enter"
        ) {
            return;
        }
        onClick();
    };

    return (
        <div
            className={`${styles.container} ${className ?? ""} ${disabled && styles.disabled}`}
            onClick={handleInteraction}
            onKeyDown={handleInteraction}
            role="button"
            tabIndex={0}
        >
            <Delete24Regular />
            <Text>{"消去"}</Text>
        </div>
    );
};
