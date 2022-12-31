import React from "react";

class Ul extends React.Component {
    render(){
        return (
            <div>
                {this.props.taskList.map(task => (
                    <li key={task.id} className="taskListItem">
                        <div>
                            <p>{task.task}</p>
                            <div id={task.id} onClick={ (event) => this.props.deleteTask(event) }>
                                X
                            </div>
                        </div>
                    </li>
            ))}
            </div>
          );
    }
}

export default Ul;