import {test,expect} from '@playwright/test'

import { LoginPage } from '../../page-objects/LoginPage'
import { SessionsPage } from '../../page-objects/SessionsPage'


const username = "admin01"
const password = "okr123456789!"

test.describe.parallel('Sessions Page Tests',() =>{

    let loginPage: LoginPage
    let sessionsPage: SessionsPage

    // Before Hook - checks to ensure page objects exist and also tells the app where to start
    test.beforeEach(async ({page}) =>{


        loginPage = new LoginPage(page)
        sessionsPage = new SessionsPage(page)

        loginPage.visit()
    })


// Sessions Page displays the correct URL
    test('Sessions Page URL test', async ({page}) =>{

        await loginPage.login(username,password)
        await sessionsPage.SessionsPageURL()



    })
})