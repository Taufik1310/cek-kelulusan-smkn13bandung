import { test, expect } from "@playwright/experimental-ct-react"
import Home from "./pages/home"

const nisLocator = '//*[@id="root"]/div/div[2]/input'

const nis = "102118195"

test("nisField accepts text input", async ({ mount }) => {
  test.setTimeout(520000)

  const homeComponent = await mount(<Home />)
  const nisField = homeComponent.locator(nisLocator).first()
  await nisField.fill("102118195", {
    timeout: 520000,
  })

  await expect(nisField).toHaveValue(nis, {
    timeout: 320000,
  })
})
