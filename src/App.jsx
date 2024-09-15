function App(){
  return(
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-5xl mb-3 text-center">REACT BOILERPLATE</h1>
      <h2 className="text-3xl mb-5">{import.meta.env.VITE_API_KEY}</h2>
      <button className="px-8 py-3 bg-red-300 rounded ">Explore</button>
    </div>
  )
}

export default App