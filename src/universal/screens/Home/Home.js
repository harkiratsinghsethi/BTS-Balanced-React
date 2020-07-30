import React, {useState, useEffect} from 'react';
import logo from "../../../logo.svg";
import '../../../../src/App.css'
import './styles.css'
import Tree from "./Tree";

const Home = () => {
    const [res, setRes] = useState('')
    const tree = [0,1,2,3,4,5,6,7,8,9];
    useEffect(() => {
    }, []);

    return (<div className="App">
        <header className="App-header">
            <span> {tree.map(item => item+',')}</span>
            <Tree tree={tree}/>

        </header>
    </div>)
}

export default Home;

