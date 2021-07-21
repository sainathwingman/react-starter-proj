import TodoItem from "./TodoItem";
function TodoList(props) {
    console.log('todolist rerun')
  const todoList = props.todoList;

  //show pending items first
  //make a copy and sort the array
  const sortedList = [...todoList].sort((item1, item2) => {
    if (item1.isChecked == true && item2.isChecked == false) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log('sorted list is')
  console.log(JSON.parse(JSON.stringify(sortedList)))

  const handleCheckBoxChange = (todo,newIsCheckedState) => {
      console.log('handlecheckbox change args',todo,newIsCheckedState)
    //clone todo item, mutate checkedState in cloned item and pass new itemState and index to parent
    
    let todoItemNewState = { ...todo };
    todoItemNewState.isChecked = newIsCheckedState;

    //find the index of the item in the original todolist NOT SORTER copy
    let index=todoList.findIndex(e=>todo.id==e.id)

    props.onTodoUpdate(todoItemNewState, index);
  };

  return (
    <div className="todo-list">
      {sortedList.map((todo, index) => {
        return (
          <TodoItem key={index}
            todo={todo}
            onCheckboxChange={handleCheckBoxChange.bind(null, todo)}
          ></TodoItem>
        );
      })}
    </div>
  );
}

export default TodoList;
