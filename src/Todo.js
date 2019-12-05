import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Add, Edit, Delete, Complete } from './action/actiontodos'
import uuid from 'uuid'



class Todo extends Component {
    constructor(props){
        super(props)
       this.state = {
        text:'',
        editMode: false,
        complete: false
        
       }
    }
  handleChange = e => {
      this.setState({
          text : e.target.value,
      })
  }
  handleEdit = () => {
    this.setState({editMode: !this.state.editMode})
  }
  changeInput = todo => {
      this.setState({
          text: todo.text,
          id: todo.id,
          editMode: true
      })
  }
  updateTodo = () => {
    this.props.editTodo(this.state)
    this.setState({editMode: false})
  }

    render(){
        return(
            <div>
                <input className='ss' onChange={this.handleChange} value={this.state.text} type='text' placeholder='Add your movie'/>
                <i onClick={()=> {
                    this.state.editMode ? this.updateTodo() :
                    this.props.addNew({...this.state,  id: uuid(),complete:false} )
                    this.setState({text: ''})
                }
                } class="fas fa-plus"></i>
                {this.props.TodoList.map(el =><div>
                    <input type='checkbox' onClick={()=> this.props.complete(el)}/>
                <h1 className={el.complete ? "complete" : ""}>{el.text}</h1>
                <i  onClick={() => this.props.deleteTodo(el.id)} class="fas fa-trash-alt"></i>
                <i  onClick={() => this.changeInput(el)} class="far fa-edit"></i>
                </div>)}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        TodoList : state.rootReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNew : newTodo => dispatch(Add(newTodo)),
        deleteTodo: id => dispatch(Delete(id)),
        editTodo: updates => dispatch(Edit(updates)),
        complete: todo => dispatch(Complete(todo))  
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Todo)