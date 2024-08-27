function App() {
    const fname = 'Annabell'
    const lname = 'Alice'
    const style1 = { color: 'deeppink', backgroundColor: 'lightyellow' }
    const style2 = { color: 'deepgreen', backgroundColor: 'lightgreen' }
    const age = new Date().getFullYear() - 1998
    const birthday = new Date('1998-03-07')
    const current = new Date()

    const days = (current - birthday) / 1000 / 60 / 60 / 24
    const fYear = Math.floor(days / 365.25)
    const fMonth = Math.floor((days % 365.25) / 30.44)
    const fDate = Math.floor((days % 365.25) % 30.44)

    return (
        <div>
            <h1 style={style1}>Name: {fname} {lname}</h1>
            <p style={style2}>Age: {age}</p>
            <p style={style2}>Age: {fYear} ปี {fMonth} เดือน {fDate} วัน</p>
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)