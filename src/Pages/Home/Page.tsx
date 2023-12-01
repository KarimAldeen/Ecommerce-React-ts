import HeroSection from '../../Components/Home/HeroSection'
import MovesAds from '../../Components/Home/MovesAds'
import SpecialProperties from '../../Components/Home/SpecialProperties'
import ProductSection from '../../Components/Home/ProductSection'
import { IoIosFlash } from 'react-icons/io'
import { TProduct } from '../../Layout/app/Types'
import Layout from '../../Layout/app/Layout'

const Page = () => {
  const Product =   {
    id : 1,
    name:"Classic Rolex Watch",
    img : "../Product/Product.png",
    off : 15,
    rate:4.5,
    price:200,
    old_price:250,
    brand : "karim",
    description:"Wireless Bluetooth HeadsetFM Frequency Response: 87.5 108 MHz Feature: FM Radio, Card Supported (Micro SD / TF)Made in China",


  }
  const data :TProduct[] = [  Product,Product,Product,Product,Product ] 
 
  return (
    <Layout>
   <HeroSection/>
      <MovesAds/>
      <SpecialProperties/>
      <ProductSection title="title" href="/" data={data}  count={10} icon={<IoIosFlash/>} />
      <ProductSection title="title" href="/" data={data}  count={10} icon={<IoIosFlash/>} />
    </Layout>
  )
}

export default Page