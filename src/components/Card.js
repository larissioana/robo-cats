

const Card=({name,username,email,id})=>{
   return(
    <div className='bg-light-green dib br3 pa3 ma4 grow'>
    <img alt='robots' src={`https://robohash.org/${id}?set=set4`}/>
    <h3>{name}</h3>
    <h4>{username}</h4>
    <p>{email}</p>
    </div>
   )
};
export default Card;