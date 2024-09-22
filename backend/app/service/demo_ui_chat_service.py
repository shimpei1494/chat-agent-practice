from typing import Any


class DemoUiChatService:
    def __init__(self) -> None:
        pass

    def run(self, history: list[dict[str, str]]) -> dict[str, Any]:
        user_q: str = history[-1]["user"]
        return {"answer": user_q}
