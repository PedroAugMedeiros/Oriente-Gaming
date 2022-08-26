import React from 'react';
import * as C from './styles'
import LogoOG from '../../images/OrienteGamingLogo.jpg'

export default function Rules() {

  const premiação = 750.00;
  return (
    <C.Rules>
      <a href='https://www.instagram.com/oriente.gaming/' target="_blank" rel="noreferrer">
        <img src={LogoOG} alt='logo'>
        </img>
      </a>
      <h1>Regras Campeonato CS:GO - Oriente Gaming</h1>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSd1pXXfytsqB3HGWGMMAVacKjtjeMpPfpKTW3JfavETyl4Tzg/viewform' target="_blank" rel="noreferrer">
        FORMULARIO DE INSCRIÇÃO
      </a>
      <div>
        <h2>AVISOS !!!</h2>
        <div className='divLocal'>
          <a className='linkLocal' href="https://goo.gl/maps/gN6PhX4WeKBZ5rMb8" target="_blank" rel="noreferrer">
            LOCAL DO CAMP
          </a>
        </div>
        <h3>
          Cada um é responsável por levar seus equipamentos como teclado, mouse, headset
          somente plug and play (Ou seja, não serão instalados softwares para controle de
          mouse e teclado como synapse, NGenuity, entre outros).
          <br />
          Em caso de dano aos bens materiais da org ou de terceiros, o time será
          responsável pelo dano causado.
          (Cuide bem dos seus periféricos e melhor ainda dos que não forem seus 😉)
        </h3>
      </div>
      <div>
        <h2>Quem pode participar?
        </h2>
        <p className='Method'>Apenas pessoas que residem ou ja residiram em  Belo Oriente, com idade acima de 13 anos.
        </p>
      </div>
      <div> <h2>INSCRIÇÃO
      </h2><p className='Method'>TOTALMENTE GRÁTIS
        </p>
      </div>
      <div>
        <h2>Premiação
        </h2>
        <p>
          {`A premiação para o time vencedor será de ${premiação}R$`}
        </p>
      </div>
      <div>
        <h2>Regras Gerais
        </h2>
        <h3>Capitão
        </h3>
        <p className='Method'>Cada equipe tera que escolher um capitão e informar a organização(vulgo: Gioc7, Felp, Guest, e Diduz )
        </p>
        <h3>
          Método de competição
        </h3>
        <p className='Method'>5 competidores versus 5 competidores
        </p>
        <br />
        <br />
        <p className='Method'>Em caso de problema técnico, o time poderá pausar(N SEI SE DA PRA PAUSAR, PERGUNTA PRO RAMON) e o capitão devera alertar a organização, uso abusadamente ou inapropriadamente , resultara na desclassificação do time</p>
        <br />
        <p className='Method'>Caso a equipe troque de jogadores, tera que ser avisado 1h antes para a organização
        </p>
        <br />
        <p className='Method'>Se ocorrer empate, téra um round extra para a decisão
        </p>
        <br />
        <p className='Method'>Caso uma das equipes evidencie alguma irregularidade da equipe oponente,
          deverá a mesma reportar a situação a staff.
        </p>
        <p className='Method'>
          Qualquer denuncia de uso de hack ou script será analisada pela org, e caso seja confirmado a pessoa será banida de todos os campeonatos da Oriente Gaming pra sempre
          (Não se garante no tiro né espertinho...)
        </p>
      </div>
      <div>
        <h2>1 FASE
        </h2>
        <h3>INICIO: 27/08 as 13:00</h3>
        <p className='Method'>Caso o time não chegue no horario perderá por WO</p>
        <p className='Method'>O modelo da A 1 FASE será eliminatória e MD1
        </p>
        <br />
        <p className='Method'>Quem enfrentara quem, será decidido por sorteio.
        </p>
        <br />
        <p className='Method'>A decisão do lado a ser jogado será decidido por sorteio.
        </p>
        <p>Cada equipe escolhe 2 mapas, o mapa da partida será sorteado, entre os 4 escolhidos</p>
        <br />
      </div>
      <div>
        <h2>2 FASE
        </h2>
        <h3>INICIO: 27/08
          Horario: Quando a 1 FASE acabar
        </h3>
        <p className='Method'>Caso o time não chegue no horario perderá por WO</p>
        <p className='Method'>O modelo da 2 FASE será eliminatória e MD3 os vencedores avançaram para a semi, e os perdedores disputaram a ultima vaga.
        </p>
        <br />
        <p className='Method'>A decisão do lado a ser jogado será decidido por sorteio.
        </p>
        <br />
      </div>
      <div>
        <h2>Final
        </h2>
        <h3>INICIO: 28/08 as 13:00</h3>
        <p className='Method'>Caso o time não chegue no horario perderá por WO</p>
        <p className='Method'>A final será uma MD5
        </p>
        <br />
      </div>
    </C.Rules >
  );
}
