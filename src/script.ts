import { buildItemTemplate, buildTemplate, posts, comments } from "./datas.js";

const back = document.getElementById("back") as HTMLElement;
const commentTag = document.getElementById("comment-tittle") as HTMLElement;

//
//
//  showMore function builds and opens the clicked post
//

function showMore(id: number) {
  back.style.display = "block";
  commentTag.style.display = "block";

  const filtredComments = comments.filter((comm) => {
    return comm.idPost === posts[id].id;
  });

  console.log(filtredComments);

  const main = document.getElementById("main") as HTMLElement;
  const _postItem = document.getElementById("post-item") as HTMLElement;

  while (main.firstElementChild) {
    main.firstElementChild.remove();
  }

  _postItem.insertAdjacentHTML("afterbegin", buildItemTemplate(id));

  const commentArea = document.getElementById("commentary") as HTMLElement;

  filtredComments.map((item) => {
    const template = `
    <div class="user">
    <p>${item.email}</p>
    <p class="comment">
      ${item.body}
    </p>
  </div> `;

    commentArea?.insertAdjacentHTML("beforeend", template);
  });

  back.addEventListener("click", () => {
    _postItem.remove();
    location.reload();
  });
}

//
//
//  buildHome function builds dynamically list of posts
//

function buildHome() {
  const main = document.getElementById("main")! as HTMLElement;
  posts.forEach((value, index) => {
    const item = buildTemplate(value);
    main.insertAdjacentHTML("beforeend", item);
  });

  const btn = document.querySelectorAll("button")!;
  btn.forEach((item, index) => {
    item.addEventListener("click", (e: any) => {
      showMore(Number(e.target.name) - 1);
    });
  });
}

window.addEventListener("load", (e) => {
  back.style.display = "none";
  commentTag.style.display = "none";
  buildHome();
});
