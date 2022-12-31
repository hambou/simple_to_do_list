import React from "react";

class Ul extends React.Component {
    render(){
        return (
            <div>
              {this.props.taskList.map(task => (
                <li>
                    <div className="taskListItem">
                        <p>{task}</p>
                        <div className="item-delete">
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