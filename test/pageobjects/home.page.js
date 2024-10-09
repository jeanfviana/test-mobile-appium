import { $ } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {

    async openMenu(menu){
        await $(`android=new UiSelector().resourceId("tab-${menu}")`).click()
    }

    async openSign(){
        await $(`android=new UiSelector().text("Sign up")`).click()
    }

}



export default new HomePage();
