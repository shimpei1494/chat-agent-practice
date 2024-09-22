import { Stack } from "@fluentui/react";
import { useMemo } from "react";

import styles from "./Answer.module.css";

import type { ChatResponse } from "../../api";
import { AnswerIcon } from "./AnswerIcon";
import { parseChatAnswerToHtml } from "./AnswerParser";

interface Props {
    answer: ChatResponse;
    isSelected?: boolean;
}

export const AnswerChat = ({ answer, isSelected }: Props) => {
    const parsedAnswer = useMemo(
        () => parseChatAnswerToHtml(answer.answer),
        [answer.answer],
    );

    return (
        <Stack
            className={`${styles.answerContainer} ${isSelected ? styles.selected : ""}`}
            verticalAlign="space-between"
        >
            <Stack.Item>
                <Stack horizontal horizontalAlign="space-between">
                    <AnswerIcon />
                </Stack>
            </Stack.Item>

            <Stack.Item grow>
                <div className={styles.answerText}>
                    {parsedAnswer.answerHtml}
                </div>
            </Stack.Item>
        </Stack>
    );
};
