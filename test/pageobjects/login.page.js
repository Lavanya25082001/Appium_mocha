const { $, driver } = require('@wdio/globals')
const Page = require('./page');
const { AndroidDriver, By, until, MultiTouch } = require('appium');
const { logOut } = require('./dashboard.page');
class LoginPage extends Page {
   
    locators = {
        android: {
            // inputUserName: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[1]",
            // inputUserName2 : "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.ImageView[1]",
            // inputPassword: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.ImageView[2]",
            // btnSubmit: "//android.widget.ImageView[@content-desc='Login']",
            language:'/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.RadioGroup/android.widget.RadioButton[1]',
            selectLanguage:"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.Button",
            next1:"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Button",
            allow:"/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]",
            gotit:"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Button",
            cancle:"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[1]",
            notNow:"/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[1]",
            search:`//android.widget.Button[@content-desc="search"]`,
           searchInput:`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.SearchView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.AutoCompleteTextView`,
         resultedData:`//android.widget.ListView[@resource-id='com.project.kiranchavan.detoxfree:id/listview']//android.widget.RelativeLayout[1]//android.widget.TextView[1]`,
         addToShoppingList:`//android.widget.FrameLayout//android.widget.LinearLayout//android.widget.Button[@resource-id='com.project.kiranchavan.detoxfree:id/add_btn']`,
        firstCup:`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.CheckBox[1]`,

        },
        ios: {
            // inputUserName: "~userName",
            // inputUserName2: "-ios predicate string:type == 'XCUIElementTypeOther' AND name CONATINS 'PASS'",
            // inputPassword: "~password",
            // btnSubmit: '~buttonSignin',
        }
      };
//apple detox drink
// browser.adbKeyEvent(4)
//browser.back()
      platform() {
        return driver.isAndroid ? 'android' : 'ios';
      }

    // get  inputUserName () {
    //     return $(this.locators[this.platform()].inputUserName);
    // }
          languageInfo(){
            return $(this.locators[this.platform()].language)
          }
          languageselect(){
            return $(this.locators[this.platform()].selectLanguage)
          }
          nextbutton1(){
            return $(this.locators[this.platform()].next1)
          }
          allowButton(){
            return $(this.locators[this.platform()].allow)
          }
          gotItButton(){
            return $(this.locators[this.platform()].gotit)
          }
          cancleButton(){
            return $(this.locators[this.platform()].cancle)
          }
          notNowButton(){
            return $(this.locators[this.platform()].notNow)
          }
         searchButton(){
             return $(this.locators[this.platform()].search)
         }
         searchInputButton(){
          return $(this.locators[this.platform()].searchInput)
         }
         resultedDatainfo(){
          return $(this.locators[this.platform()].resultedData)
         }
         get firstCupcheck(){
          return $(this.locators[this.platform()].firstCup)
         }
        get lastCupCheck(){
          return $(this.locators[this.platform()].addToShoppingList)
         }
        
    // get inputUserName2(){
    //     return $(this.locators[this.platform()].inputUserName2);
    // }

    // get inputPassword () {
    //     return $(this.locators[this.platform()].inputPassword);
    // }

    // get btnSubmit () {
    //     return $(this.locators[this.platform()].btnSubmit);
    // }

    // async login (username, password) {
    //     await this.inputUserName.waitForDisplayed();
    //     await this.inputUserName.click();
    //     await this.inputUserName2.setValue(username);
    //     await this.inputPassword.click();
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }browser.pause
    async languageSetUp(){
await this.languageInfo().click();
await this.languageselect().click();

await this.nextbutton1().click();
await this.nextbutton1().click();
await this.nextbutton1().click();
await this.allowButton().click();
await this.gotItButton().click();
await this.cancleButton().click();
await this.notNowButton().click();

}
async searchInfo(){
  await this.searchButton().click();
}
async SearchDataInfo(){
 await this.searchInputButton().click();
 await this.searchInputButton().setValue("apple detox drink");
 await this.resultedDatainfo().click();
//  await browser.pause(10000);
 
 // await browser.back();

}
async dot(){


 
await driver.touchAction([
  {action: 'press', x: 172, y: 1000},
  {action: 'wait', ms: 500},
  {action: 'moveTo', x: 190, y: 10},
  'release'
]);

 
await driver.touchAction([
  {action: 'press', x: 190, y: 80},
  {action: 'wait', ms: 500},
  {action: 'moveTo', x: 172, y: 1000},
  'release'
]);
// zoom in 
// await driver.touchAction([
//   { action: 'press', x: 0.5, y: 0.5 },
//   { action: 'wait', ms: 500 }, // Adjust wait time as needed
//   { action: 'moveTo', x: 0.5, y: 0.5 - 200 }, // Adjust the distance to zoom
//   'release',
// ]);

  // Perform a zoom gesture to zoom in on the element
  // browser.touchAction([
  //   { action: 'press', x:10,y:10 },
  //   { action: 'wait', ms: 1000 }, // Adjust wait time as needed
  //   { action: 'moveTo',  x: 0, y: -100 }, // Adjust the coordinates for zooming
  //   { action: 'release' },
  // ]);
  
  // Perform a zoom out gesture on the entire screen
  browser.multiTouchPerform([
    { action: 'press', x:12, y:10 , pointerType: 'touch' },
    { action: 'moveTo', x: 20, y: 0.5 + 200, pointerType: 'touch' },
    { action: 'release', pointerType: 'touch' },
  ]);
  

  await browser.pause(10000) 
};

}


module.exports = new LoginPage();
