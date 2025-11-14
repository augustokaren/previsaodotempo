# previsaodotempo

# ⚡️ DevClub: Aplicação de Previsão do Tempo (React/Vite)

[![Badge das Tecnologias](https://img.shields.io/badge/Tecnologias-React%20%7C%20Vite%20%7C%20CSS-blue?style=flat-square)](link-opcional)
[![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success?style=flat-square)](link-opcional)

Este é um projeto **Full Stack Frontend** desenvolvido com **React** e **Vite** para buscar e exibir dados de previsão do tempo em tempo real e detalhar o clima para os próximos 5 dias, consumindo a API pública **OpenWeatherMap**.

## ✨ Funcionalidades em Destaque

O projeto foi construído com foco em usabilidade, precisão e eficiência.

### 1. Clima Atual (Informações Detalhadas)
* **Busca por Cidade:** Permite pesquisar o clima de qualquer cidade do mundo.
* **Dados Detalhados:** Exibe temperatura arredondada, descrição do clima, velocidade do vento, umidade, pressão e sensação térmica.
* **Melhoria de Usabilidade (UX):** A data e hora da última medição são formatadas no padrão brasileiro (`pt-BR` - ex: "sexta-feira, 14 de novembro de 2025 às 16:55"), garantindo que o usuário saiba exatamente quando os dados foram atualizados.

### 2. Previsão para os Próximos 5 Dias
* Exibe um card de resumo para os próximos 5 dias.
* **Lógica de Agrupamento:** Solução implementada para filtrar os 40 itens de previsão (retornados a cada 3h pela API) e exibir apenas uma leitura por dia subsequente.

## 💡 Desafios Técnicos e Soluções (O que Aprendi)

| Desafio Técnico | Solução Implementada | Habilidade Demonstrada |
| :--- | :--- | :--- |
| **Agrupamento de Dados da API** | Implementação de lógica para filtrar o array da API (`list`) por data e garantir que apenas uma leitura por dia único fosse renderizada na seção de 5 dias. | Lógica de Arrays e Manipulação de Dados |
| **Formatação de Data e Hora** | Utilização de `toLocaleDateString('pt-BR', {...})` para converter o *timestamp* UNIX da API em um formato de data/hora nativo, legível e completo em português. | Manipulação da API `Date` em JavaScript |
| **Tratamento de Assincronicidade** | Uso de `Promise.all` para buscar simultaneamente os dados de "Clima Atual" e "Previsão 5 Dias" com apenas um clique, reduzindo a latência e o tempo de carregamento da aplicação. | Gerenciamento de Promises e Eficiência |
| **Estrutura de Componentes** | Organização do código em componentes reutilizáveis (`WeatherInformations`, `WeatherInformations5Days`) para manter a aplicação escalável e limpa. | Arquitetura React e Componentização |

## ⚙️ Como Rodar o Projeto Localmente

Para testar esta aplicação em sua máquina, siga os passos abaixo:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/augustokaren/previsaodotempo](https://github.com/augustokaren/previsaodotempo)
    cd previsao-do-tempo-react
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configuração da API:**
    * Crie uma conta no [OpenWeatherMap](https://openweathermap.org/) para obter sua chave (API Key).
    * Insira sua chave API na variável `API_KEY` dentro do arquivo `src/App.jsx`.

4.  **Inicie a Aplicação:**
