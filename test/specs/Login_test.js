const { expect , driver} = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const dashboardPage = require('../pageobjects/dashboard.page');
require("dotenv").config();

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // await LoginPage.login(process.env.username_expert, process.env.password_expert);
        // await dashboardPage.handleNotifications();
        //await expect(LoginPage.languageselect).toBeExisting();
        await LoginPage.languageSetUp();
        
        // await expect(dashboardPage.titleDesc).toBeExisting();
        // await dashboardPage.logOut();
    });
    it('search for elements',async ()=>{
        await LoginPage.searchInfo();
    });
    it ('implementing actions on  the resulted data',async ()=>{
        await LoginPage.SearchDataInfo();
        await LoginPage.dot();
    })
})
