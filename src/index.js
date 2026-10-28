import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"


const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const magoAntonio = new Mago("Antonio", 4, "fogo", 4, 3)
const magoJulia = new Mago("Julia", 8, "gelo", 7, 10)

const personagens = [magoAntonio, magoJulia, arqueiroBruno]

new PersonagemView(personagens).render()

console.log(personagemJose.vida)