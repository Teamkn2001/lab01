function App() {

    const sty1 = {color: 'red'}
    const sty2 = {color: 'red', backgroundColor: 'skyblue'}

    const realName =  <h1 style= {sty1}> Sudtipong Kaemnak</h1>
    const Realage = <p style = {sty2}> age : {new Date().getFullYear()-2001} </p>
   
    return (
        <div>
           {realName}
           {Realage}   
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)