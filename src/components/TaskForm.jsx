import { useState } from 'react';

function TaskForm({createTask}) {

  const [title, setTitle] = useState("")
  const [descripcion, setDescripcion] = useState("")


  const handleSubmite = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion
    });
    setTitle('');
    setDescripcion('');
  }

  return (
    <div className='form-container'>
        <h1>To do list</h1>
        <form onSubmit={handleSubmite}>
            <input type="text" placeholder="Escribe tu tarea"
            onChange={(e) => {setTitle(e.target.value);}}
            value={title}
            autoFocus
            />
            <textarea placeholder='Escribe tu descripcion' onChange={(e) => {setDescripcion(e.target.value);}} value={descripcion}></textarea>
            <button>Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm