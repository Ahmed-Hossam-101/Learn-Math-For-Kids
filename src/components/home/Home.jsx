import React from 'react'
import  {NavLink}  from 'react-router-dom' 
const Home = () => {
  return (
    <>
        <nav className="c">
  <NavLink to='/Plu' ><p className='tags__' style={{'--color' : '#57cec4'}}>+</p></NavLink>
  <NavLink to='/M'><p className='tags__ ' style={{'--color' : '#B799FF'}}>-</p></NavLink>
</nav>
    </>
  )
}

export default Home