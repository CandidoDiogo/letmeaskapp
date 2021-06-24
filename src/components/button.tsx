import {ButtonHTMLAttributes} from "react";

import '../styles/button.scss'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

//ButtonHTMLAtributes passa todos os parâmetros que um botão HTML recebe

export function Button(props: ButtonProps) {
  return (
  <button className="button" {...props} />
  )
}

