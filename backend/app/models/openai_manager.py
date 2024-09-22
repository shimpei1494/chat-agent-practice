import os

from dotenv import load_dotenv
from openai import OpenAI
from openai.types.chat import ChatCompletion
from openai.types.chat.chat_completion_message_param import ChatCompletionMessageParam

load_dotenv(override=True)

# APIキーを設定
api_key = os.environ["OPENAI_API_KEY"]


class OpenaiManager:
    def __init__(self) -> None:
        self.client = OpenAI(api_key=api_key)

    def chat_completion(
        self, messages: list[ChatCompletionMessageParam], model: str, temperature: float
    ) -> dict[str, str | None]:
        chat_completion: ChatCompletion = self.client.chat.completions.create(
            model=model, messages=messages, temperature=temperature
        )
        response_text: str | None = chat_completion.choices[0].message.content
        return response_text
