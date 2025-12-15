<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "SYNMEDBASE";

$conn = new mysqli($host, $user, $password, $dbname);
if ($con->connect_error) {
    die("Erreur de connexion:" . $conn->connect_error);
}

$sql = "SELCT nom, sexe, age, type_grossesse, nombre_grossesse  FROM patients";
$result = $conn->query($sql);

if ($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        echo "<div class='patient-card'>";
        echo "<h3>" . htmlspecialchars($row["nom"]) . "</h3>";
        echo "<p>Sexe: " . htmlspecialchars($row["sexe"]) . "</p>";
        echo "<p>Age: " . htmlspecialchars($row["age"]) . "</p>";
        echo "<p>Type de grossesse: "htmlspecialchars($row["type_grossesse"]) . "</p>";
        echo "<p>Nombre de grossesse: "htmlspecialchars($row["Nombre_grossesse"]) . "</p>";
    }
} else {
    echo "<p>Aucun patient trouve.</p>";
}
$conn->close();
?>