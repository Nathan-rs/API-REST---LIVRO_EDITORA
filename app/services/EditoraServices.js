const db = require('../database');

module.exports = {
    showAllEditora: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM editora', (error, results) =>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    showOneEditora: (id) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM editora WHERE id = ?', [id], (error, results) =>{
                if(error){rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
                aceito(results);
            });
        });
    },

    insertEditora: (nome, cidade, telefone) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO editora (nome, cidade, telefone) VALUES(?, ?, ?)',
                [nome,cidade,telefone], (error, results) =>{
                if(error){rejeitado(error); return;}
                aceito(results.insert);
            });
        });
    },

    updateEditora: (id, nome, cidade, telefone) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE editora SET nome = ?, cidade = ?, telefone = ? WHERE id = ?',
                [nome,cidade,telefone, id], (error, results) =>{
                if(error){rejeitado(error); return;}
                aceito(results.insert);
            });
        });
    },

    deleteEditora: (id) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('DELETE FROM editora WHERE id = ?', [id], (error, results) =>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    },
};