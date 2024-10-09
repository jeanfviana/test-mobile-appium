import { $, driver } from '@wdio/globals'





class SignPage {

    get firstName() {
        return $('android=new UiSelector().resourceId("firstName")')
    }

    get lastName() {
        return $('android=new UiSelector().resourceId("lastName")')
    }

    get phoneNumber() {
        return $('android=new UiSelector().resourceId("phone")')
    }

    get email() {
        return $('android=new UiSelector().resourceId("email")')
    }

    get password() {
        return $('android=new UiSelector().resourceId("password")')
    }

    get rePassword() {
        return $('android=new UiSelector().resourceId("repassword")')
    }

   
    get btnCreate() {
        return $('android=new UiSelector().resourceId("create")')
    }

    




    async sign(firstName, lastName, phoneNumber, email, password, rePassword) {
        
        await driver
            .action('pointer')
            .move({ x: 250, y: 600 })
            .down()
            .pause(100)
            .move({ duration: 500, x: 250, y: 150 })
            .up()
            .perform();
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.phoneNumber.setValue(phoneNumber)
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.rePassword.setValue(rePassword)
        await this.btnCreate.click()


    }
}

export default new SignPage();
