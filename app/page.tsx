import Image from "next/image";

export default function Home() {
  return (
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carbon Footprint AI Chatbot - Aether</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #e8f5e9;
            margin: 0;
        }
        .chat-container {
            width: 350px;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 128, 0, 0.2);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border: 2px solid #4caf50;
        }
        .chat-header {
            background: #4caf50;
            color: white;
            text-align: center;
            padding: 10px;
            font-size: 18px;
            font-weight: bold;
        }
        .chat-box {
            height: 400px;
            overflow-y: auto;
            padding: 15px;
            display: flex;
            flex-direction: column;
            background-color: #f1f8e9;
        }
        .chat-message {
            margin: 5px 0;
            padding: 10px;
            border-radius: 10px;
            max-width: 80%;
        }
        .user {
            align-self: flex-end;
            background: #2e7d32;
            color: white;
        }
        .bot {
            align-self: flex-start;
            background: #c8e6c9;
            color: black;
        }
        .input-area {
            display: flex;
            border-top: 1px solid #4caf50;
            background-color: #a5d6a7;
        }
        input {
            flex: 1;
            padding: 10px;
            border: none;
            outline: none;
            background-color: #dcedc8;
        }
        button {
            background: #4caf50;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
        button:hover {
            background: #388e3c;
        }
    </style>
</head>
<body>
    <div class="chat-container">
        <div class="chat-header">Aether - Your Eco-Friendly Chatbot</div>
        <div class="chat-box" id="chatBox"></div>
        <div class="input-area">
            <input type="text" id="userInput" placeholder="Enter your transportation details...">
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>

    <script>
        function sendMessage() {
            let inputField = document.getElementById("userInput");
            let userText = inputField.value.trim();
            if (userText === "") return;
            
            let chatBox = document.getElementById("chatBox");
            chatBox.innerHTML += `<div class='chat-message user'>${userText}</div>`;
            inputField.value = "";
            
            setTimeout(() => {
                let botResponse = getBotResponse(userText);
                chatBox.innerHTML += `<div class='chat-message bot'>${botResponse}</div>`;
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 500);
        }

        function getBotResponse(userText) {
            if (userText.toLowerCase().includes("car")) {
                return "Consider carpooling or using public transit to reduce your carbon footprint!";
            } else if (userText.toLowerCase().includes("bike")) {
                return "Great choice! Biking is a zero-emission way to travel.";
            } else {
                return "I can help analyze your travel impact. Try telling me how you commute!";
            }
        }
    </script>
</body>
</html>
  );
}
