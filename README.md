# Server Side Rendering (SSR)

Esse repositório contém algumas POCs e material para configuração de SSR em Vue, React e Angular, explorando algumas opções existentes no mercado.

## O que é Server Side Rendering

É o processo de renderizar um framework JavaScript no servidor, renderizando HTML e CSS estático. 

É possível fazer SSR com frameworks como React, Preact, Angular, Vue.js, Ember, entre outros. Esses frameworks trabalham no modelo Single Page Application, onde embora a navegação fique fluída e instantânea, o first load da aplicação fica comprometido, devido a necessidade de processar os templates JavaScript no Browser.

SSR consiste basicamente em processar no servidor o que é mais crítico para rodar a página e entregar ao cliente.

## Benefícios

- SEO - Quando os crawlers dos buscadores tentam interpretar a página recebem um index.html sem nada e dão score baixo para a página.
- Desempenho - Deixar todo o processamento da página no lado do cliente em alguns casos, como mobile e dispositivos mais lentos, pode influenciar na perfomance, entregando um pré-loading da página com os dados processados no servidor pode agilizar o first load da página.
- Exibe o first load da aplicação mais rápido


## Server Side Rendering x Client Side Rendering

O processo de renderizar o framework, baixa-lo, buscar os dados para preencher os componentes até exibir para o usuário, é feito tanto via SSR quanto CSR. A principal diferença como podemos ver nos diagramas a seguir, é que no SSR enquanto esses downloads ocorrem o usuário já consegue interagir com a página.

### SSR

![SSR](assets/ssr.png)

### CSR

![CSR](assets/csr.png)


## Conceitos

* Universal app - É quando o código da aplicação consegue rodar em multiplos ambientes
* Isomorphic app - Diz respeito a capacidade da aplicação ser alternada entre client e server sem parter o estado dela.
* SSR - Server side rendering.
* CSR - Client side rendering
* SEO -  Search Engine Optimization, conjunto de tecnicas de otimização que visam alcançar bons rankins orgânicos em buscadores, aumento o potencial de novos clientes encontrarem o site nesses mecanismos de pesquisa.