import { Suspense } from 'react'
import Search from './components/Search'

export default async function Home() {
  const countriesData = await fetch('https://restcountries.com/v3.1/all').then((res) =>
    res.json()
  )
 
  return <div>
    <Search 
      namesData={countriesData.map(country => country.name.common)}
    />
  </div>
}