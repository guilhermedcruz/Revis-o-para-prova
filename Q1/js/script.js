//DOOM
const capa = document.querySelector('#capa')
const sinopse = document.querySelector('#sinopse')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

//Eventos 

bt1.addEventListener('click', DVPF)
bt2.addEventListener('click', Homem_aranha)
bt3.addEventListener('click', Resident_Evil)
bt4.addEventListener('click', Rocky)

//ação

function DVPF(){
    capa.src = 'img/de-volta-pro-futuro.jpg'
    sinopse.textContent = `Em De Volta para o Futuro (1985), o adolescente Marty McFly é transportado acidentalmente de volta ao ano de 1955 através de um carro DeLorean modificado, que serve como máquina do tempo criada pelo excêntrico cientista Doc Brown. Preso no passado, Marty interfere sem querer no primeiro encontro de seus pais adolescentes, fazendo com que sua própria mãe se apaixone por ele e colocando em risco a sua própria existência. Para salvar o seu futuro e conseguir retornar a 1985, ele precisa correr contra o tempo para fazer com que seus pais se apaixonem e encontrar uma forma de abastecer o veículo com a energia necessária para a viagem de volta.
    `}
function Homem_aranha(){
    capa.src = 'img/homem-aranha.jpg'
    sinopse.textContent = `Em Homem-Aranha: Um Novo Dia (2026), quatro anos após o feitiço que apagou sua identidade da memória do mundo, um isolado Peter Parker vive como o herói de Nova York em tempo integral. Enquanto lida com a dolorosa solidão de ver seus antigos amigos seguirem em frente sem ele, a imensa pressão do cotidiano desencadeia uma surpreendente mutação física que ameaça sua própria existência. Para piorar, ele precisa cruzar caminhos com aliados inesperados para deter uma nova e poderosa ameaça telepática invisível, forçando-o a descobrir se é possível se adaptar a essa dura realidade sem abrir mão do que o torna o Homem-Aranha.
    `}
function Resident_Evil(){
    capa.src = 'img/RE-filme.jpg'
    sinopse.textContent = `No terror de sobrevivência Resident Evil (2026), dirigido por Zach Cregger, o pacato entregador de medicamentos Bryan se vê preso no pior pesadelo de sua vida ao fazer uma entrega de rotina no Hospital Geral de Raccoon City. O que deveria ser apenas um trabalho comum sob uma forte nevasca rapidamente se transforma em uma luta desesperada pela vida quando um violento surto biológico causado pelo T-Vírus toma as ruas, transformando os cidadãos em criaturas mutantes e sanguinárias. Isolado do resto do mundo, sem entender o que causou o caos e forçado a gerenciar recursos escassos como se estivesse dentro de um videogame, Bryan precisa cruzar corredores sombrios e enfrentar monstros grotescos se quiser sobreviver àquela noite infernal.
    `}
function Rocky(){
    capa.src = 'img/Rocky.jpg'
    sinopse.textContent = `Em Rocky: Um Lutador (1976), o clássico que deu início à lendária franquia, conhecemos Rocky Balboa, um boxeador amador e cobrador de dívidas de um agiota na Filadélfia que vive uma rotina sem grandes perspectivas. Sua vida muda drasticamente quando o atual e carismático campeão mundial dos pesos-pesados, Apollo Creed, decide dar a um lutador desconhecido a chance de disputar o título máximo do boxe em uma grande luta de exibição. Escolhido ao acaso por seu apelido chamativo, "O Garanhão Italiano", Rocky ganha a oportunidade de sua vida e inicia um treinamento exaustivo sob o comando do veterano Mickey, encontrando forças também no amor de Adrian, uma jovem tímida que transforma seu mundo. Diante dos olhos do planeta inteiro, ele entra no ringue determinado não necessariamente a vencer, mas a realizar o feito histórico de aguentar todos os 15 assaltos de pé contra o maior campeão do mundo.
    `}
    
    
    
    