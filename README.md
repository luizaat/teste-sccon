# SCCON Busca - Sistema de Consulta de Endereços

Sistema para busca de endereços via CEP utilizando a API do ViaCEP, desenvolvido com Angular 19 e Angular Material 3.

## Abordagens
- Tratei esse projeto como, além de um teste, um estudo pessoal para aprender mais sobre as novas versões do Angular, utilização de Signals e das novas diretrizes que o framework nos fornece. Também queria trabalhar com os novos tokens de costumização dos componentes do Angular Material 3. Esse projeto seria facilmente adaptado para versões mais antigas, substituindo diretrizes, adicionando modulos e alterando o funcionamento de alguns componentes do Material.
- Optei por não realizar os adicionais do teste, mais por falta de tempo e agenda apertada, mas também por achar que alguns deles não agregam realmente ao todo.

## 📋 Funcionalidades

- ✅ **Busca de CEP**: Consulta endereços através do CEP utilizando API ViaCEP
- ✅ **Listagem de Resultados**: Exibição em tabela responsiva com CEP, Endereço e Data da busca
- ✅ **Interface Responsiva**: Design adaptativo para desktop, tablet e mobile
- ✅ **Material Design 3**: UI moderna seguindo as diretrizes do Material Design
- ✅ **Validação de Formulários**: Reactive Forms com validação de CEP
- ✅ **Roteamento**: Navegação entre páginas Home e Endereços

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Angular 19 (Standalone Components)
- **UI/UX**: Angular Material 3 com tema customizado
- **Formulários**: Reactive Forms
- **HTTP**: HttpClient com RxJS para consumo de APIs
- **Estilização**: SCSS com design responsivo
- **API Externa**: [ViaCEP](https://viacep.com.br/) para consulta de endereços

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18.x ou superior)
- **npm** (versão 9.x ou superior) ou **pnpm** (recomendado)
- **Angular CLI** (versão 19.x)

### Verificar versões instaladas:

```bash
node --version
npm --version
ng version
```

### Instalar Angular CLI (se necessário):

```bash
npm install -g @angular/cli@19
```

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd teste-sccon
```

### 2. Instale as dependências

```bash
# Usando npm
npm install

# Ou usando pnpm (recomendado)
pnpm install
```

### 3. Configuração do ambiente

O projeto utiliza a API pública do ViaCEP, não necessitando configurações adicionais de ambiente.

## 💻 Desenvolvimento

### Servidor de desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
# Usando Angular CLI
ng serve

# Ou usando npm/pnpm scripts
npm run start
# ou
pnpm start
```

Acesse `http://localhost:4200/` no navegador. A aplicação recarregará automaticamente quando houver mudanças nos arquivos.

### Estrutura do projeto

```
src/
├── app/
│   ├── core/                     # Módulos centrais (guards, interceptors)
│   ├── features/                 # Funcionalidades da aplicação
│   │   ├── home/                # Página inicial
│   │   └── enderecos/           # Sistema de busca de CEP
│   │       ├── components/      # Componentes específicos
│   │       ├── interfaces/      # Tipagens TypeScript
│   │       └── services/        # Serviços para API
│   ├── shared/                  # Componentes compartilhados
│   │   └── components/
│   │       └── header/          # Cabeçalho da aplicação
│   ├── app.config.ts           # Configuração da aplicação
│   ├── app.routes.ts           # Definição de rotas
│   └── app.ts                  # Componente raiz
├── styles.scss                 # Estilos globais e tema Material
└── public/                     # Arquivos estáticos
    └── logo.png               # Logo da aplicação
```

## 🔨 Build e Deploy

### Build para produção

```bash
# Build otimizado para produção
ng build --configuration=production

# Ou usando npm/pnpm
npm run build
# ou
pnpm build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Build para desenvolvimento

```bash
ng build
```

### Servidor de produção local

Para testar o build de produção localmente:

```bash
# Instalar serve globalmente (se necessário)
npm install -g serve

# Servir arquivos da pasta dist
serve -s dist/teste-sccon
```
## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start          # Servidor de desenvolvimento
npm run build          # Build para produção
npm run watch          # Build em modo watch
npm run test           # Testes unitários

# Linting e formatação
ng lint                # Verificar código com ESLint
ng format              # Formatar código com Prettier
```
## 📄 Licença

Este projeto foi desenvolvido como teste técnico para a SCCON.

## 👨‍💻 Desenvolvedor

**Luiz Pelegrini**
- Teste realizado em: 29/07/2025
- Versão do Angular: 19.x
- Versão do Material: 19.x
