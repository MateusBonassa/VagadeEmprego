
 class Vaga {
    constructor(id, logo, cargo, cidade, estado, requisitos, formacao, conhecimentos, regime, jornada, remuneracao) {
        this._id = id;
        this.logo = logo;
        this.cargo = cargo;
        this.cidade = cidade;
        this.estado = estado;
        this.requisitos = requisitos;
        this.formacao = formacao;
        this.conhecimentos = conhecimentos;
        this.regime = regime;
        this.jornada = jornada;
        this.remuneracao = remuneracao;
    }

}
module.exports = Vaga;