import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setProductData } from './Slice/productSlice';
import { HeroSectionData, ProductSectionData } from '../Pages/Home/HomeData';
import { setHeroSectionData } from './Slice/heroSectionSlice';
import { useEffect } from 'react';


export const useProductData = () => {
  const Product = useSelector((state: RootState) => state.Product.value);
  const dispatch = useDispatch();
   useEffect(() => {
  dispatch(setProductData(ProductSectionData));
  }, [dispatch, ProductSectionData]);
  return { Product, dispatch };
};

  ;



export const useHeroSectionData = () => {
  const DataHeroSection = useSelector((state: RootState) => state.HeroSection.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeroSectionData({ value: HeroSectionData }));
  }, [dispatch, HeroSectionData]);

  return { DataHeroSection, dispatch };
};


