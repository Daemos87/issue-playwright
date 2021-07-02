import test, { expect } from "@playwright/test"

test.describe('long tests',()=>{

    test("long test",async ({page})=>{
        await page.waitForTimeout(3000)
        expect(true).toBeTruthy()
        console.log('long test finished')

    })

    test("another long test",async ({page})=>{
        await page.waitForTimeout(3000)
        console.log('another long test finished')

        expect(true).toBeTruthy()
    })

})
