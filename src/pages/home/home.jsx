import { Section2 } from './components/Section2'
import { Section1 } from './components/Section1'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { LastSection } from './components/LastSection'
export const Home = () => {
  return (
    <div>
      <h1 className='text-blue-600'>Welcome to Emergence Music Distribution.
        Welcome 
      </h1>
    <Section1/>
    <Section2/>  
    <Services/> 
    <Features/>
    <LastSection/>
    </div>
  )
}
