import React, { useState, useEffect } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { Todo } from './Todo';

const url = "https://jsonplaceholder.typicode.com/todos";

const ListTodo = (props) => {
    // const { setLoding } = props;



    return (
        <div id="filter-holder">
            <label htmlFor='completed-checkbox'>completed-checkbox</label>
            <input type="checkbox" id="completed-checkbox" checked />
            <label htmlFor='incompleted-checkbox'>incompleted-checkbox</label>
            <input type="checkbox" id="incompleted-checkbox" checked />
        </div>)
}
const App = () => {
    const [loding, setLoding] = useState(true);
    const [list, setList] = useState([]);

    const listObjFun = () => {
        fetch(url)
            .than((result) => result.json())
            .than((json) => {
                setList(json)
                setLoding(false);
            })
    }

    useEffect(listObjFun, []);
    /*
        const callUrl = () => {
    
            setLoading(true);
            fetch(makeURL(typeValue))
              .then((result) => result.json())
              .then((json) => {
                console.log(count);
                console.log(json);
                setFatchvalue(json.activity);
                setLoading(false);
              })
          }
        
          useEffect(callUrl, [typeValue, count]);
    */

    console.log(list);

    return (
        <div id='main'>
            {loding ? <Loader /> : <ListTodo loding={loding} />}
        </div>
    )

}


export default App;
