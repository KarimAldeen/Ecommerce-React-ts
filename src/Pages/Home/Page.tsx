import HeroSection from '../../Components/Home/HeroSection'
import MovesAds from '../../Components/Home/MovesAds'
import SpecialProperties from '../../Components/Home/SpecialProperties'
import ProductSection from '../../Components/Home/ProductSection'
import { IoIosFlash } from 'react-icons/io'
import Layout from '../../Layout/app/Layout'
import BigAds from '../../Components/Home/BigAds'
import { BigAdsData, CategoriesData, data } from './HomeData'
import CategoriesSwiper from '../../Components/Home/CategoriesSwiper'

const Page = () => {

  return (
    <Layout>
      <HeroSection />
      <SpecialProperties />
      <CategoriesSwiper data={CategoriesData} />
      <MovesAds LeftText=' Black Friday Sales Left' RightText='PAY ONLY FOR YOUR LOVING ELECTRONICS' Link='/products' />
      <ProductSection title="title" href="/products" data={data} count={10} icon={<IoIosFlash />} />
      <BigAds data={BigAdsData} />
      <ProductSection title="title" href="/products" data={data} count={10} icon={<IoIosFlash />} />
    </Layout>
  )
}

export default Page