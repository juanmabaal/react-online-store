import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import Layout from "../../Components/Layout"

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  console.log(context.order?.slice(-1)[0])
    return (
        <Layout>
          MyOrder
          <div className='flex flex-col w-80'>
            {
            context.order && context.order.length > 0 ? context.order.slice(-1)[0].products.map(product => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title ={product.title}
                    imageUrl = {product.images}
                    price= {product.price}
                    />                    
              ))
              : <p>No hay productos en la orden.</p>
            }
            </div>
        </Layout>
    )
  }
  
  export default MyOrder