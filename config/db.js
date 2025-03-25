const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',  // Remplace 'root' par 'localhost'
    user: 'root',       // Ton utilisateur MySQL (peut être 'root' ou un autre)
    password: 'nele250106',       // Mets le mot de passe MySQL ici (si vide, laisse '')
    database: 'db_tuto' // Mets le bon nom de ta base
});

connection.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        throw err;
    }
    console.log('Connecté à MySQL');
});

module.exports = connection;