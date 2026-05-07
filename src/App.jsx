import './App.css'
import Header from './Header'
import Main from './main'
import Footer from './Footer'

function App() {
  return (
    <div className="box">
      <div className="row header">
        <Header />
      </div>

      <div className="row content">
        <Main />
      </div>

      <div className="row footer">
        <Footer />
      </div>
    </div>
  )
}
export default App