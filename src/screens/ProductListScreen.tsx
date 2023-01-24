import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '../models/Product'
import { BaseService } from '../network/BaseService'

const ProductListScreen = () => {

  const [products, setproducts] = useState<Product[]>([])

  useEffect(() => {

    let baseService = new BaseService();
    baseService.getAll('/products')
      .then(data => {
        setproducts(data);
      })

  }, [])


  return (
    <SafeAreaView>
      <ScrollView>
        {
          products.map(item => <Text key={item.id}>{item.name}</Text>)
        }
      </ScrollView>

    </SafeAreaView>
  )
}

export default ProductListScreen