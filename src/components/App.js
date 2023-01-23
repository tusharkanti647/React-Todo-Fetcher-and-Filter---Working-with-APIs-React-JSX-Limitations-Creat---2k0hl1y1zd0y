import React, { useState, useEffect } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { Todo } from './Todo';

const url = "https://jsonplaceholder.typicode.com/todos";

const ListTodo = (props) => {
    let { list } = props;

    const [completedIsCheck, setCompletedIsCheck] = useState(true);
    const [incompletedIsCheck, setIncompletedIsCheck] = useState(true);


    let newList = list.filter((item) => {
        return (completedIsCheck === true && item.completed === true) || (incompletedIsCheck === true && item.completed === false);
    })

    if (completedIsCheck === true && incompletedIsCheck === true) {
        newList.splice(20);
    }


    return (
        <div id="filter-holder">

            <ol>
                {newList.map((item, index) => <Todo key={index} id={item.id} title={item.title} completed={item.completed} />)}
            </ol>

            <label htmlFor='completed-checkbox'>completed-checkbox</label>
            <input type="checkbox" id="completed-checkbox" checked={completedIsCheck} onChange={() => setCompletedIsCheck(!completedIsCheck)} />
            <label htmlFor='incompleted-checkbox'>incompleted-checkbox</label>
            <input type="checkbox" id="incompleted-checkbox" checked={incompletedIsCheck} onChange={() => setIncompletedIsCheck(!incompletedIsCheck)} />
        </div>)
}
const App = () => {
    const [loding, setLoding] = useState(true);
    const [list, setList] = useState([]);



    const listObjFun = () => {

        fetch(url)
            .then((result) => result.json())
            .then((json) => {
                setList(json);
                setLoding(false);
            })
    }

    useEffect(listObjFun, []);




    return (
        <div id='main'>
            {loding ? <Loader /> : <ListTodo list={list} />}
        </div>
    )

}


export default App;
