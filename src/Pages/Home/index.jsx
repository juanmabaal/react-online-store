import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context';
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = ()=> {   
      
      if(context.filteredItems?.length > 0) {
        return (
          context.filteredItems.map(item =>( 
            <Card key={item.id} data={item}/>
         )) 
        )
      }else {
        return (
          <div className="flex items-center justify-center h-48 text-gray-500">
            <p className="text-lg"> We couldn't find any items matching {context.searchByTittle}</p>
          </div>
        )      
      }
    }

    return (
        <Layout>
          <div className='flex items-center justify-center relative w-80'>
            <h1 className="font-medium text-xl mb-4">Exclusive Products</h1>
          </div>
          <input 
          type='text' 
          placeholder='Search a product'
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          onChange={(event)=> context.setSearchByTittle(event.target.value)}/>
          <div className='grid grid-cols-4 gap-5 w-full max-w-screen-lg'>
          {renderView()}
          </div>
          <ProductDetail />
        </Layout>
    )
  }
  
  export default Home