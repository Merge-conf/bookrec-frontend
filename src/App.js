import React, { useState, useEffect } from 'react'
import recommendationService from './services/recommendationService'
import List from './components/List'
import FilterField from './components/FilterField'
import EditForm from './components/EditForm'
import RecommendationAdder from './components/RecommendationAdder'

const App = () => {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('')
  const [checkFilter, setCheckFilter] = useState({ books: false, audio: false })
  const [inEdit, setInEdit] = useState(null)

  useEffect(() => {
    recommendationService.getAll()
      .then((data) => setItems(data))
  }, [])

  return (
    <div>
      <RecommendationAdder items={items} setItems={setItems} />
      <FilterField filter={filter} setFilter={setFilter} checkFilter={checkFilter} setCheckFilter={setCheckFilter} />
      <List items={items} filter={filter} checkFilter={checkFilter} setInEdit={setInEdit} />
      <EditForm items={items} setItems={setItems} inEdit={inEdit} setInEdit={setInEdit} />
    </div>
  )
}

export default App
