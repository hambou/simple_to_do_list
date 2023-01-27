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

    render(){
        return (
            <div className="container">
                <section id="form" class="flex">
                    <main>
                        <div id="title-container" class="flex">
                            <h1>Les taches de la journée</h1>
                            <h2>Finir la to-do list</h2>
                        </div>
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
                    </main>
                </section>
                <nav class="flex">
                    <div id="nav-header" class="flex">
                        <div id="profile-photo" class="flex">
                            <img  src="https://urlz.fr/kAwj" alt="photo de profil" />
                        </div>
                        <div id="profile-infos" class="flex">
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