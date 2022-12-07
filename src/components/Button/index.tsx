import React from "react";
import style from './Button.module.scss'

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
  children?: React.ReactNode
}

function Button({onClick, type, children}: Props) {
  return (
    <button className={style.botao} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

class Button1 extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
  children?: React.ReactNode
}>
{
  render() { // Função Obrigatória
    const { type = "button", onClick } = this.props;
    return ( // JSX Aqui
      <button className={style.botao} type={type} onClick={onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button; // Disponibiliza para as importações do componente