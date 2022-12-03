import React from "react";
import style from './Button.module.scss'

class Button extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined,
  children?: React.ReactNode
}>
{
  render() { // Função Obrigatória
    const { type = "button" } = this.props;
    return ( // JSX Aqui
      <button className={style.botao} type={type}>
        {this.props.children}
      </button>
    )
  }
}

export default Button; // Disponibiliza para as importações do componente