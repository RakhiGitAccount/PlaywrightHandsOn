import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage';

test('Locators', async ({page})=>{

    const homePgae = new HomePage(page);

    await homePgae.gotoHomePage();
    await homePgae.findPageLocators();
    await page.waitForTimeout(3000)

    const logoutlink =  await homePgae.logoutlinkPresence();
    await expect(logoutlink).toBeVisible();
    


})