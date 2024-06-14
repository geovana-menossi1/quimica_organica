import React from 'react';

const Home = () => (
  <main>
    <div className="imagem">
    <img className='banner' src={`${process.env.PUBLIC_URL}/banner.jpg`} alt="banner cientista" />
    </div>
    <div className="funcoes">
      <br></br>
      <br></br>
      <h1 className='org'>Funções Orgânicas</h1>
      <br></br>
      <div className="cards">
        <div className="card red">
          <img src={`${process.env.PUBLIC_URL}/images/acido-carboxilico.jpg`} alt="Ácido carboxílico" />
          <p className="tip">Ácido carboxílico</p>
          <p className="second-text">Função orgânica com grupo funcional -COOH.</p>
        </div>
        <div className="card blue">
          <img src={`${process.env.PUBLIC_URL}/images/alcool.jpg`} alt="Álcool" />
          <p className="tip">Álcool</p>
          <p className="second-text">Função orgânica com grupo funcional -OH.</p>
        </div>
        <div className="card green">
          <img src={`${process.env.PUBLIC_URL}/images/aldeido.jpg`} alt="Aldeído" />
          <p className="tip">Aldeído</p>
          <p className="second-text">Função orgânica com grupo funcional -CHO.</p>
        </div>
        <div className="card red">
          <img src={`${process.env.PUBLIC_URL}/images/cetona.jpg`} alt="Cetona" />
          <p className="tip">Cetona</p>
          <p className="second-text">Função orgânica com grupo funcional -CO-.</p>
        </div>
        <div className="card blue">
          <img src={`${process.env.PUBLIC_URL}/images/ester.jpg`} alt="Éster" />
          <p className="tip">Éster</p>
          <p className="second-text">Função orgânica com grupo funcional -COO-.</p>
        </div>
        <div className="card green">
          <img src={`${process.env.PUBLIC_URL}/images/eter.jpg`} alt="Éter" />
          <p className="tip">Éter</p>
          <p className="second-text">Função orgânica com grupo funcional -O-.</p>
        </div>
        <div className="card red">
          <img src={`${process.env.PUBLIC_URL}/images/fenol.jpg`} alt="Fenol" />
          <p className="tip">Fenol</p>
          <p className="second-text">Função orgânica com grupo funcional -OH ligado a anel aromático.</p>
        </div>
        <div className="card blue">
          <img src={`${process.env.PUBLIC_URL}/images/amida.jpg`} alt="Amida" />
          <p className="tip">Amida</p>
          <p className="second-text">Função orgânica com grupo funcional -CONH2.</p>
        </div>
        <div className="card green">
          <img src={`${process.env.PUBLIC_URL}/images/amina.jpg`} alt="Amina" />
          <p className="tip">Amina</p>
          <p className="second-text">Função orgânica com grupo funcional -NH2.</p>
        </div>
        <div className="card red">
          <img src={`${process.env.PUBLIC_URL}/images/nitrocomposto.jpg`} alt="Nitrocomposto" />
          <p className="tip">Nitrocomposto</p>
          <p className="second-text">Função orgânica com grupo funcional -NO2.</p>
        </div>
        <div className="card blue">
          <img src={`${process.env.PUBLIC_URL}/images/acido-sulfonico.jpg`} alt="Ácido sulfônico" />
          <p className="tip">Ácido sulfônico</p>
          <p className="second-text">Função orgânica com grupo funcional -SO3H.</p>
        </div>
        <div className="card green">
          <img src={`${process.env.PUBLIC_URL}/images/haleto.jpg`} alt="Haleto de alquila" />
          <p className="tip">Haleto de alquila</p>
          <p className="second-text">Função orgânica com grupo funcional -X (X = F, Cl, Br, I).</p>
        </div>
      </div>
    </div>
    <div className="classificacao">
      <br></br>
      <br></br>
      <h1 className='class'>Classificação de Carbonos</h1>
      <br></br>
      <div className="cards-classic">
        <div className="card-classic">
          <img src={`${process.env.PUBLIC_URL}/images/c1.jpg`} alt="Carbono primário" />
          <div className="category-classic">Carbono primário</div>
          <div className="heading-classic">Carbono ligado a um único outro carbono.</div>
        </div>
        <div className="card-classic">
          <img src={`${process.env.PUBLIC_URL}/images/c2.jpg`} alt="Carbono secundário" />
          <div className="category-classic">Carbono secundário</div>
          <div className="heading-classic">Carbono ligado a dois outros carbonos.</div>
        </div>
        <div className="card-classic">
          <img src={`${process.env.PUBLIC_URL}/images/c3.jpg`} alt="Carbono terciário" />
          <div className="category-classic">Carbono terciário</div>
          <div className="heading-classic">Carbono ligado a três outros carbonos.</div>
        </div>
        <div className="card-classic">
          <img src={`${process.env.PUBLIC_URL}/images/c4.jpg`} alt="Carbono quaternário" />
          <div className="category-classic">Carbono quaternário</div>
          <div className="heading-classic">Carbono ligado a quatro outros carbonos.</div>
        </div>
      </div>
    </div>
    <div className='cadeias'>
      <br></br>
      <br></br>
      <h1 className='cad'>Classificação de Cadeias Carbônicas</h1>
      <br></br>
      <div className="cards-cadeias">
        <div className="card-carbono">
          <p className="heading-carbono">Tipo de cadeia aberta</p>
          <p>Cadeia carbônica sem</p>
          <p>fechamento.</p>
        </div>
        <div className="card-carbono">
          <p className="heading-carbono">Tipo de cadeia fechada</p>
          <p>Cadeia carbônica com</p>
          <p>fechamento.</p>
        </div>
        <div className="card-carbono">
          <p className="heading-carbono">Cadeia linear</p>
          <p>Cadeia carbônica sem</p>
          <p>ramificações.</p>
        </div>
        <div className="card-carbono">
          <p className="heading-carbono">Cadeia ramificada</p>
          <p>Cadeia carbônica com</p>
          <p>ramificações.</p>
        </div>
        <div className="card-carbono">
          <p className="heading-carbono">Cadeia homogênea</p>
          <p>Cadeia carbônica com</p>
          <p>átomos iguais.</p>
        </div>
        <div className="card-carbono">
          <p className="heading-carbono">Cadeia heterogênea</p>
          <p>Cadeia carbônica com</p>
          <p>átomos diferentes.</p>
        </div>
        <div className="card-carbono">
          <p className="heading-carbono">Cadeia saturada</p>
          <p>Cadeia carbônica com</p>
          <p>ligações simples.</p>
        </div>
        <div className="card-carbono">
          <p className="heading-carbono">Cadeia insaturada</p>
          <p>Cadeia carbônica com</p>
          <p>ligações duplas ou triplas.</p>
        </div>
      </div>
    </div>
    <div class="nomenclatura">
      <h1 class='nom'>Nomenclatura</h1>
      <div className='row'>
        <div className='col'>
          <div class="notification one">
            <div class="notiglow"></div>
            <div class="notiborderglow"></div>
            <div class="notititle">Sufixo</div>
            <div class="notibody">
            <ul className='lista'>
                 <li className='lista2'>Álcool - ol</li>
                 <li className='lista2'>Ácido Carboxílico - oico</li>
                 <li className='lista2'>Aldeído - al</li>
                 <li className='lista2'>Cetona - ona</li>
                 <li className='lista2'>Éster - ato</li>
                 <li className='lista2'>Éter - oxi</li>
                 <li className='lista2'>Fenol - ol</li>
                 <li className='lista2'>Amida - amida</li>
                 <li className='lista2'>Amina - amina</li>
                 <li className='lista2'>Nitrocomposto - nitro</li>
                 <li className='lista2'>Ácido Sulfônico - sulfônico</li>
                 <li className='lista2'>Haletos de Alquila - ila</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col'>
          <div class="notification dois">
            <div class="notiglow"></div>
            <div class="notiborderglow"></div>
            <br></br>
            <div class="notititle">Infixo</div>
            <div class="notibody">
              <ul className='lista'>
                <li className='lista2'>normal - an</li>
                <li className='lista2'>dupla - en</li>
              </ul>
              <ul className='lista'>
                  <li className='lista2'>tripla - in</li>
                  <li className='lista2'>2 duplas - dien</li>
                </ul>
            </div>
          </div>
          <div class="notification tres">
            <div class="notiglow"></div>
            <div class="notiborderglow"></div>
            <br></br>
            <div class="notititle">Prefixo</div>
            <div class="notibody">
              <ul className='lista'>
                 <li className='lista2'>1C - met</li>
                 <li className='lista2'>2C - et</li>
                 <li className='lista2'>3C - prop</li>
                 <li className='lista2'>4C - but</li>
                 <li className='lista2'>5C - pent</li>
              </ul>
              <ul className='lista'>
                 <li className='lista2'>6C - hex</li>
                 <li className='lista2'>7C - hept</li>
                 <li className='lista2'>8C - oct</li>
                 <li className='lista2'>9C - non</li>
                 <li className='lista2'>10C - dec</li>
              </ul>
            </div>
          </div></div>
      </div>
    </div>
  </main>
);

export default Home;
