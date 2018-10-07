import React from "react"
import TodoItems from './todoItems'

class TodoList extends React.Component{
    state={
        items: []
    }
            
    addItem(e){
        if (this._globalTextVariable !== ""){
            var newItem = {
                text: this._globalTextVariable.value,
                key: Date.now()
            }

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            });
        }

        this._globalTextVariable.value="";
        console.log(this.state.items);

        e.preventDefault();     
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        })
    }

    render(){
        return(
            <div className="main">
                <div className="heading">
                    <form onSubmit={this.addItem.bind(this)}>
                        <input ref={(a) => this._globalTextVariable = a}
                                placeholder="Write your task here ...">
                        </input>
                        <button type="submit"><i class="fa fa-pencil"></i></button>
                    </form>
                </div>
                <TodoItems entries = {this.state.items}
                            delete = {this.deleteItem.bind(this)} />
            </div>
        )
    }
}

export default TodoList;