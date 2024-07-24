import React from 'react'
import {NavLink, Route, Routes} from "react-router-dom"
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import DynamicRouting from './DynamicRouting'
import Product from '../Product'
import ProductCreate from '../ProductCreate'



const AppLink = () => {
  return (
    <div>
    {/* <a href="/about">About</a>
    AAAAAAAAA */}
{/* Navlink only change path when link is clicked */}
    <NavLink to="/home" style={{marginLeft:"30px"}}>Home</NavLink>
    <NavLink to="/about" style={{marginLeft:"30px"}}>About</NavLink>
    <NavLink to="/contact" style={{marginLeft:"30px"}}>Contact</NavLink>
    <NavLink to="/product" style={{marginLeft:"30px"}}>Product</NavLink>
    
    
    
<Routes>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/about" element={<About name="ram"></About>}></Route>
    <Route path="/contact" element={<Contact number="9808878667"></Contact>}></Route>
    <Route path="/product" element={<Product></Product>}></Route>
    <Route path="/product/create" element={<ProductCreate></ProductCreate>}></Route>

    {/* Dynamic Routing */}
    <Route path="/abc/:id" element ={<DynamicRouting></DynamicRouting>}></Route>

    {/* this component will execute if the route is other than the defined route */}
    <Route path="*" element ={<div>404 page not</div>}></Route>

    </Routes>    


    </div>
  )
}

export default AppLink

//URL


//localhost:3000/home/blog?name=ram&age=50&Location=kathmandu

//anything before  ? is route
//anything after ? is called query  string or search string.

//here blog and home is called route parameter and name, age and location is called query

//Routes
//route gives component
