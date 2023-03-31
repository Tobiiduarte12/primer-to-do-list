
function TaskCard({task, deleteTask}) {
  return (
    <div className="container-cards">
        <h1>{task.title}</h1>
        <p>{task.descripcion}</p>
        <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  )
}

export default TaskCard