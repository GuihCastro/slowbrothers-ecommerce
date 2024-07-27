# Slowbrothers TCG | Ecommerce

Bem-vindo ao repositório do projeto de ecommerce para Card Games focado em Pokémon TCG! Este projeto foi desenvolvido como uma aplicação de front-end para ser implementada no site do meu cliente.

## Visão Geral

Este projeto é uma loja online onde os usuários podem visualizar, procurar e comprar cartas do Pokémon TCG. A aplicação foi desenvolvida em React com Typescript e Sass.

O projeto ainda não tem uma integração com banco de dados e não possui a api correta para as cartas do card game, então usei alguns mockups apenas para a estruturação do site.

## Funcionalidades

- **Catálogo de Produtos**: Visualização de uma lista de cartas do Pokémon TCG.
- **Detalhes do Produto**: Modal para visualização da carta em tamanho maior.
- **Responsividade**: Interface adaptável para diferentes tamanhos de tela (ainda sendo implementada).

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida e moderna.
- **Axios**: Cliente HTTP para consumo de dados de um arquivo JSON.
- **Sass**: Pré-processador CSS para estilos mais dinâmicos e organizados.
- **React Icons**: Biblioteca de ícones para o React.

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/pokemon-tcg-ecommerce.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd pokemon-tcg-ecommerce
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

## Estrutura do Projeto

```
pokemon-tcg-ecommerce/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
|	├── services/
|	|	├── api/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── package.json
├── tsconfig.json
└── ...
```
