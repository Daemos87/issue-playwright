import test, { expect } from "@playwright/test";

test("short test",()=>{
    expect(true).toBeFalsy()
    console.log('short test finished')
})