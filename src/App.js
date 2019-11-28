import React, { useState, useEffect } from 'react'
import recommendationService from './services/recommendationService'
import List from './components/List'
import FilterField from './components/FilterField'
import RecommendationAdder from './components/RecommendationAdder'

const App = () => {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    recommendationService.getAll()
      .then((data) => setItems(data))
  }, [])

  return (
    <div>
      <RecommendationAdder items={items} setItems={setItems} />
      <FilterField filter={filter} setFilter={setFilter} />
      <List items={items} filter={filter} />
    </div>
  )
}

export default App
