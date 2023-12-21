// Lấy danh sách các mục có thể kéo
const draggables = document.querySelectorAll(".right_content");
let dragSrcEl = null;

console.log("draggables", draggables);

function handleDragStart(e) {
  console.log("drag start");
  this.style.opacity = "0.4";
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
  console.log("drag over");
  if (e.preventDefault) {
    e.preventDefault(); // Ngăn chặn sự kiện mặc định để cho phép thả
  }
  return false;
}

function handleDragEnter() {
  console.log("drag enter");
  this.classList.add("over");
}

function handleDragLeave() {
  console.log("drag leave");
  this.classList.remove("over");
}

function handleDrop(e) {
  console.log("drag drop");
  if (e.stopPropagation) {
    e.stopPropagation(); // Ngăn chặn sự kiện "drop" từ lan sang ngoài
  }

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }

  return false;
}

function handleDragEnd() {
  console.log("drag end");
  this.style.opacity = "1";
  draggables.forEach(function (draggable) {
    draggable.classList.remove("over");
  });
}

// Thêm các sự kiện kéo và thả cho mỗi mục có thể kéo
draggables.forEach(function (draggable) {
  draggable.addEventListener("dragstart", handleDragStart);
  draggable.addEventListener("dragenter", handleDragEnter);
  draggable.addEventListener("dragover", handleDragOver);
  draggable.addEventListener("dragleave", handleDragLeave);
  draggable.addEventListener("drop", handleDrop);
  draggable.addEventListener("dragend", handleDragEnd);
});
