import {test,expect} from '@playwright/test'

import { LoginPage } from '../../page-objects/LoginPage'
import { SessionsPage } from '../../page-objects/SessionsPage'


const username = "admin01"
const password = "okr1234567890!"

test.describe.parallel('Sessions Page Tests',() =>{

    let loginPage: LoginPage
    let sessionsPage: SessionsPage


    test.beforeEach(async ({page}) =>{
        loginPage = new LoginPage(page)
        sessionsPage = new SessionsPage(page)
        loginPage.visit()
    })


    test('Sessions Page URL is Correct', async ({page}) =>{
        await loginPage.login(username,password)
        await sessionsPage.SessionsPageURL()
    })

    //needs work
    test.skip('OKR Sessions Page Title is Correct', async ({page}) =>{
        await loginPage.login(username,password)
        await sessionsPage.SessionsPageURL()
        await sessionsPage.SessionsTitle()
    })

    test('Searching for a Session with the search bar', async ({page}) =>{
        await loginPage.login(username,password)
        await sessionsPage.SessionsPageURL()
        await expect(page.getByPlaceholder('Type to search')).toBeVisible()
        await page.getByTestId('SearchInput-search-text').fill('tristan')
        await expect(page.getByText('Tristan Demo to QE Team')).toBeVisible()
    })
})