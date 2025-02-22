import Image from "next/image";

export default function Home() {
  return (
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carbon Footprint AI Chatbot - Aether</title>
    <link rel = "stylesheet" href = "globals.css">
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
