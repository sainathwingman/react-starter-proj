function TodoItem(props) {
  const isChecked = props.todo.isChecked;
  const todoText = props.todo.value;
  const handleCheckBoxChange = (e) => {
    props.onCheckboxChange(e.target.checked);
  };


  let rootClassName='todo-item'
  if(isChecked)
  {
    rootClassName+=" checked"
      
  }
  return (
    <div  className={rootClassName}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckBoxChange}
        name="checked"
      ></input>
      <label htmlFor="checked" className="todo-text]">{todoText}</label>
        <div className="deleteSection">
       <button className="deleteBtn" onClick={props.onDelete}>X</button>
        </div>

    </div>
  );
}

export default TodoItem;
