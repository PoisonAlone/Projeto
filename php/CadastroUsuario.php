<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="./Js/Funcoes.js" type="text/javascript"></script>
    
    <title>Document</title>
</head>
<body>

    <form method="POST">
        <input type="hidden" name="hidden" id="hidden">

        <label>Login:</label>
        <input type="text" name="login" id="login"><br/><br>

        <label>Senha:</label>
        <input type="text" name="senha" id="senha"><br/><br>

        <label>Nome:</label>
        <input type="text" name="nome" id="nome"><br/><br>

        <button onclick="validar()">Cadastrar Usuário</button>

    </form>

    <h1 id="h1"></h1>


</body>
</html>