import React from "react";
import FlipMove from 'react-flip-move'

class TodoItems extends React.Component{

    delete(key){
        this.props.delete(key);
    }

    createTasks(item){
        return (
            <li key={item.key}>
                <span>
                    {item.text}
                </span>
                <span id="red" onClick = {() => this.delete(item.key)} >
                    <i class="fa fa-trash"  ></i>
                </span>
            </li>
        );
    }
    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks.bind(this));
        return(
            <ul className = "theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;