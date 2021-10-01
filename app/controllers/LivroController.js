const LivroServices = require('../services/LivroServices');
module.exports = {
    showAll: async (req, res) => {
        let json = {error: '', result:[]};
        
        let livros = await LivroServices.showAll();

        for(let i in livros){
            json.result.push({
                id: livros[i].id,
                titulo: livros[i].titulo,
                descricao: livros[i].descricao,
                autor: livros[i].autor,
                data: livros[i].data,
            });
        }
        res.json(json);
    },

    showOne: async (req, res) =>{
        let json = {error: '', result:[]};

        let id = req.params.id;
        let livro = await LivroServices.showOne(id);

        if(livro){
            json.result = livro;
        }

        res.json(json);
    },

    insert: async (req, res) =>{
        let json = {error: '', result:[]};

        let titulo = req.body.titulo;
        let descricao = req.body.descricao;
        let autor = req.body.autor;

        if(titulo && autor){
            let LivroId = await LivroServices.insert(titulo,descricao, autor);
            json.result = {
                id: LivroId,
                titulo,
                descricao,
                autor
            };
        }else{
            json.error = 'campos não inseridos';
        }

        res.json(json);
    },

    update: async (req, res) =>{
        let json = {error: '', result:[]};

        let id = req.params.id;
        let titulo = req.body.titulo;
        let descricao = req.body.descricao;
        let autor = req.body.autor;

        if(id && titulo && autor){
            await LivroServices.update(id, titulo, descricao, autor);
            json.result = {
                id,
                titulo,
                descricao,
                autor
            };
        }else{
            json.error = 'campos não inseridos';
        }

        res.json(json);
    },

    delete: async (req, res) =>{
        let json = {error: '', result:[]};

        await LivroServices.delete(req.params.id);

        res.json(json);
    }
};