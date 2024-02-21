import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailResponse,
  GetOrderDetailsParams,
} from '../get-order-details'

export const geOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@email.com',
      phone: '32136513211',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Peperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-1',
        priceInCents: 2000,
        product: { name: 'Pizza Marguerita' },
        quantity: 2,
      },
    ],
    totalInCents: 5000,
  })
})
