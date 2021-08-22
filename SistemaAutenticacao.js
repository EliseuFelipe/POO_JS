/*
Ser autenticavel significa ter o metodo autenticar
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        // verifica se o metodo autenticar esta dentro da classe e se o mesmo é um método
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}