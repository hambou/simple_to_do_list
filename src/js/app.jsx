import React from 'react';

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            currentTask: '',
            taskList: []
        }
    }
    handleClick(event){
        event.preventDefault();
        const newTaskList = [...this.state.taskList, event.target.value];
        this.setState({
            currentTask: '',
            taskList: newTaskList,
        })
    }

    handleChange(event) {
        this.setState({currentTask: event.target.value})
    }

    render(){
        return (
            <div className="container">
                <div>
                    <h1>To Do List .... </h1>
                    <form action="">
                        <input 
                            value={this.state.currentTask} 
                            onChange={(event) => this.handleChange(event) } 
                            type="text" 
                            placeholder='Nouvelle tache'/>
                        <button 
                            value={this.state.currentTask} 
                            onClick={(event) => this.handleClick(event)}>Ajouter
                        </button>
                    </form>
                </div>
                <div>
                </div>
                <div>
                    <ul id="list">
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;