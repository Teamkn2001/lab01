function App() {

    const sty1 = { color: 'red' }
    const sty2 = { color: 'red', backgroundColor: 'skyblue' }

    const realName = <h1 style={sty1}> Sudtipong Kaemnak</h1>
    const Realage = <p style={sty2}> age : {new Date().getFullYear() - 2001} </p>

    let currTime = new Date().getTime()
    let birthTime = new Date(2001,5, 25).getTime()
    // console.log(birthTime)
    let resultTime = currTime - birthTime
    let ageDay = resultTime/1000/60/60/24
    let ageMonth = ageDay/30.42
    let ageYear = ageMonth/12

    let totalYear = Math.floor(ageYear)
    let settMonth = (ageYear - Math.floor(ageYear)) * 365.25 / 30.42
    let totalMonth = Math.floor(settMonth)
    let setDay =  (settMonth - Math.floor(settMonth))*30.42
    let totalDay = Math.floor(setDay)
    return (
        <div>
            {realName}
            {Realage}
            <p> total: {totalYear} years {totalMonth} months {totalDay} days </p>
        </div>
    )

}

ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)