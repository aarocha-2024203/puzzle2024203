<%-- 
    Document   : rompecabezas
    Created on : 27/08/2025, 07:57:20
    Author     : ESTUARDO AROCHA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Rompecabezas de Moon Knight</title>
        <link rel="stylesheet" href="./css/estilo.css">
    </head>
    <body>
        <div class="container">
            <h1>Rompecabezas de Moon Knight</h1>
            <p>Haz clic en una pieza adyacente al espacio vacío para moverla.</p>
            <div class="game-area">
                <div id="puzzle" class="puzzle"></div>
                <div class="sidebar">
                    <div class="timer">Tiempo restante: <span id="time">05:00</span></div>
                    <div class="referencia">
                        <h3>Imagen de Referencia</h3>
                        <img src="Image/imagencompleta.jpg" alt="Imagen de referencia"/>
                    </div>
                    <p id="mensaje"></p>
                    <button onclick="reiniciar()">Reiniciar Juego</button>
                </div>
            </div>
        </div>

        <script src="./js/script.js"></script>
    </body>
</html>