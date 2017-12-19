var TodoList = React.createClass({
  displayName: "TodoList",

  getInitialState: function getInitialState() {
    return {
      list: ["Hug Taylor Swift", "Buy red Ferrari car"]
    };
  },
  addTodo: function addTodo() {
    var todo = $("#addedTodo").val();
    if (todo && todo.length > 0) {
      this.state.list.push(todo);
      console.log("Inserting: " + todo);
      this.dynamicEntry();
      return this.setState({ list: this.state.list });
    }return true;
  },
  cleanTodo: function cleanTodo() {
    $("input[type='checkbox']").each(function (index) {
      if ($(this).is(':checked')) {
        $('li').eq(index).addClass('deleted');
      }
    });
    $('.deleted').remove();
    $("#addedTodo").focus();
  },
  dynamicEntry: function dynamicEntry() {
    $("#addedTodo").val("");
    $("#addedTodo").focus();
  },
  render: function render() {
    return React.createElement(
      "div",
      { id: "todolist" },
      React.createElement(
        "div",
        { id: "addtodo_area" },
        React.createElement(
          "h6",
          null,
          "My Todo List"
        ),
        React.createElement("input", { type: "text", id: "addedTodo", placeholder: "Type something nice =)" }),
        React.createElement(
          "button",
          { className: "btn-floating btn-large waves-effect waves-light ", onClick: this.addTodo },
          React.createElement("i", { className: "fa fa-plus", "arial-hidden": "true" })
        )
      ),
      React.createElement(
        "div",
        { id: "displaytodo_list" },
        React.createElement(
          "p",
          { id: "today" },
          "TODAY"
        ),
        React.createElement(
          "ul",
          null,
          this.state.list.map(function (todo) {
            return React.createElement(
              "li",
              null,
              " ",
              React.createElement("input", { type: "checkbox", className: "checkbox" }),
              " - ",
              todo,
              " "
            );
          })
        )
      ),
      React.createElement(
        "button",
        { className: "btn-floating btn-large waves-effect waves-light cleanning", onClick: this.cleanTodo },
        React.createElement("i", { className: "fa fa-trash", "arial-hidden": "true" })
      ),
      React.createElement(
        "div",
        { className: "rights" },
        "Made with\xA0\xA0",
        React.createElement("i", { className: "fa fa-heart-o", "aria-hidden": "true" }),
        "\xA0\xA0by Aneza"
      )
    );
  }
});

ReactDOM.render(React.createElement(TodoList, null), document.getElementById("space"));
$("#addedTodo").focus();