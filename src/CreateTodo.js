import {useState} from 'react'


function CreateTodo(props) {
  
  const [newTodo, setNewTodo] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(newTodo)
        {
        console.log('newToDoCreated lifting state up with handler')
        props.onCreate(newTodo)
        setNewTodo("")
        }
        else{
            alert('enter valid input')
        }

        
    }

    const handleInputChange=(e)=>
    {
            setNewTodo(e.target.value)
    }

  return (
    <header className="create-todo">
      <form onSubmit={handleSubmit}>
      <div className="todoInputSection">
        <label htmlFor="newTodo" className="newTodoLabel">
          What do you want to do
        </label>

        <input value={newTodo} name="newTodo" type="text" onChange={handleInputChange} className="newTodoInput">
        </input>
        </div>
        <div className="submitSection">
        <input type="submit" name="newTodo" value="Add" className="newTodoSubmit">
            
        </input>
        </div>
      </form>
    </header>
  );
}
export default CreateTodo