const rightItem = document.querySelectorAll(".right_content_item");
const rightItemBtn = document.querySelectorAll(".right_content_item .btn");

console.log("rightItem", rightItem);
console.log("rightItemBtn", rightItemBtn);

let draggedItem = null;

// xử lý khi bắt đầu kéo các item button
rightItemBtn.forEach((btn) => {
  btn.addEventListener("dragstart", function (e) {
    // khi bắt đầu kéo thì sẽ lấy nội dung của button đó lưu lại
    draggedItem = btn.innerHTML;
  });

  btn.addEventListener("dragend", function (e) {
    // khi kết thúc kéo thì sẽ gán lại nội dung của chỗ đã thả cho button đó
    console.log("dragend", draggedItem);
    btn.innerHTML = draggedItem;
    draggedItem = null;
  });
});

// xử lý khi kéo dragover và thả vào khối container bên phải
rightItem.forEach((item) => {
  item.addEventListener("dragover", function (e) {
    // console.log("dragover", item);
    e.preventDefault();
  });

  // xử lý khi thả vào khối container bên phải
  item.addEventListener("drop", function (e) {
    console.log("dragstart", draggedItem);

    console.log("drop", item.querySelector(".btn").innerHTML);

    // cần clone lại nội dung trước khi thả
    e.preventDefault();
    const cloneItem = item.querySelector(".btn").innerHTML;

    item.querySelector(".btn").innerHTML = draggedItem;

    // gán lại nội dung đã clone để sử dụng khi kéo kết thúc
    draggedItem = cloneItem;
  });
});
