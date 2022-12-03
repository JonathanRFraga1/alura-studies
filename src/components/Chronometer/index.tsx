import { useState, useEffect } from "react";
import Button from "../Button";
import Watch from "./Watch";
import style from "./Chronometer.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";

interface Props {
  selecionado: ITarefa | undefined
}

export default function Chronometer({ selecionado }: Props) {
  const [tempo, setTempo] = useState<Number>(tempoParaSegundos(String(selecionado?.tempo)))

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])

  return (
    <div className={style.cronometro}>
      <p className={style.titule}>Escolha um card e inicie o cronômetro</p>
      <h1>Tempo: {String(tempo)}</h1>
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Button>Começar</Button>
    </div>
  )
}