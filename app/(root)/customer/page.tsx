import React from 'react'
import { Button } from '../../components/ui/button'

const hellopage = () => {
  return (
    <div className= "px-4 py-8 bg-blue-100">
    <h1>Hello World!</h1>
    <br />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, consectetur dolore nihil ab maiores temporibus culpa ducimus modi unde, recusandae natus ad. Nemo quidem eveniet impedit. Sed saepe ipsa id!</p>
    <br />
  <div className='flex space-x-8'>  <Button
    className='bg-blue-400 hover:bg-blue-600 mb-4 rounded shadow-md'>Hola</Button>
    <br />
    <Button 
    className='bg-green-400 hover:bg-green-600 mb-4 rounded-full'>Click Me!</Button></div>
    </div>
  )
}

export default hellopage