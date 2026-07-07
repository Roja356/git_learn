class OrdersPage{
    constructor(page){
    this.page=page;
    this.ordersMenuLink = page.getByRole('link', { name: 'Orders', exact: true });
    this.orderNameInput=page.getByPlaceholder('Search buyer / contract / order no…');
    this.statusDropdown=page.locator('#filterStatus');
    this.filterButton=page.locator('#btnFilter');
    }
    async goto() {
    await this.page.goto('http://commercial-dev.sentineltechno.com/order-lists');
  }

   async filterOrders(name,status){
   await this.orderNameInput.fill(name);
   await this.statusDropdown.selectOption(status);
   await this.filterButton.click();
   }
}
module.exports={OrdersPage};