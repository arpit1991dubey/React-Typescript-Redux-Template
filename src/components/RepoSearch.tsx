//import {Provider } from 'react-redux';
import React,{useState}from 'react';
import {useDispatch} from 'react-redux';
import {actionCreators} from '../redux';
const RepoSearch:React.FC =()=>{
    const [term,setTerm]=useState('');
    const dispatch=useDispatch();
    const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        dispatch(actionCreators.searchRepositories(term));
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={(e)=>setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
        )
};
export default RepoSearch;