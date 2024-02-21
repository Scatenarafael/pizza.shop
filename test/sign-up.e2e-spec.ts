import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Responsável').fill('John Doe')
  await page.getByPlaceholder('E-mail').fill('johndoe@example.com')
  await page.getByPlaceholder('Celular').fill('5122516321')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign up with wrong credentials', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Estabelecimento').fill('invalid Name')
  await page.getByLabel('Responsável').fill('John Doe')
  await page.getByPlaceholder('E-mail').fill('johndoe@example.com')
  await page.getByPlaceholder('Celular').fill('5122516321')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Login' }).click()

  expect(page.url()).toContain('/sign-in')

  await page.waitForTimeout(1000)
})
