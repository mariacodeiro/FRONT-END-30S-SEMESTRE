import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cadastrofruta from './pages/cadastrofruta/cadastrofruta'
import Cadastroproduto from './pages/cadastroproduto/cadastroproduto'
import HomePage from './pages/home/homepage'
import QuemSomos from './pages/quemsomos/quemsomos'
import Header from './components/header/heade'


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<HomePage/>} path='/'/>
      <Route element={<Cadastrofruta/>} path='/cadastrofruta'/>
      <Route element={<Cadastroproduto/>} path='/cadastroproduto'/>
      <Route element={<QuemSomos/>} path='/quemsomos'/>
      
    </Routes>
</BrowserRouter>
    
    </>
   
  )
}