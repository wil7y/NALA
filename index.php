<?php
// Paramètres de connexion
$host = "localhost";
$user = "user_synmed";   // utilisateur MySQL dédié
$password = "motdepasse"; 
$database = "synmedbase";

// Connexion à MySQL
$conn = new mysqli($host, $user, $password, $database);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}
mysqli_set_charset($conn, "utf8");
echo "Connexion réussie 🚀<br>";

// Exemple de requête
$sql = "SELECT id, nom FROM arch_patient";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "ID: " . htmlspecialchars($row["id"]) . 
             " - Nom: " . htmlspecialchars($row["nom"]) . "<br>";
    }
} else {
    echo "0 résultats";
}

$conn->close();
?>
