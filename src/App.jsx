import DancingCat from './components/DancingCat'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>고양이 댄싱 페이지</h1>
        <p>클릭해서 고양이의 춤을 즐겨보세요!</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
