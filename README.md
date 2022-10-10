# Roteiro01-DAC
Atividade referente à disciplina de Desenvolvimento de Aplicações Corporativas

1. Instalar e configurar o Docker em seu computador. (Feito)

2. Execute e explique a execução dos seguintes comandos: <br>
  a. docker container run tomcat <br>
    R: Inicia um container da ferramenta tomcat através de sua imagem que está disponivel de forma remota.<br>
  b. docker container ls <br>
    R: Faz a listagem dos containers que estão em execução no docker.<br>
  c. docker image ls <br>
    R: Faz a listagem das imagens que já foram baixadas no docker.<br>
    
3. Realize os seguintes passos: 
  a. Criei uma aplicação java web ou node e construa o artefato .war. (Feito)
  b. Crie um arquivo Dockerfile. (deve ser inserido o arquivo criado no passo a) (Feito)
  c. Construa uma nova image (deve ser utilizado o arquivo Dockerfile do passo b) (Feito)
  d. Execute o comando: docker container run -p 8080:8080 (Feito)
  
4. No arquivo README.md, inclua uma seção com um resumo das principais vantagens do uso de containers. 
  R: Containers são ambientes inicializados a partir de uma imagem, esse container pode conter aplicações, ferramentas e variantes; vários containers podem   ser iniciados a partir de uma única imagem, isso tudo de forma independete, a principal vantagem dos mesmos consiste na possibilidade de rodar várias       ferramentas ao mesmo tempo em um único ambiente de trabalho, sem a necessidade de virtualizar outra máquina, ou de instalar os pacotes necessários para     execução de determinada aplicação.
  
5. No arquivo README.md, inclua uma seção com as principais dificuldades que você enfrentou para concluir este roteiro.
  R: No geral a principal dificuldade que encontrei para realizar essa atividade foi ter de encontrar vários conteúdos relacionados a utilização do Docker   e como o mesmo funciona, tal ferramenta que não tive um contato desejado anteriormente, logo meu conhecimento sobre ela era bem raso, demorei um pouco     para entender a lógica por trás de tudo, mas no final apenas senti total satisfação em ter aprendido como utilizar uma incrível ferramenta como esta!
