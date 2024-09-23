import type { AskResponse, ChatResponse, GptChatRequest } from "./models";

export async function chatApi(options: GptChatRequest): Promise<ChatResponse> {
    const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            history: options.history,
            approach: options.approach,
            overrides: options.overrides,
        }),
    });

    const parsedResponse: AskResponse = await response.json();
    if (response.status > 299 || !response.ok) {
        throw Error(parsedResponse.error || "Unknown error");
    }

    return parsedResponse;
}
