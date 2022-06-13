import { useContext, createContext, useState, useEffect } from 'react'
import api from '../../services/api';
import { ProductListProps, TestProviderData } from '../../types'
import { notifyError } from '../../services/notifyData'

const UsersContext = createContext<ProductListProps>({} as ProductListProps);

export const ProductsProvider = ({ children }: TestProviderData) => {

  const [productList, setProductList] = useState<any>([])
  const [product, setProduct] = useState<any>()

  useEffect(()=>{
    api.get("products/0/").then(res=>setProductList(res.data)).catch(error=>{
      console.log(error)
      notifyError("Algo errado não está certo!")
    })
  },[])

  return (
    <UsersContext.Provider
      value={{ productList, product, setProduct, setProductList }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useProducts = () => useContext(UsersContext);
