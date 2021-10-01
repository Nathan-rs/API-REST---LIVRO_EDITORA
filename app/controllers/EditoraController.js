const EditoraServices = require('../services/EditoraServices');

module.exports = {
    showAllEditora: async (req, res) => {
        let json = {error: '', result:[]};
        
        let editora = await EditoraServices.showAllEditora();

        for(let i in editora){
            json.result.push({
                id: editora[i].id,
                nome: editora[i].nome,
                cidade: editora[i].cidade,
                telefone: editora[i].telefone,
                data: editora[i].data,
            });
        }
        res.json(json);
    },

    showOneEditora: async (req, res) =>{
        let json = {error: '', result:[]};

        let id = req.params.id;
        let editora = await EditoraServices.showOneEditora(id);

        if(editora){
            json.result = editora;
        }

        res.json(json);
    },

    insertEditora: async (req, res) =>{
        let json = {error: '', result:[]};

        let nome = req.body.nome;
        let cidade = req.body.cidade;
        let telefone = req.body.telefone;

        if(nome){
            let EditoraId = await EditoraServices.insertEditora(nome,cidade,telefone);
            json.result = {
                id: EditoraId,
                nome,
                cidade,
                telefone
            };
        }else{
            json.error = 'campos não inseridos';
        }

        res.json(json);
    },

    updateEditora: async (req, res) =>{
        let json = {error: '', result:[]};

        let id = req.params.id;
        let nome = req.body.nome;
        let cidade = req.body.cidade;
        let telefone = req.body.telefone;

        if(id && nome && cidade){
            await EditoraServices.updateEditora(id, nome, cidade, telefone);
            json.result = {
                id,
                nome,
                cidade,
                telefone
            };
        }else{
            json.error = 'campos não inseridos';
        }

        res.json(json);
    },

    deleteEditora: async (req, res) =>{
        let json = {error: '', result:[]};

        await EditoraServices.deleteEditora(req.params.id);

        res.json(json);
    }
};