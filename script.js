"use strict";

const inputAdd = document.querySelector(".inputAdd");
const btnAdd = document.querySelector(".btnAdd");
const list = document.querySelector(".list");

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputAdd.value !== "") {
    list.innerHTML += `
        <li class="list__item">
          <input
            type="text"
            class="list__input"
            value="${inputAdd.value}"
            disabled
            autofocus
            size="${inputAdd.value.length}"
          />
          <div class="btn-edit" data-set="edit">
            <i class="fa-solid fa-pen-to-square edit" data-set="edit"></i>
          </div>
          <div class="btn-check" data-set="check">
            <i class="fa-solid fa-check check" data-set="check"></i>
          </div>
          <div class="btn-delete" data-set="delete">
            <i class="fa-solid fa-trash delete" data-set="delete"></i>
          </div>
        </li>
  `;
  } else {
    alert("Please fill the input");
  }

  inputAdd.value = "";
});

function myFunc(e) {
  if (e.target.closest(".btn-edit")) {
    e.target
      .closest(".btn-edit")
      .parentElement.querySelector(".list__input")
      .removeAttribute("disabled");
    e.target
      .closest(".btn-edit")
      .parentElement.querySelector(".list__input")
      .focus();

    document.querySelectorAll(".list__input").forEach((item) => {
      item.addEventListener("focusout", function () {
        if (this.value !== "" && confirm("Are you sure?") === true) {
          this.setAttribute("disabled", "");
          this.setAttribute("value", `${this.value}`);
        }
      });
    });
  }

  if (e.target.closest(".btn-check")) {
    if (confirm("Are you sure?")) {
      e.target
        .closest(".btn-check")
        .parentElement.querySelector(".list__input").style.color =
        "rgba(202, 179, 153, 0.5)";
      e.target
        .closest(".btn-check")
        .parentElement.querySelector(".list__input").style.textDecoration =
        "line-through";
      e.target.closest(".btn-check").parentElement.style.transform =
        "scale(0.95)";
    }
  }

  if (e.target.closest(".btn-delete")) {
    e.target.closest(".btn-delete").parentElement.remove();
  }
}

list.addEventListener("click", myFunc);
