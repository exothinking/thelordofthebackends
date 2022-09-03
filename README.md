# thelordofthebackends
One server to serve them all

Brincadeiras à parte, a ideia do projeto é um servidor com respostas prontas para serem consumidas por front-ends em fase de teste.

## Como instalar?
- Clone o repo.
- `npm install`
- `npm start`

## Como usar?
Crie arquivos para as rotas dentro de `/routes` nos moldes de `user.js`.
Cada arquivo deve exportar uma lista com no mínimo uma rota.
Cada rota é um objeto simples com 3 parâmetros: 
- `verb` indica o verbo HTTP
- `path` é a rota em si à partir de `/`
- `method` é a função chamada quando esse `path` for invocado nesse `verb`
### Dica:
Nos exemplos tem um:
```
if(req.query.error) {
  return res.status(req.query.error)
    .send([`Opa, você pediu por um erro de status: ${req.query.error}?`]);
}
```
Para que você possa decidir lá pelo front-end quando quer receber um erro ou não.

## Você pode testar as rotas alterando o arquivo `selfTest.mjs`
- Adicione as chamadas que quer testar nos moldes do que já tem ali.
- Inicie o servidor caso ainda não o tenha feito `npm start`
- Depois de qualquer outro terminal você pode chamar `node ./selfTest.js`

Pronto. Em 3 min você estará criando as rotas de APIs que precisa para testar chamadas e respostas no seu front-end.

Use e abuse, crie novos tratamentos de erro, novas funcionalidades, isso aqui é só uma base.