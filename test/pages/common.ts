import {assert} from "chai"

class Commmon {

    iAmOnTheStoreLoginPage(homepage:string){
        // browser.url(homepage);
        browser.url(homepage);
        browser.maximizeWindow();
        browser.pause(2000);
        $("#frm-signIn-name").setValue("gauthi449");
        $("#frm-signIn-password").setValue("gauthi449");
        // $('[class="button submit"]').click();
        browser.pause(2000);
    }
}

export default new Commmon;