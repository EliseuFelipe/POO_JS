import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor("Rodrigo", 10000, 12356487);
diretor.cadastrarSenha("minhasenha");

const gerente = new Gerente("Ricardo", 5000, 13545779);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 65765454, "456");

const estaLogado = SistemaAutenticacao.login(diretor, "minhasenha");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(estaLogado, clienteEstaLogado);