const { $ } = require('@wdio/globals')
// const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage  {
    /**
     * define selectors using getter methods
     */
    locators = {
        android: {
            inputUserName: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[1]",
            inputUserName2 : "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.ImageView[1]",
            inputPassword: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.ImageView[2]",
            btnSubmit: "//android.widget.ImageView[@content-desc='Login']",
        },
        ios: {
            inputUserName: "~userName",
            inputUserName2: "-ios predicate string:type == 'XCUIElementTypeOther' AND name CONATINS 'PASS'",
            inputPassword: "~password",
            btnSubmit: '~buttonSignin',
        }
      };
      
      get platform() {
        return  'android' ;
      }

    get inputUserName () {
        return (this.locators[this.platform].inputUserName);
        // return $("//*[text()='Email']");
        //return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[1]");
    }

    get inputUserName2(){
        return $(this.locators[platform].inputUserName2);
        //return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.ImageView[1]");
    }

    get inputPassword () {
        return $(this.locators[platform].inputUserName2);
         //return $("//*[text()='Password']");
        //return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]");
         // return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.ImageView[2]");
    }

    get btnSubmit () {
        return $(this.locators[platform].btnSubmit);
        //return $("//android.widget.ImageView[@content-desc='Login']");
        //android.widget.ImageView[@content-desc="Login"]
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await $("//android.view.View[@content-desc='Login']").waitForDisplayed();
        await this.inputUserName.click();
        await this.inputUserName2.setValue(username);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        //return super.open('login');
       
    }
}


var loginpage = new LoginPage();
console.log("------------->>>",loginpage.inputUserName);
