import { useState } from 'react';
import AddCoffee from './components/AddCoffee';
import './App.css';
import Hero from './components/Hero';
import CoffeeList from './components/CoffeeList';

export default function App() {
  const [ coffees ,setCoffees] = useState()
  return (
    <>
    <Hero />
    <AddCoffee setCoffees={setCoffees} />
    <CoffeeList coffees={coffees} />
    </>
  )
}


