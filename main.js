//create const for our form, input and list elements selected based on IDs
window.addEventListener("load", () => {
  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#new-input");
  const list_el = document.querySelector("#todos");

  //Wait for the submit of form
  form.addEventListener("submit", (e) => {
    //prevent form submission from auto page refresh
    e.preventDefault();
    const todo = input.value;
    if (!todo) {
      alert("Fill out the to do item.");
      return;
    }

    //Below we are creating the commented out html section w/ js
    //Create a const w/ element div
    const todo_el = document.createElement("div");
    //assign the class todo to this element
    todo_el.classList.add("todo");

    //another const for content that is a div and has class of content
    const todo_content_el = document.createElement("div");
    todo_content_el.classList.add("content");

    //add the content to the parent div
    todo_el.appendChild(todo_content_el);

    //input element with class text and value equal to the todo. Read only so it cannot be changed unless edit button is clicked
    const todo_input_el = document.createElement("input");
    todo_input_el.classList.add("text");
    todo_input_el.type = "text";
    todo_input_el.value = todo;
    todo_input_el.setAttribute("readonly", "readonly");

    //add to the parent div
    todo_content_el.appendChild(todo_input_el);

    //actions div element for our buttons with class actions
    const todo_actions_el = document.createElement("div");
    todo_actions_el.classList.add("actions");

    //button element with class edit assign the innerHTML to Edit
    const todo_edit_el = document.createElement("button");
    todo_edit_el.classList.add("edit");
    todo_edit_el.innerHTML = "Edit";

    //button element with class delete assign the innerHTML to Delete
    const todo_delete_el = document.createElement("button");
    todo_delete_el.classList.add("delete");
    todo_delete_el.innerHTML = "Delete";

    //add both buttons to the parent div
    todo_actions_el.appendChild(todo_edit_el);
    todo_actions_el.appendChild(todo_delete_el);

    //add actions element to parent
    todo_el.appendChild(todo_actions_el);

    //add list element to the parent
    list_el.appendChild(todo_el);

    //initially input.value is nothing
    input.value = "";

    //event listeners for our edit button.
    todo_edit_el.addEventListener("click", (e) => {
      //When the button is clicked, if the innertext id edit, change it to save and remove the readonly attribute thus allowing the input to be editted
      if (todo_edit_el.innerText.toLowerCase() == "edit") {
        todo_edit_el.innerText = "Save";
        todo_input_el.removeAttribute("readonly");
        todo_input_el.focus();
      } else {
        //Otherwise, when the button is clicked change it back to read only and change the test back to Edit
        todo_input_el.setAttribute("readonly", "readonly");
        todo_edit_el.innerText = "Edit";
      }
    });
    //If the delete button is clicked, we remove the todo element child from the list element
    todo_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(todo_el);
    });
  });
});
