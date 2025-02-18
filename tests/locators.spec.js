import {test, expect} from '@playwright/test'
import { HomepageLocator } from '../pages/HomePageLocator'; 

test('Locators', async ({page})=>{

    const homePageLocator = new HomepageLocator(page);

    await homePageLocator.gotoHomePage();
    await homePageLocator.findPageLocators();
    await page.waitForTimeout(3000)

    const logoutlink =  await homePageLocator.logoutlinkPresence();
    await expect(logoutlink).toBeVisible();
    


})