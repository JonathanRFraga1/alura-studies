import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 as uuidV4 } from 'uuid'; 

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Form({setTarefas}: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTarefas(
      tarefasAntigas => [
        ...tarefasAntigas, 
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidV4()
        }
      ]
    )
    setTarefa('');
    setTempo('00:00');
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={tarefa}
            onChange={e => {setTarefa(e.target.value)}}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={tempo}
            onChange={e => {setTempo(e.target.value)}}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
  )
}

class Form1 extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    this.props.setTarefas(
      tarefasAntigas => [
        ...tarefasAntigas, 
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidV4()
        }
      ]
    )
    this.setState({
      tarefa: "",
      tempo: "00:00"
    })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={e => {
              this.setState({ ...this.state, tarefa: e.target.value })
            }}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={e => {
              this.setState({ ...this.state, tempo: e.target.value })
            }}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    )
  }
}

export default Form;