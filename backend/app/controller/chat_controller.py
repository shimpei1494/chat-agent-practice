from typing import Any

from flask import Request

from ..service.demo_ui_chat_service import DemoUiChatService
from ..service.simple_chat_service import SimpleChatService


class ChatController:
    def __init__(self) -> None:
        self.demo_ui_chat_service = DemoUiChatService()
        self.simple_chat_service = SimpleChatService()

    def handle_request(self, request: Request) -> dict[str, Any]:
        request_json = request.json
        if request_json is None:
            raise ValueError("リクエストのJSONデータが見つかりません")
        overrides = request_json.get("overrides", {})
        model = overrides.get("gptModel")
        history = request_json.get("history", [])
        if model == "response-test":
            # 質問文をそのまま画面に返すデモ用
            return self.demo_ui_chat_service.run(history)
        else:
            return self.simple_chat_service.run(history, overrides)
