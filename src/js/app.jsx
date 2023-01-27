import React from 'react';

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
                <section id="form">
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
                <nav id="profile">
                    <div id="nav-header">
                        <div id="profile-photo">
                            <img  src="https://urlz.fr/kAwj" alt="photo de profil" />
                        </div>
                        <div id="profile-infos">
                            <h2>Do it !</h2>
                            <p>Hamza Boudra</p>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default App;