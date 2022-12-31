import React from 'react';
import Ul from './ul';

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            currentTask: '',
            taskList: [],
            elemIndex: 0,
        }
    }

    deleteTask(event){
        let idToRemove = parseInt(event.target.id);
        let newTaskList = this.state.taskList.filter((task) => {
            return task.id !== idToRemove
        });
        this.setState({taskList: newTaskList});
    }

    handleClick(event){
        event.preventDefault();
        const newTaskList = [...this.state.taskList, {task: event.target.value, id: this.state.elemIndex}];
        const newElemIndex = this.state.elemIndex + 1;
        this.setState({
            currentTask: '',
            taskList: newTaskList,
            elemIndex: newElemIndex
        })
    }

    handleChange(event) {
        this.setState({currentTask: event.target.value})
    }

    render(){
        return (
            <div className="container">
                <section>
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
                </section>
                <section>
                    <Ul taskList={this.state.taskList} deleteTask={(event) => this.deleteTask(event)}/>
                </section>
            </div>
        )
    }
}

export default App;