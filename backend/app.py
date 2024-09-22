from typing import Tuple, Union

from flask import Flask, Response, jsonify, request
from flask_cors import CORS

from app.controller.chat_controller import ChatController

app = Flask(__name__)
CORS(app)

chat_controller: ChatController = ChatController()


@app.route("/api/hello", methods=["GET"])
def hello() -> Response:
    return jsonify({"message": "Hello from Flask!"})


# Chat Test
@app.route("/api/chat", methods=["POST"])
def chat() -> Union[Response, Tuple[Response, int]]:
    try:
        result = chat_controller.handle_request(request)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
