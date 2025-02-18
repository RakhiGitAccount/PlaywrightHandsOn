import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('test', async({page}) =>{

    //Login Page
    const login=new LoginPage(page)
    await login.gotoLoginPage()
    
    await login.login('pavanol', 'test@123')
    await page.waitForTimeout(3000)

    //Home Page
    const home = new HomePage(page)
   
    const pageURL = await home.getURL();
    expect(pageURL).toBe('https://www.demoblaze.com/index.html');
        
    const title = await home.getPageTitle();
    expect(title).toBe('STORE')

    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(3000)
    await home.gototCart();
    

    //Cart
    const cart = new CartPage(page)
    await page.waitForTimeout(3000)
    const status = await cart.checkProductInCart("Nexus 6")
    expect(await status).toBe(true)
});



