import HeroSection from '../../Components/Home/HeroSection'
import MovesAds from '../../Components/Home/MovesAds'
import SpecialProperties from '../../Components/Home/SpecialProperties'
import ProductSection from '../../Components/Home/ProductSection'
import Layout from '../../Layout/app/Layout'
import BigAds from '../../Components/Home/BigAds'
import { BigAdsData, CategoriesData, HeroSectionData, MovesAdsData, ProductSectionData, specialPropertiesData } from './HomeData'
import CategoriesSwiper from '../../Components/Home/CategoriesSwiper'

const Page = () => {
 
  return (
    <Layout>
      <HeroSection data={HeroSectionData} />
      <SpecialProperties data={specialPropertiesData} />
      <CategoriesSwiper data={CategoriesData} />
      <MovesAds {...MovesAdsData} />
      <ProductSection data={ProductSectionData}/>
      <BigAds data={BigAdsData} />
      <ProductSection data={ProductSectionData}/>
    </Layout>
  )
}

export default Page