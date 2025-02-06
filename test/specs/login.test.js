import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page'
import loginPage from '../pageobjects/login.page'
import profilePage from '../pageobjects/profile.page'
import signPage from '../pageobjects/sign.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('jeanfviana@hotmail.com', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu('profile')
        expect ((await profilePage.profileName('ebac cliente')).isDisplayed()).toBeTruthy()
        //await driver.pause(10000)
        
    })

    // it.only('Validar cadastro', async () => {
    //     await homePage.openMenu('profile')
    //     await homePage.openSign()
    //     await signPage.sign('Jean', 'Viana', '51993883535', 'jeanfviana@gmail.com', '123456', '123456')

    // });
})

