const func_crud = function(app){
    
    // MODELS
    const tb_pessoa = require('./models/tb_pessoa')

    app.get('/pessoa/:id?', function(req, res){

        let id = req.params.id;

        if(id){
            tb_pessoa.findByPk(id)
            .then(function(dados){
                res.status(200).json(dados);
            }).catch(function(e){
                res.status(500).json({"msg": "Ocorreu uma falha ao buscar os dados."});
            })
        }else{
            tb_pessoa.findAll({attributes: ['nome', 'email']})
            .then(function(dados){
                res.status(200).json(dados);
            }).catch(function(e){
                res.status(500).json({"msg": "Ocorreu uma falha ao buscar os dados."});
            })
        }
    })

    app.post('/pessoa/gravar/:id?', function(req, res){

        let id = req.params.id;

        if(id){
            tb_pessoa.update({
                nome:  req.body.nome,
                email: req.body.email
            },
            {where: {id: id}})
            .then(function(rowsUpdated) {
                retorno = {"msg": "Os dados foram atualizados com sucesso!"}
            }).catch(function(e){
                retorno = {"msg": "Ocorreu uma falha ao atualizar os dados, por favor tente novamente!"}
            }).finally(function(){
                res.json(retorno);
                res.end();
            })
        }
        else{
            tb_pessoa.create({
                nome:  req.body.nome,
                email: req.body.email
            }).then(function() {
                retorno = {"msg": "Os dados foram cadastrados com sucesso!"}
            }).catch(function(e){
                retorno = {"msg": "Ocorreu uma falha ao salvar os dados, por favor tente novamente!"}
            }).finally(function(){
                res.json(retorno);
                res.end();
            })
        }
    })

    app.post('/pessoa/excluir/:id?', function(req, res){

        let id = req.params.id;

        if(id){
            tb_pessoa.destroy({
                where: {id: id}
            })
            .then(function() {
                retorno = {"msg": "Os dados foram excluidos com sucesso!"}
            }).catch(function(e){
                retorno = {"msg": "Ocorreu uma falha ao excluir os dados, por favor tente novamente!"}
            }).finally(function(){
                res.json(retorno);
                res.end();
            })
        }
        else{
            tb_pessoa.destroy({
                where: {}
            })
            .then(function() {
                retorno = {"msg": "Os dados foram excluidos com sucesso!"}
            }).catch(function(e){
                retorno = {"msg": "Ocorreu uma falha ao excluir os dados, por favor tente novamente!"}
            }).finally(function(){
                res.json(retorno);
                res.end();
            })
        }
    })
}

module.exports = func_crud