import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('66', { exact: true })).toBeVisible()
  await expect(
    page.getByText('+5% em relação a ontem', { exact: true }),
  ).toBeVisible()
})
test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200', { exact: true })).toBeVisible()
  await expect(
    page.getByText('+15% em relação ao mês passado', { exact: true }),
  ).toBeVisible()
})
test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('5', { exact: true })).toBeVisible()
  await expect(
    page.getByText('-5% em relação ao mês passado', { exact: true }),
  ).toBeVisible()
})
test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 180,00', { exact: true })).toBeVisible()
  await expect(
    page.getByText('-10% em relação ao mês passado', { exact: true }),
  ).toBeVisible()
})
