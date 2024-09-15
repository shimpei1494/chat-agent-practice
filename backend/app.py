from flask import Flask, Response, jsonify

app = Flask(__name__)


@app.route("/api/hello", methods=["GET"])
def hello() -> Response:
    return jsonify({"message": "Hello from Flask!"})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
