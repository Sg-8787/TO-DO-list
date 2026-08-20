let btn = document.querySelector(".btn");
let show = document.querySelector(".show");

btn.addEventListener("click", () => {
    let check = getdata();
    if (check === false) {
        alert("Enter The Message :");
    }
});

function getdata() {
    let textArea = document.querySelector(".text");
        textArea.focus();
    let text = textArea.value

    if (text.length === 0) {
        return false;
    } else {
        add(text);
        textArea.value = "";
        return true;
    }
}

function add(text) {
    let item = document.createElement("div");
    let span = document.createElement("span");
    let editBtn = document.createElement("button");
    let delBtn = document.createElement("button");
    item.className="item"
    span.className="spantext"
    editBtn.innerText = "✎";
    editBtn.className="editbtn"
    delBtn.className="deletebtn"
    delBtn.innerText = "X";
    span.innerText = text;

    editBtn.addEventListener("click", () => {
        let editArea = document.createElement("input");
        editArea.className="editarea"
        editArea.value = span.innerText;

        item.replaceChild(editArea, span);
        editArea.focus();

        editArea.addEventListener("blur", () => {
            span.innerText = editArea.value
            item.replaceChild(span, editArea);
        });
    });
    delBtn.addEventListener("click", () => {
        item.remove();
    });

    item.appendChild(editBtn);
    item.appendChild(span);
    item.appendChild(delBtn);
    show.appendChild(item);
}
