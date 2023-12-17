
const { MongoClient } = require('mongodb');
const Vaga = require('../models/vagas.js');
                

    async function cadastrar(obj)
    {
         let res=false;
        const client =  new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect()
        .then(()=>{
            const dbo = client.db("vagas").collection("vagas");
            res =  dbo.insertOne(obj);
        })
        .catch((erro) => {
            console.error(erro);
        })
        .finally(() => {
            
        });  
        return res;
    }
    async function buscaFiltrada(obj)
    {
        var vagas = []; let aux;
        let str;
        const client =  new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect()
        .then(()=>{
            const dbo = client.db("vagas").collection("vagas");
            return dbo.find({"cargo": new RegExp(obj, 'i')}).toArray()
        })
        .then((result) =>{
            result.forEach(vaga => {
                aux = new Vaga(0, "", "", "", "", "", "", "", "", "", "");
                
                aux.id =    vaga._id;
                aux.logo = vaga.logo;
                aux.cargo = vaga.cargo;
                aux.cidade =    vaga.cidade;
                aux.estado =    vaga.estado;
                aux.requisitos =    vaga.requisitos;
                aux.formacao =  vaga.formacao;
                aux.conhecimentos = vaga.conhecimentos;
                aux.regime =    vaga.regime;
                aux.jornada =   vaga.jornada;
                aux.remuneracao =   vaga.remuneracao;

                vagas.push(aux);
            });
        })
        .catch((erro) => {
            console.error(erro);
        })
        .finally(() => {
          
            client.close();
        });  
        return vagas;
    }


    module.exports = { buscaFiltrada,cadastrar};