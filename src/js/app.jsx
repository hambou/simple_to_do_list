import React from 'react';

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            currentTask: '',
            taskList: []
        }
    }

    addNewTask(){
        const taskListElem = document.getElementById('task-list');
        taskListElem.innerHTML = null;
        const taskList = [...this.state.taskList];
        taskList.map(( task )=> {
            const innerHTML = `<li>${task}</li>`;
            const child = document.createElement('li');
            child.innerHTML = innerHTML;
            taskListElem.appendChild(child);
            console.log(child.innerHTML);
        })

    }

    handleClick(event){
        event.preventDefault();
        const newTaskList = [...this.state.taskList, event.target.value];
        this.addNewTask();
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
                    <ul id="task-list">
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;