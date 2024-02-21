import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsOrdersAmountMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 15 },
    { product: 'Pizza 01', amount: 5 },
    { product: 'Pizza 01', amount: 12 },
    { product: 'Pizza 01', amount: 10 },
    { product: 'Pizza 01', amount: 3 },
  ])
})
