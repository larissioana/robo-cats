import Card from './components/Card';
import { robots } from './robots';
import SearchBar from './components/Searchbar';
import './index.css';
import './App.css';
import { useState } from 'react';

function App() {
 const [search,setSearch]=useState('');
 const onChangeHandler=(e)=>{
  setSearch(e.target.value)
}
  return (
    <div className="tc">
      <h1>RoboCats</h1>
      <SearchBar onChangeHandler={onChangeHandler}/>
     
      {robots.filter((robot)=>{
        return search.toLowerCase()===''? robot :robot.name.toLowerCase().includes(search)
     })
     .map((robot)=>{
        const{id,name,email,username}=robot
        return (
        <Card name={name} email={email} username={username} key={id} id={id}
        />
        )
      })}
  </div>
  );
}

export default App;
