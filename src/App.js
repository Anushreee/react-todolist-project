import React,{Component} from 'react';
import ToDoInput from './components/ToDoInput/ToDoInput';
import ToDoList from './components/ToDoList/ToDoList';
import uuid from 'uuid';
import classes from './App.module.scss'


class App extends Component {
  state = {
    task: '',
    lists: [],
    id: uuid(),
    editTask: false,
  }

  changedHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      task: e.target.value
    })
  }

  editHandler = (id) => {
    console.log('edited');
    const updatedLists = this.state.lists.filter(list => {
      return list.id !== id
    })

    const selectedTask = this.state.lists.find(list => {
      return list.id === id
    })

    this.setState({
      lists: updatedLists,
      task: selectedTask.title,
      editTask: true,
      id: id
    })

  }


  deleteHandler = (id) => { 
    console.log('deleted');
    const updatedLists = this.state.lists.filter(list=>{
      return list.id !== id
    })
    this.setState({
      lists: updatedLists
    })
  }

  

  submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      id: this.state.id,
      title: this.state.task
    }
    const updatedItems = [...this.state.lists,newTask];
    console.log('updatedItem is', updatedItems);

    this.setState({
      lists: updatedItems,
      id: uuid(),
      task: '',
      editTask: false
    })
  }

  clearHandler = () => {
    this.setState({
  
      lists:[]  
    })
  }

  render(){
    return(  
      <div className={classes.App}>
        <form className={classes.form} onSubmit={this.submitHandler}>
          <fieldset>
            <legend>Please enter the To Do List</legend>
            
              <ToDoInput 
                task={this.state.task}
                changed={this.changedHandler}
                submitted={this.submitHandler}
                editTask={this.state.editTask}
              /> 

              <ToDoList
                lists={this.state.lists}
                deleted={this.deleteHandler}
                edited={this.editHandler}
                cleared={this.clearHandler}
              />
          </fieldset>
        </form>
      </div>
    )
  }
  
}

export default App;
