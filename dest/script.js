import { buildItemTemplate, buildTemplate, posts, comments } from "./datas.js";
const back = document.getElementById("back");
const commentTag = document.getElementById("comment-tittle");
//
//
//  showMore function builds and opens the clicked post
//
function showMore(id) {
    back.style.display = "block";
    commentTag.style.display = "block";
    const filtredComments = comments.filter((comm) => {
        return comm.idPost === posts[id].id;
    });
    console.log(filtredComments);
    const main = document.getElementById("main");
    const _postItem = document.getElementById("post-item");
    while (main.firstElementChild) {
        main.firstElementChild.remove();
    }
    _postItem.insertAdjacentHTML("afterbegin", buildItemTemplate(id));
    const commentArea = document.getElementById("commentary");
    filtredComments.map((item) => {
        const template = `
    <div class="user">
    <p>${item.email}</p>
    <p class="comment">
      ${item.body}
    </p>
  </div> `;
        commentArea === null || commentArea === void 0 ? void 0 : commentArea.insertAdjacentHTML("beforeend", template);
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
    const main = document.getElementById("main");
    posts.forEach((value, index) => {
        const item = buildTemplate(value);
        main.insertAdjacentHTML("beforeend", item);
    });
    const btn = document.querySelectorAll("button");
    btn.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            showMore(Number(e.target.name) - 1);
        });
    });
}
window.addEventListener("load", (e) => {
    back.style.display = "none";
    commentTag.style.display = "none";
    buildHome();
});
