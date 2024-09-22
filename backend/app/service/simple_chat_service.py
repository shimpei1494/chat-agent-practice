from typing import Any

from ..core.message_builder import MessageBuilder
from ..models.openai_manager import OpenaiManager


class SimpleChatService:
    def __init__(self) -> None:
        self.openai_manager = OpenaiManager()

    def run(self, history: list[dict[str, Any]], overrides: dict[str, Any]) -> dict[str, str | None]:
        chat_model = overrides.get("gptModel")

        system_prompt = overrides.get("systemPrompt")
        temperature = float(overrides.get("temperature"))

        user_q = history[-1]["user"]
        message_builder = MessageBuilder(system_prompt)
        messages = message_builder.get_messages_from_history(history, user_q)
        response_text = self.openai_manager.chat_completion(messages, chat_model, temperature)
        return {"answer": response_text}
