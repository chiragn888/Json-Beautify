<!DOCTYPE html>
<html>
<head>
  <title>JSON Beautifier</title>
  <script>
    function beautifyJson() {
      var inputJson = document.getElementById('jsonInput').value;
      try {
        var beautifiedJson = JSON.stringify(JSON.parse(inputJson), null, 2);
        document.getElementById('jsonOutput').value = beautifiedJson;
      } catch (error) {
        document.getElementById('jsonOutput').value = inputJson;
        console.error("Invalid JSON input: ", error);
      }
    }

    window.onload = function() {
      document.getElementById('beautifyBtn').addEventListener('click', beautifyJson);
    };
  </script>
</head>
<body>
  <h1>JSON Beautifier</h1>
  <textarea id="jsonInput" rows="10" cols="50">{ "name": "John", "age": 30, "city": "New York" }</textarea><br>
  <button id="beautifyBtn">Beautify JSON</button><br><br>
  <textarea id="jsonOutput" rows="10" cols="50"></textarea>
</body>