import {test,expect} from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'


const username = "admin01"
const password = "okr123456789!"
//Home Page will be removed/hidden for phase 1 okr release.
test.describe.parallel('Home Page OKR Tests',() =>{
    let loginPage: LoginPage
    let homePage: HomePage


    test.beforeEach(async ({page}) =>{
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        loginPage.visit()
    })


    test('Home Page displays correct URL when selected', async ({page}) =>{
        await loginPage.login(username,password)
        await homePage.HomePageURL()
    })

    test('chevron expands and collapses the side nav', async ({page}) =>{
        await loginPage.login(username,password)
        await homePage.HomePageURL()
        await page.getByLabel('chevron-left icon}').click()
        await expect(page.getByLabel('chevron-left icon}')).toBeHidden()
        await page.getByLabel('chevron-right icon}').click()
        await expect(page.getByLabel('chevron-right icon}')).toBeHidden()
    })

    test('forgot password screen promps error if left blank', async ({page}) =>{
        await loginPage//.login(username,password)
        //await homePage.HomePageURL()
        await page.getByText('Forgot Password?').click()
        const pagetitle = await page.getByText('        Forgot Your Password?')
        await expect(pagetitle).toBeTruthy()
        await page.locator('[type="submit"]').click()
        await expect(page.locator('[id="input-error-username"]')).toContainText('Please specify username.')
        await expect(page.locator('[id="input-error-username"]')).toBeVisible()
    })


})