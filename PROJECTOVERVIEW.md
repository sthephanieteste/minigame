# 🎮 Nossa História - Projeto Completo ✨

## 📖 Visão Geral

**Nossa História** é uma aplicação web interativa que funciona como um **mapa de aventura imersivo** contando a história de um casal. O projeto simula uma experiência de RPG de exploração onde os usuários navegam por diferentes locações importantes, descobrem capítulos da sua história e acessam memórias especiais através de fotos, vídeos, mensagens e textos.

## 🚀 Status do Projeto

✅ **Estrutura Base Completa**
- ✅ Configuração Vite + TypeScript
- ✅ Sistema de tipos (interfaces)
- ✅ Estado global (Zustand)
- ✅ Rotas (React Router)
- ✅ Styling (Tailwind CSS + Framer Motion)
- ✅ Integração Supabase (cliente)

✅ **Componentes Implementados**
- ✅ Layout Principal (Header, Navigation, MainLayout)
- ✅ Mapa Interativo (InteractiveMap)
- ✅ Visualizador de Capítulos (ChaptersView, ChapterDetail)
- ✅ Galeria de Fotos (AlbumView)
- ✅ Gerenciador de Conquistas (AchievementsList)
- ✅ Painel de Configurações (SettingsView)
- ✅ Visualizador de Mensagens (MessagesView)
- ✅ Componentes UI (Button, Modal, LoadingSpinner, Notification)

✅ **Serviços e Hooks**
- ✅ Serviços Supabase (locations, chapters, achievements, memories, settings)
- ✅ Custom Hooks (useLocations, useChapters, useAchievements, useMemories)

✅ **Utilitários**
- ✅ Constantes da aplicação
- ✅ Funções de data
- ✅ Validadores
- ✅ Utilitários de array e string
- ✅ Storage local
- ✅ Analytics
- ✅ Tratamento de erros
- ✅ Sistema de design

⏳ **Próximas Fases**
- [ ] Integração com dados reais do Supabase
- [ ] Sistema de desbloqueio de capítulos
- [ ] Sistema de XP e level up
- [ ] Música de fundo e efeitos sonoros
- [ ] Upload de mídia
- [ ] Autenticação de usuários
- [ ] Análise de performance
- [ ] Testes automatizados
- [ ] Deploy em produção

## 📁 Estrutura do Projeto

```
nossa-historia/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── MainLayout.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── index.ts
│   │   ├── Map/
│   │   │   ├── MapView.tsx
│   │   │   ├── InteractiveMap.tsx
│   │   │   └── LocationCard.tsx
│   │   ├── Chapter/
│   │   │   ├── ChapterList.tsx
│   │   │   ├── ChaptersView.tsx
│   │   │   └── ChapterDetail.tsx
│   │   ├── Common/
│   │   │   ├── AchievementsList.tsx
│   │   │   ├── AlbumView.tsx
│   │   │   ├── MessagesView.tsx
│   │   │   ├── SettingsView.tsx
│   │   │   ├── StatsPanel.tsx
│   │   │   └── PageRouter.tsx
│   │   └── UI/
│   │       ├── Button.tsx
│   │       ├── Modal.tsx
│   │       ├── LoadingSpinner.tsx
│   │       ├── Notification.tsx
│   │       └── ComponentShowcase.tsx
│   ├── services/
│   │   ├── supabase.ts
│   │   ├── locationsService.ts
│   │   ├── chaptersService.ts
│   │   ├── achievementsService.ts
│   │   ├── memoriesService.ts
│   │   └── settingsService.ts
│   ├── store/
│   │   └── appStore.ts
│   ├── hooks/
│   │   ├── useLocations.ts
│   │   ├── useChapters.ts
│   │   ├── useAchievements.ts
│   │   └── useMemories.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── dateUtils.ts
│   │   ├── validators.ts
│   │   ├── stringUtils.ts
│   │   ├── arrayUtils.ts
│   │   ├── storage.ts
│   │   ├── analytics.ts
│   │   ├── errorHandler.ts
│   │   └── designSystem.ts
│   ├── data/
│   │   └── mockData.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── PROJECT_SETUP.md
├── CONTRIBUTING.md
└── DATABASE_SETUP.sql
```

## 🎨 Paleta de Cores

| Nome | Cor | Uso |
|------|-----|-----|
| Dark Background | #0a0e27 | Fundo principal |
| Dark Secondary | #1a1f3a | Fundos secundários |
| Accent Gold | #d4af37 | Textos e borders principais |
| Accent Rose | #ff6b9d | Destaques, elementos especiais |
| Accent Teal | #4ecdc4 | Acentos secundários |

## 🛠 Tecnologias Utilizadas

- **Frontend Framework**: React 18
- **Linguagem**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animações**: Framer Motion
- **State Management**: Zustand
- **Routing**: React Router v6
- **Backend**: Supabase
- **Fonts**: Merriweather (serif), Inter (sans)

## 🚀 Como Começar

