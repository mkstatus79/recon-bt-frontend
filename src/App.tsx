import React from 'react'
import SolicitacaoPage from './pages/SolicitacaoPage'
import PSDPage from './pages/PSDPage'
import SMLCPage from './pages/SMLCPage'
import TermoGeradorPage from './pages/TermoGeradorPage'

type Pagina = 'inicial' | 'solicitacao' | 'psd' | 'smlc' | 'gerador'

function App() {
  const [pagina, setPagina] = React.useState<Pagina>('inicial')

  const renderPagina = () => {
    switch(pagina) {
      case 'solicitacao':
        return <SolicitacaoPage />
      case 'psd':
        return <PSDPage />
      case 'smlc':
        return <SMLCPage />
      case 'gerador':
        return <TermoGeradorPage />
      default:
        return (
          <div className="container-light">
            <div className="formulario-light">
              <div className="formulario-header">
                <h2>RECON-BT 2026</h2>
                <p>Sistema de Automação de Projetos Light</p>
              </div>
              <div className="formulario-corpo">
                <div className="grid-2">
                  <div className="card-light" onClick={() => setPagina('solicitacao')}>
                    <h4>📄 SOLICITAÇÃO DE LIGAÇÃO</h4>
                    <p>Formulário oficial para novos pedidos de ligação</p>
                  </div>
                  <div className="card-light" onClick={() => setPagina('psd')}>
                    <h4>📋 PSD</h4>
                    <p>Pedido de Serviços Diversos</p>
                  </div>
                  <div className="card-light" onClick={() => setPagina('smlc')}>
                    <h4>📊 CARTA SMLC</h4>
                    <p>Opção por medição centralizada (Anexo VI)</p>
                  </div>
                  <div className="card-light" onClick={() => setPagina('gerador')}>
                    <h4>⚡ TERMO DE GERADOR</h4>
                    <p>Geração particular de emergência (Anexo VII)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="App">
      <header className="header-light">
        <div className="container-light">
          <h1>LIGHT</h1>
          <div className="subtitle">RECON-BT 2026</div>
        </div>
      </header>

      <main>
        {pagina !== 'inicial' && (
          <div style={{ padding: '20px' }}>
            <button 
              className="btn-light btn-light-secondary" 
              onClick={() => setPagina('inicial')}
            >
              ← VOLTAR AO INÍCIO
            </button>
          </div>
        )}
        {renderPagina()}
      </main>

      <footer className="footer-light">
        <p>Light Serviços de Eletricidade S/A - RECON-BT 2026</p>
        <p>© 2026 - Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default App
