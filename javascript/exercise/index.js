class pessoa {
    constructor(nomeDaPessoa, idadeDaPessoa){
        this.nome = nomeDaPessoa;
        this.idade = idadeDaPessoa;
    }
    falar(){
        console.log(this);
    }
};

const pessoa1 = new pessoa('Victor', 19);
pessoa1.falar();