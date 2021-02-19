import { useState } from 'react'
import { useQuery } from 'react-query'
// components
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
// styles
import { Wrapper } from './App.styles'
// types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}


const getProduces = async (): Promise<CartItemType> => {
  await (await fetch('http:s//fakestoreapi.com/products')).json()
}


const App = () => {
  return (
    <div className="App">
      heybag
    </div>
  );
}

export default App;