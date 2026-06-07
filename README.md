# Trabalho de Conclusão

Este projeto demonstra um serviço simples de pagamentos em JavaScript. Ele foi criado para mostrar como guardar informações de pagamentos e consultar o último registro inserido.

## O que este projeto faz

O projeto possui uma classe chamada `ServicoDePagamento` que:

- aceita um pagamento com três informações principais:
  - `codigoBarras` (o código do boleto)
  - `empresa` (nome da empresa ou prestadora de serviço)
  - `valor` (quanto foi pago)
- armazena cada pagamento dentro de uma lista interna
- permite consultar o último pagamento registrado
- identifica se o pagamento é da categoria `cara` ou `padrão` com base no valor

## Como funciona o código

O arquivo principal está em `src/servicoPagamento.js`.

- `constructor()` cria uma lista vazia para guardar pagamentos
- `pagar(codigoBarras, empresa, valor)` adiciona um novo pagamento à lista
- `consultarUltimoPagamento()` retorna o último pagamento que foi registrado

O serviço também classifica o pagamento em:

- `cara` quando o valor é maior que 100
- `padrão` quando o valor é menor ou igual a 100

## Estrutura do projeto

- `src/servicoPagamento.js` - código do serviço de pagamento
- `test/testServicoPagamento.js` - testes automáticos que verificam se o serviço funciona corretamente
- `package.json` - arquivo que informa como executar os testes e quais dependências são necessárias

## Como instalar e rodar

1. Abra o terminal na pasta do projeto `trabalho-conclusao`.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm test` para rodar os testes.

Se tudo estiver certo, o projeto vai mostrar que os testes passaram.

## O que os testes verificam

O arquivo de testes `test/testServicoPagamento.js` confirma duas situações:

1. quando o valor é maior que 100, o pagamento deve ser registrado com a categoria `cara`
2. quando o valor é menor ou igual a 100, o pagamento deve ser registrado com a categoria `padrão`

Esses testes ajudam a garantir que o serviço esteja funcionando como esperado.

## Exemplo de uso

Este exemplo mostra como criar um serviço de pagamento e registrar um pagamento em JavaScript.

```js
import { ServicoDePagamento } from "./src/servicoPagamento.js";

const servico = new ServicoDePagamento();
servico.pagar("1234-5678-9999", "Corsan", 80);

const ultimo = servico.consultarUltimoPagamento();
console.log(ultimo);
```

Esse código cria o serviço, registra um pagamento e mostra o último pagamento armazenado.

## Arquitetura do projeto

A arquitetura do projeto é simples e clara:

- `src/servicoPagamento.js`
  - contém a classe `ServicoDePagamento`
  - guarda os pagamentos em uma lista interna privada
  - adiciona pagamentos com o método `pagar()`
  - busca o último pagamento com `consultarUltimoPagamento()`
- `test/testServicoPagamento.js`
  - contém os testes que validam o comportamento do serviço
  - garante que a categoria seja definida corretamente como `cara` ou `padrão`
- `package.json`
  - define as dependências do projeto
  - define o comando `npm test` para executar os testes

Fluxo de funcionamento:

1. o usuário cria uma instância de `ServicoDePagamento`
2. chama `pagar()` com `codigoBarras`, `empresa` e `valor`
3. o pagamento é guardado internamente
4. o usuário chama `consultarUltimoPagamento()` para recuperar o último registro
