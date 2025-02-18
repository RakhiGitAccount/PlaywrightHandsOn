exports.HomepageLocator = class HomepageLocator{

    constructor(page){
        this.page = page;
    }
    //This method to test locator.spec.js independently
    async gotoHomePage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    //Method to get locators for locators.spec.js
    async findPageLocators()
    {

        //click on login button  - property as a locator
        await this.page.locator('id=login2').click();

        //Provide username --by CSS
        await this.page.fill('#loginusername','pavanol' );
        await this.page.fill("input[id='loginpassword']", 'test@123');

        //Click on Login button XPath
        await this.page.click("//button[normalize-space()='Log in']");

    }

    async logoutlinkPresence(){
        //Using XPath
        return await this.page.locator("//a[normalize-space()='Log out']");
    }

}