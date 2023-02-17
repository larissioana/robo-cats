

const SearchBar=({onChangeHandler})=>{
    return(
        <div>
        <input onChange={onChangeHandler}
        type='search'
        placeholder='Search cats'
        className="pa2 ba b--green bg-lightest-blue"
        />
        </div>
    )
};
export default SearchBar;