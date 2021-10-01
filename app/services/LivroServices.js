const db = require('../database');

module.exports = {
    showAll: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM livros', (error, results) =>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    showOne: (id) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM livros WHERE id = ?', [id], (error, results) =>{
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

    insert: (titulo, descricao, autor) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO livros (titulo, descricao, autor) VALUES(?, ?, ?)', 
                [titulo,descricao,autor], (error, results) =>{
                if(error){rejeitado(error); return;}
                aceito(results.insert);
            });
        });
    },

    update: (id, titulo, descricao, autor) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('UPDATE livros SET titulo = ?, descricao = ?, autor = ? WHERE id = ?',
                [titulo,descricao,autor, id], (error, results) =>{
                if(error){rejeitado(error); return;}
                aceito(results.insert);
            });
        });
    },

    delete: (id) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('DELETE FROM livros WHERE id = ?', [id], (error, results) =>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    },
};