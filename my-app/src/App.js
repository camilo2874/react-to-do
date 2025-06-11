import React, { useState } from 'react';
import './App.css';
import { Tarea } from './componentes/tarea';
import { Button } from './componentes/button';
import { BuscarTarea } from './componentes/buscar';
import { ContarTareas } from './componentes/contar';
import { ListarTareas } from './componentes/listar';
import { ButtonClick } from './componentes/button2';
import Modal from 'react-modal'; // Importar react-modal



const tareasIniciales = [
  { key: "1", text: "Tarea 1", completado: true },
  { key: "2", text: "Tarea 2", completado: false },
  { key: "3", text: "nota 3", completado: true },
  { key: "4", text: "libro 4", completado: false },
  { key: "5", text: "Tarea 5", completado: false },
];

Modal.setAppElement('#root'); 

function App() {
  const [buscarTarea, setBusacarTarea] = useState('');
  const [tareasTotales, setTareasTotales] = useState(tareasIniciales);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const tareasCompletas = tareasTotales.filter(tarea => tarea.completado).length;
  const tareasAll = tareasTotales.length;
  const tareasFiltradas = tareasTotales.filter(tarea => tarea.text.toUpperCase().includes(buscarTarea.toUpperCase()));


  function completarTarea(key) {
    const nuevasTareas = tareasTotales.map(tarea => {
      if (tarea.key === key) {
        return { ...tarea, completado: !tarea.completado };
      }
      return tarea;
    });
    setTareasTotales(nuevasTareas);
  }

  
  function eliminarTarea(key) {
    const nuevasTareas = [...tareasTotales];
    const index = tareasTotales.findIndex(tarea => tarea.key === key);

    if (index !== -1) {
      nuevasTareas.splice(index, 1);
      setTareasTotales(nuevasTareas);
    }
  }

  
  function crearTarea() {
    if (nuevaTarea.trim() === '') {
      alert('Ingresa una tarea');
      return;
    }

    const nueva = {
      key: (tareasTotales.length + 1).toString(),
      text: nuevaTarea,
      completado: false,
    };

    setTareasTotales([...tareasTotales, nueva]);
    setNuevaTarea('');
  }

  
  function openModal(task) {
    setTaskToEdit(task);
    setModalIsOpen(true);
  }

  
  function closeModal() {
    setModalIsOpen(false);
    setTaskToEdit(null);
  }

  
  function handleUpdateTask() {
    const nuevasTareas = tareasTotales.map(tarea =>
      tarea.key === taskToEdit.key ? { ...tarea, text: taskToEdit.text } : tarea
    );
    setTareasTotales(nuevasTareas);
    closeModal();
  }

  return (
    <div className="App">
      <div className="creacion_tarea">
        <h2>Crear Nueva Tarea</h2>
        <input
          placeholder="Digite su tarea"
          className="input"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <Button text="Crear Tarea" onClick={crearTarea} />
      </div>

      <div className="lista_tarea">
        <h2>Tareas</h2>
        <ContarTareas completas={tareasCompletas} total={tareasAll} />
        <BuscarTarea buscarTarea={buscarTarea} setBusacarTarea={setBusacarTarea} />

        <ListarTareas>
          {tareasFiltradas.map(tar => (
            <Tarea
              key={tar.key}
              text={tar.text}
              completada={tar.completado}
              onCompletado={() => completarTarea(tar.key)}
              onEliminarTarea={() => eliminarTarea(tar.key)}
              onEditar={() => openModal(tar)} 
            />
          ))}
        </ListarTareas>
        <Button text="Has Completado" onClick={() => alert('has completado')} />
        <ButtonClick />
      </div>

      
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Editar Tarea"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundImage: `url('/fondo-modal.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
      borderRadius: '10px',
      color: '#191a1a',
      width: '30%',  
      height: '40%', 
      maxWidth: '900px',
      maxHeight: '700px', 
    }
  }}
>
  <h2>Actualizar Tarea</h2>
  <input
    type="text"
    value={taskToEdit ? taskToEdit.text : ''}
    onChange={(e) => setTaskToEdit({ ...taskToEdit, text: e.target.value })}
    style={{
      borderRadius: '7px',
      padding: '10px',
      border: '1px solid #ccc',
      width: '100%',
      marginBottom: '10px',
      color: '#191a1a',
    }}
  />
  <button
    onClick={handleUpdateTask}
    style={{
      borderRadius: '7px',
      padding: '10px 20px',
      border: 'none',
      backgroundColor: '#84b2f2',
      color: '#191a1a',
      marginRight: '10px',
      cursor: 'pointer'
    }}
  >
    Actualizar
  </button>
  <button
    onClick={closeModal}
    style={{
      borderRadius: '7px',
      padding: '10px 20px',
      border: 'none',
      backgroundColor: '#84b2f2',
      color: '#191a1a',
      cursor: 'pointer'
      
    }}
  >
    Cancelar
  </button>
</Modal>


    </div>
  );
}

export default App;

