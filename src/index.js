import { PersonagemView } from "./components/personagem-view.js";
import { arqueiroMago } from "./modules/arqueiro-mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { Guerreiro } from "./modules/guerreiro.js";
import { Mago } from "./modules/mago.js";
import { Personagem } from "./modules/personagem.js";

const magoAntonio = new Mago('Antonio', 'Fogo', 4, 3);
const magaJulia = new Mago('Julia', 'Gelo', 7, 10);
const arqueiroBruno = new Arqueiro('Bruno', 8);
const arqueiroMagoChico = new arqueiroMago('Chico', 10, 'Ar', 4, 8);
const guerreiroOtavio = new Guerreiro('Otavio', 6)

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiroOtavio];

new PersonagemView(personagens).render();

