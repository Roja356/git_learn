const{test,expect}=require('@playwright/test');
const{LoginPage}=require('../Functional/LoginPage');
const{OrdersPage}=require('../Functional/OrdersPage');
//learn git first
test('user can filter orders by name and status',async({page})=>{
    const loginpage=new LoginPage(page);
    await loginpage.goto();
    await loginpage.login('bs23test@gmail.com','Test123');


        const orderpage=new OrdersPage(page);
         await orderpage.goto(); 
        await orderpage.filterOrders('ALTATEX','draft'); 
             await page.waitForTimeout(5000);
           await expect(page.getByText('ALTATEX').first()).toBeVisible();
});