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

    displayTasks(){
        const taskListElem = document.getElementById('task-list');
        if (!taskListElem){
            return;
        }
        taskListElem.innerHTML = null;
        const taskList = [...this.state.taskList];
        taskList.map(( task )=> {
            const innerHTML = `<li id="${this.state.elemIndex}">${task}</li>`;
            const newElemIndex = this.state.elemIndex + 1;
            console.log();
            const child = document.createElement('li');
            child.innerHTML = innerHTML;
            taskListElem.appendChild(child);
            // this.setState({elemIndex: newElemIndex});
        })

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
                    <Ul taskList={this.state.taskList} test={() => this.displayTasks}/>
                </section>
            </div>
        )
    }
}

export default App;