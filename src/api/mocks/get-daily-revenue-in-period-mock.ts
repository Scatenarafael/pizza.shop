import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodOrdersAmountMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '01/01/2024',
      receipt: 200,
    },
    {
      date: '02/01/2024',
      receipt: 80,
    },
    {
      date: '03/01/2024',
      receipt: 440,
    },
    {
      date: '04/01/2024',
      receipt: 1024,
    },
    {
      date: '05/01/2024',
      receipt: 353,
    },
    {
      date: '06/01/2024',
      receipt: 700,
    },
    {
      date: '07/01/2024',
      receipt: 1800,
    },
  ])
})
