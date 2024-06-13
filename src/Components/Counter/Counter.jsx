import React from "react";

export class Counter extends React.Component {
constructor() {
    super();
    this.state = { contador: 0}
    console.log("Construindo a classe counter!...");
}

UNSAFE_componentWillMount() {
    console.log("O nosso componente contador será montado!");
}
componentDidMount () {
   console.log("O componente foi montado! ✅ ");
}
shouldComponentUpdate() {
        return true;
}

UNSAFE_componentWillUpdate(){
    console.log ("O componente será atualizado");


render () {
  console.log("Renderizando o compontente counter");
  return (
    <div>
        <h1>{this.state.contador}</h1>
 
    <button onclick={() => this.setState({ contador: this.state.contador - 1})}
    >Diminuir</button>
    <button onclick={() => this.setState({ contador:this.state.contador + 1 })}
    >
        Aumentar
    </button>      
    </div>

);

}

}
}