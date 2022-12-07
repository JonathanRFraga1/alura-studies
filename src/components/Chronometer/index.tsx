import { useState, useEffect } from "react";
import Button from "../Button";
import Watch from "./Watch";
import style from "./Chronometer.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Chronometer({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>(tempoParaSegundos(String(selecionado?.tempo)))

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador-1);
        return regressiva(contador-1);
      }
      finalizarTarefa()
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titule}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch tempo={tempo}/>
      </div>
      <Button onClick={() => {regressiva(tempo)}}>Começar</Button>
    </div>
  )
}