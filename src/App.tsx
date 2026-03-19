import React from 'react'
import SolicitacaoPage from './pages/SolicitacaoPage'

function App() {
  return (
    <div className="min-h-screen bg-light-cinza">
      <header className="bg-light-azul text-white p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-2xl font-lightTitle">LIGHT</h1>
          <p className="text-sm">RECON-BT 2026</p>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <SolicitacaoPage />
      </main>

      <footer className="bg-light-cinza border-t border-light-borda p-4 text-center text-sm text-light-texto">
        Light Serviços de Eletricidade S/A - RECON-BT 2026
      </footer>
    </div>
  )
}

export default App
