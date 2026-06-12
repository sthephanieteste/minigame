# Nossa História 📚

Um mapa de aventura interativo que conta a história de um casal através de uma experiência imersiva estilo RPG.

## 🎮 Conceito

O projeto simula um mapa de exploração onde cada local representa um capítulo importante da história. Os usuários navegam pelo mapa, descobrem locais e abrem capítulos contendo fotos, vídeos, mensagens e memórias.

## 🛠 Tecnologias

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Supabase** - Backend & Database

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Layout/
│   ├── Map/
│   ├── Chapter/
│   ├── Common/
│   └── UI/
├── pages/              # Páginas principais
├── services/           # Integração com Supabase
├── store/              # Estado global (Zustand)
├── types/              # Tipagens TypeScript
├── utils/              # Funções auxiliares
├── hooks/              # Custom Hooks
├── styles/             # Estilos globais
├── App.tsx
└── main.tsx
```

## 🚀 Quick Start

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Iniciar desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🗺 Estrutura do Mapa

### Regiões Principais

1. **Rio de Janeiro** - Origem da história
2. **A Viagem** - A jornada até encontro
3. **UTFPR** - Onde se conheceram
4. **Della Pazetti** - Saídas e momentos especiais
5. **Cristo Redentor de Cornélio Procópio** - O pedido (destaque especial)
6. **UTFPR Guarapuava** - Jornada além do campus
7. **O Futuro** - Próxima grande aventura (desbloqueável)

## 📖 Sistema de Capítulos

- Capítulo 1: O Encontro
- Capítulo 2: As Conversas
- Capítulo 3: A Aproximação
- Capítulo 4: Os Momentos Especiais
- Capítulo 5: Hoje

## 🎯 Funcionalidades

- ✅ Mapa interativo com exploração
- ✅ Sistema de capítulos
- ✅ Galeria de fotos
- ✅ Sistema de conquistas
- ✅ Nível e XP do casal
- ✅ Música de fundo
- ✅ Contador de dias
- ✅ Cartas secretas
- ✅ Álbum de memórias

## 📱 Componentes Principais

### Layout
- Header com informações do casal
- Navigation Bar inferior
- Map Container
- Chapter Viewer
- Album Gallery

### Map
- Renderização do mapa com SVG/Canvas
- Marcadores de locações
- Popups informativos
- Efeitos de iluminação

### Interação
- Click em locações
- Abrir capítulos
- Explorar álbum
- Ver conquistas

## 🔧 Configuração do Supabase

### Tabelas Necessárias

```sql
-- Locações
CREATE TABLE locations (...)

-- Capítulos
CREATE TABLE chapters (...)

-- Fotos
CREATE TABLE photos (...)

-- Memórias
CREATE TABLE memories (...)

-- Conquistas
CREATE TABLE achievements (...)

-- Configurações
CREATE TABLE settings (...)
```

## 📝 Licença

Privado - Projeto pessoal
