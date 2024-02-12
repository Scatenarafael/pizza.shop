import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  managerName,
  phone,
  email,
  restaurantName,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', {
    managerName,
    phone,
    email,
    restaurantName,
  })
}
