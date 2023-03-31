import { IComments, IPost } from "./idatas.js";

export const posts: IPost[] = [
  {
    id: 1,
    title:
      "UFOP fica na 31ª posição entre as federais do país no IGC e é a 7ª em MG",
    imageUrl: "https://picsum.photos/600/450?random=1",
    body: "Além da divulgação do Conceito Preliminar de Curso (CPC) dos cursos de graduação que participaram do Exame Nacional dos Estudantes (Enade) em 2022",
  },
  {
    id: 2,
    title: "Mostra de Profissões abre inscrições para escolas",
    imageUrl: "https://picsum.photos/600/450?random=2",
    body: "mostra_de_profissoes_2023_destaque.png As escolas já podem se inscrever gratuitamente para a XIII Mostra de Profissões da Universidade Federal",
  },
  {
    id: 3,
    title: "Editais de bolsa com inscrições abertas",
    imageUrl: "https://picsum.photos/600/450?random=3",
    body: "Confira os editais com inscrições abertas: Editais de bolsa Prazo para inscrições Departamento de Engenharia Mecânica 31 de março Alemur  ",
  },
  {
    id: 4,
    title: "DRI divulga edital para curso de espanhol",
    imageUrl: "https://picsum.photos/600/450?random=4",
    body: "O curso de língua espanhola é destinado a iniciantes e vai ser oferecido na modalidade online durante o primeiro semestre de 2023.",
  },
  {
    id: 5,
    title: "Escola de Farmácia faz 184 anos e promove eventos de comemoração",
    imageUrl: "https://picsum.photos/600/450?random=5",
    body: "Em comemoração a seus 184 anos, a Escola de Farmácia promove o VII Congresso de Ciências Farmacêuticas de Ouro Preto (Concifop). O evento",
  },
  {
    id: 6,
    title:
      "UFOP fica na 31ª posição entre as federais do país no IGC e é a 7ª em MG",
    imageUrl: "https://picsum.photos/600/450?random=6",
    body: "Além da divulgação do Conceito Preliminar de Curso (CPC) dos cursos de graduação que participaram do Exame Nacional dos Estudantes (Enade) em 2022",
  },
  {
    id: 7,
    title:
      "UFOP fica na 31ª posição entre as federais do país no IGC e é a 7ª em MG",
    imageUrl: "https://picsum.photos/600/450?random=7",
    body: "Além da divulgação do Conceito Preliminar de Curso (CPC) dos cursos de graduação que participaram do Exame Nacional dos Estudantes (Enade) em 2022",
  },
];

export const comments: IComments[] = [
  {
    id: 1,
    idPost: 1,
    email: "aliquid@email.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 2,
    idPost: 1,
    email: "expound@email.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 3,
    idPost: 2,
    email: "laborious@email.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 4,
    idPost: 2,
    email: "consequuntur@email.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 5,
    idPost: 3,
    email: "inventore@email.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 6,
    idPost: 7,
    email: "voluptate@email.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 7,
    idPost: 3,
    email: "voluptas@email.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 8,
    idPost: 4,
    email: "inventore@email.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 9,
    idPost: 4,
    email: "quisquam@email.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 10,
    idPost: 5,
    email: "inventore@gggg.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 11,
    idPost: 5,
    email: "dolorem@gggg.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 12,
    idPost: 5,
    email: "quisquam@gggg.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 13,
    idPost: 1,
    email: "acompanhada@gggg.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 14,
    idPost: 6,
    email: "Malorum@gggg.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
  {
    id: 15,
    idPost: 6,
    email: "acompanhada@gggg.com",
    body: "Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo",
  },
];

export function buildTemplate(post: IPost) {
  const template: string = ` <div id="1" class="card-item">
  <img src=${post.imageUrl} alt="" />
  <div class="">
    <p class="post-time-info">${new Date().toLocaleDateString()}</p>
    <p class="title">${post.title}</p>
    <div class="resume">
    ${post.body}
    </div>
    <button name = ${post.id} id="teste">Ver mais</button>
  </div>
</div>`;

  return template;
}

export function buildItemTemplate(id: number) {
  const template: string = `
  <div class="items about-post">
  <img class="" src=${posts[id].imageUrl} alt="" />
  <div class="desc">
    <h2 class="title">
    ${posts[id].title}
    </h2>
    <p>
    ${posts[id].body}
    </p>
  </div>
</div>
`;

  return template;
}
