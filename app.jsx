import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = { showCounter: false }; // Inicializa o estado
    }



    render() {
        return (
           <div>
            <h1>Ciclo de vida no React</h1>
            <button onClick={() => {
                this.setState({ showCounter: !this.state.showCounter});
            }}>
            {this.state.showCounter ? "Remover contador" : "Mostrar contador" }
            </button>
           {this.state.showCounter ? <Counter /> : null}
           </div>
        );        
    }
}

export default App;
