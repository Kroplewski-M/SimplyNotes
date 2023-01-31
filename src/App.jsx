import './App.css'
import Nav from './components/Nav'
function App() {
  

  return (
    <div className="App">
      <Nav />
      <div className='flex space-x-5 mt-[70px] w-[200px] mx-auto'>
        <button className='w-[100px] h-[30px] rounded-md bg-[#C1A37B] font-semibold'>Log In</button>
        <button className='w-[100px] h-[30px] rounded-md bg-[#C1A37B] font-semibold'>Register</button>
      </div>
      <img src="../src/assets/notebook.svg" alt="" className='fixed bottom-5 -right-10'/>
    </div>
  )
}

export default App
