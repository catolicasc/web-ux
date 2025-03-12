# Melhorando a Semântica do Código HTML

## Passo a Passo

1. **Acesse o site**  
   Abra seu navegador e digite o seguinte endereço na barra de pesquisa:  
   [https://catolicasc.github.io/web-ux/aula-031.html](https://catolicasc.github.io/web-ux/aula-031.html)  
   Pressione **Enter** para acessar o conteúdo da página.

2. **Abra o Depurador do Navegador**  
   - Clique com o botão direito em qualquer lugar da página e selecione **"Inspecionar"** ou pressione `F12`.
   - Navegue até a aba **"Elements"** para visualizar o código HTML.

3. **Copie o Código HTML**  
   - No painel do depurador, clique com o botão direito na tag `<html>` e selecione **"Edit as HTML"** ou copie manualmente todo o código dentro da tag `<html>`.

4. **Crie um Arquivo HTML na IDE**  
   - Abra sua **IDE** (VS Code, Sublime Text, etc.).
   - Crie um novo arquivo e nomeie-o como `index.html`.
   - Cole o código copiado dentro desse arquivo.
   - Salve o arquivo.

5. **Refatore as `div`s para o Uso de Tags Semânticas**  
   - Substitua `div`s genéricas por tags semânticas apropriadas, como:
     - `<header>` → Cabeçalho do site.
     - `<nav>` → Navegação principal.
     - `<section>` → Seções de conteúdo.
     - `<article>` → Artigo ou bloco de informação independente.
     - `<aside>` → Conteúdo lateral ou complementar.
     - `<footer>` → Rodapé do site.

6. **Exemplo de Refatoração**  
   **Antes:**  
   ```html
   <div class="header">
       <h1>Bem-vindo ao Site</h1>
   </div>
   <div class="nav">
       <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">Sobre</a></li>
           <li><a href="#">Contato</a></li>
       </ul>
   </div>
   ```
   **Depois:**  
   ```html
   <header>
       <h1>Bem-vindo ao Site</h1>
   </header>
   <nav>
       <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">Sobre</a></li>
           <li><a href="#">Contato</a></li>
       </ul>
   </nav>
   ```

7. **Teste as Alterações**  
   - Abra o arquivo `index.html` no navegador e verifique se a estrutura semântica está correta.
   - Utilize a ferramenta "Inspecionar" para conferir se as tags semânticas estão sendo aplicadas corretamente.

8. **Finalize e Documente as Mudanças**  
   - Comente o código indicando as alterações realizadas.
   - Salve e armazene o arquivo em seu repositório ou ambiente de trabalho.
