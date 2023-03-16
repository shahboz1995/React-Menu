import { useState } from 'react'
import './App.css'
import Categories from './components/Categories'
import items from './data'
import Menu from './components/Menu'

let allCategories = items.map((item)=> item.category)
allCategories=['all', ...new Set(allCategories)]
console.log(allCategories);
function App() {
  const [menuItem, setMenuItem] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItem(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItem(newItems)
  }

  return (
    <main>
          <img  src='https://st4.depositphotos.com/2664341/22170/v/1600/depositphotos_221707814-stock-illustration-illustrations-cute-cartoon-chef.jpg' className="preson"/>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  )
}

export default App