### 1. Clonar o Repositório
```bash
git clone https://github.com/sthephanieteste/minigame.git
cd minigame
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar Variáveis de Ambiente
```bash
cp .env.example .env.local
```

Edite `.env.local` com suas credenciais Supabase:
```
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
```

### 4. Configurar Banco de Dados (Opcional)
Acesse seu Supabase e execute o SQL em `DATABASE_SETUP.sql`

### 5. Iniciar Desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📱 Páginas e Funcionalidades

### 🗺️ Mapa Interativo
- Grid responsivo com todas as locações
- Clique em uma localização para ver detalhes
- Pop-up com informações e memórias
- Status de bloqueio/desbloqueio
- Animações ao hover

### 📖 Capítulos
- Visualização de todos os capítulos
- Timeline com progresso
- Indicador de capítulos desbloqueados
- Navegação de memórias
- Diferentes tipos de conteúdo (foto, vídeo, texto, mensagem, áudio)

### 🖼️ Álbum
- Galeria de fotos/memórias
- Grid responsivo
- Overlay com informações ao hover
- Filtros por capítulo (futuro)

### 🏆 Conquistas
- Exibição de todas as conquistas
- Status de desbloqueio
- Raridade visual
- Filtro de desbloqueadas

### 💬 Mensagens
- Conversas importantes
- Timeline de trocas de mensagens
- Adicionar novas mensagens
- Emojis e data

### ⚙️ Configurações
- Toggle música/efeitos sonoros
- Toggle animações
- Seleção de idioma
- Seleção de tema

## 🎯 Dados Simulados

O projeto inclui `mockData.ts` com dados de exemplo para as seguintes locações:

1. **Rio de Janeiro** - Origem
2. **A Viagem** - Jornada
3. **UTFPR** - Onde se conheceram
4. **Della Pazetti** - Saídas
5. **Cristo Redentor de Cornélio Procópio** - O pedido ✨
6. **UTFPR Guarapuava** - Jornada além
7. **O Futuro** - Próxima aventura 🔒

## 📊 Store Global (Zustand)

O projeto usa Zustand para gerenciar:
- **Stats**: Nível do casal, XP, dias juntos, status
- **Settings**: Preferências do usuário
- **UI State**: Localização selecionada, capítulo selecionado, menu atual
- **Notifications**: Mensagens ao usuário

## 🔗 Integração Supabase

### Tabelas Necessárias
- `locations` - Locações do mapa
- `chapters` - Capítulos da história
- `memories` - Memórias em cada capítulo
- `achievements` - Conquistas do casal
- `settings` - Configurações do usuário

### Serviços Disponíveis
- `locationsService` - CRUD de locações
- `chaptersService` - CRUD de capítulos
- `memoriesService` - CRUD de memórias
- `achievementsService` - CRUD de conquistas
- `settingsService` - Gerenciamento de configurações

## 💡 Padrões de Código

### Componentes Funcionais com TypeScript
```typescript
interface ComponentProps {
  prop: string
}

export default function Component({ prop }: ComponentProps) {
  return <div>{prop}</div>
}
```

### Hooks Customizados
```typescript
export const useHook = () => {
  const [state, setState] = useState(initialValue)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  return { state, loading, error }
}
```

### Serviços
```typescript
export const service = {
  async method(): Promise<ReturnType> {
    try {
      // Implementação
      return result
    } catch (error) {
      console.error('Error:', error)
      return defaultValue
    }
  }
}
```

## 🎬 Animações com Framer Motion

O projeto usa Framer Motion para:
- Fade-in ao carregar componentes
- Scale e hover effects em botões
- Slide de modais
- Carrossel de memórias
- Animações de progresso
- Movimentos fluidos e naturais

## 📱 Responsividade

Desenvolvido mobile-first usando Tailwind breakpoints:
- `sm` - 640px: Tablets
- `md` - 1024px: Tablets grandes
- `lg` - 1280px: Desktops
- `xl` - 1536px: Desktops grandes

## ✨ Features Especiais

1. **Mapa Visual Interativo**: Visualize toda a história em um mapa
2. **Sistema de Capítulos**: Organize a história em capítulos temáticos
3. **Múltiplos Tipos de Mídia**: Fotos, vídeos, áudio, textos
4. **Sistema de Conquistas**: Desbloqueie marcos importantes
5. **Nível do Casal**: Ganhe XP e suba de nível
6. **Contador de Dias**: Veja quantos dias estão juntos
7. **Responsivo**: Funciona em qualquer dispositivo
8. **Sem Hardcode**: Todos os dados vêm do Supabase

## 📚 Documentação Adicional

- `README.md` - Documentação principal
- `PROJECT_SETUP.md` - Guia de configuração do projeto
- `CONTRIBUTING.md` - Guia de contribuição
- `DATABASE_SETUP.sql` - Schema do banco de dados

## 🎓 Aprendizados e Melhores Práticas

1. **Type Safety**: TypeScript para evitar erros em tempo de desenvolvimento
2. **Component Composition**: Componentes pequenos e reutilizáveis
3. **State Management**: Zustand para estado global simples
4. **Custom Hooks**: Lógica reutilizável em hooks
5. **Service Layer**: Separação de preocupações com serviços
6. **Error Handling**: Tratamento consistente de erros
7. **Responsive Design**: Mobile-first approach
8. **Performance**: Lazy loading e otimizações

## 🔮 Ideias Futuras

- [ ] Compartilhamento de histórias
- [ ] Edição de memórias
- [ ] Sistema de reações/comentários
- [ ] Timeline interativa
- [ ] Modo offline
- [ ] Exportação de PDF
- [ ] Print-friendly layout
- [ ] Dark/Light mode
- [ ] Temas customizáveis
- [ ] Notificações em tempo real

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório GitHub!

---

**Desenvolvido com ❤️ para celebrar histórias especiais** ✨
