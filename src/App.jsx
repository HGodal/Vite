function App() {
  console.log(import.meta.env.VITE_TMP)

  return (
    <div className='container'>
      <h1 className='header center orange-text'>My Vite React App</h1>
      <div className='row center'>
        <h5 className='header col s12 light'>
          Welcome! Use the navbar to navigate between possibilities.
        </h5>
      </div>
    </div>
  )
}

export default App
