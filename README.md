# Colhendo-desenvolvimento-criando-oportunidade
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colhendo desenvolvimento e criando oportunidade</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        header {
            background-color: #4CAF50;
            color: white;
            padding: 2rem 1rem;
        }

        h1 {
            margin: 0;
            font-size: 2rem;
        }

        main {
            padding: 2rem;
        }

        p {
            font-size: 1.2rem;
            color: #333;
        }

        button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
            cursor: pointer;
            margin: 1rem;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #45a049;
        }

        footer {
            background-color: #333;
            color: white;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Colhendo desenvolvimento e criando oportunidade</h1>
    </header>

    <main>
        <p id="mensagem">Bem-vindo ao nosso site! Vamos juntos crescer e criar oportunidades.</p>
        <button onclick="mostrarAlerta()">Clique aqui para uma mensagem</button>
        <button onclick="mudarMensagem()">Mudar mensagem</button>
    </main>

    <footer>
        &copy; 2026 Colhendo Desenvolvimento. Todos os direitos reservados.
    </footer>

    <script>
        function mostrarAlerta() {
            alert("Obrigado por visitar nosso site! Vamos colher desenvolvimento juntos.");
        }

        function mudarMensagem() {
            const mensagens = [
                "Oportunidades surgem para quem está preparado.",
                "Desenvolver habilidades abre portas para o futuro.",
                "Cada passo de aprendizado conta para o sucesso."
            ];
            const randomIndex = Math.floor(Math.random() * mensagens.length);
            document.getElementById("mensagem").innerText = mensagens[randomIndex];
        }
    </script>
</body>
</html>