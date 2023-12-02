import { TBigAdsData, TProduct } from "../../Layout/app/Types"

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
 export const data :TProduct[] = [  Product,Product,Product,Product,Product ] 
   export  const CategoriesData : string[] = ["Toys","Sports","Gaming","Furniture","Fashion","Cameras"]
 export const BigAdsData:TBigAdsData[]= [
    {
            header : 'Final Reduction',
            img : "../BigAds/Ads1.jpg" ,
            mainText:"Sale up to 20% Off",
            textPrice:"Only From ",
            Price:"270",
            color:"lightMood"
        },
           {
            header : 'Weekend Sale',
            img : "../BigAds/Ads2.jpg" ,
            mainText:"Fine Smart Speaker",
            textPrice:"Starting at ",
            Price:"185",
            color:"darkMood"
        }
    ]
    
