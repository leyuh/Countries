
import BackBtn from '@/app/components/BackBtn';
import { Suspense } from 'react'

export default async function Country({
  params
}) {

  const name = params.name;

  const countryData = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => data[0])
 
  return <Suspense fallback={<></>}>
    <div>
      <span>
        <BackBtn />
        <h1>{countryData.name.common} {countryData.flag}</h1>
      </span>
  
      {JSON.stringify(countryData)}
    </div>
  </Suspense>
}