# 🎨 RECON-BT 2026 - Frontend de Automação

Interface web para automação de projetos de entrada de energia elétrica conforme o padrão **Light RECON-BT 2026**. Este frontend consome a API do backend e fornece uma experiência intuitiva para engenheiros e técnicos.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Configuração](#instalação-e-configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Integração com Backend](#integração-com-backend)
- [Deploy](#deploy)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## 📌 Sobre o Projeto

O **RECON-BT 2026 Frontend** é a interface gráfica do sistema de automação de projetos elétricos. Desenvolvido com React e Next.js, oferece:

- ✅ Wizard intuitivo para criação de projetos
- ✅ Cálculo automático de demanda (Seção A e B)
- ✅ Dimensionamento de materiais em tempo real
- ✅ Visualização de diagramas unifilares
- ✅ Geração de documentos e formulários
- ✅ Painel de acompanhamento de projetos
- ✅ Integração com assinatura digital GOV.BR

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Next.js** | 14+ | Framework React com SSR |
| **React** | 18+ | Biblioteca UI |
| **TypeScript** | 5+ | Tipagem estática |
| **Tailwind CSS** | 3+ | Estilização |
| **shadcn/ui** | - | Componentes prontos |
| **React Hook Form** | 7+ | Formulários |
| **Zod** | 3+ | Validação |
| **TanStack Query** | 5+ | Gerenciamento de estado |
| **Axios** | 1+ | Cliente HTTP |
| **Recharts** | 2+ | Gráficos |
| **React Flow** | 11+ | Diagramas interativos |
| **date-fns** | 3+ | Manipulação de datas |
| **Jest** | 29+ | Testes |
| **Playwright** | 1+ | Testes E2E |

---

## 📦 Pré-requisitos

- **Node.js 20+** - [Download](https://nodejs.org/)
- **pnpm** (recomendado) ou npm/yarn
- **Backend RECON-BT** rodando em `http://localhost:8000`

```bash
# Instalar pnpm globalmente
npm install -g pnpm
