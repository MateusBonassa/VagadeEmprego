const Vagas = require('../models/vagas.js');
const vagasDal= require('../dals/vagasDal.js');
const fs = require("fs");

    exports.testeArq = async (req, res) =>
    {
      try {
    
        const file = req.file;
        console.log(file.path);
    
     
        res.status(200).json({message:"Sucesso"});
      } catch (err) {
        res.status(500).json({ message: "Erro ao salvar a imagem." });
      }
    };
    exports.cadastrar = async (req, res) =>
    {
      try {
        
        const file = req.file;
        
        let vaga = req.body;
       
        let obj = new Vagas(null,file.filename,vaga.cargo,vaga.cidade,vaga.estado,vaga.requisitos,vaga.formacao,vaga.conhecimentos,vaga.regime,vaga.jornada,vaga.remuneracao);
        await vagasDal.cadastrar(obj);    
        res.status(200).json({message:"Sucesso"});
      } catch (err) {
        res.status(500).json({ message: "Erro ao efetuar o cadastro." });
      }
    };
    exports.buscaFiltrada = async(req, res) => {
      
      const obj = req.query.filtro;
      try {
        const vagas = await vagasDal.buscaFiltrada(obj);
        res.json(vagas);
      } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar vagas filtradas');
      }
    }
  