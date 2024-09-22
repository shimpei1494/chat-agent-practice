// for Chat
type HtmlChatParsedAnswer = {
    answerHtml: string;
};

export function parseChatAnswerToHtml(answer: string): HtmlChatParsedAnswer {
    // trim any whitespace from the end of the answer after removing follow-up questions
    const parsedAnswer = answer.trim();

    return { answerHtml: parsedAnswer };
}
