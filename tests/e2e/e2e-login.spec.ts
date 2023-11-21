import {test,expect} from '@playwright/test'

import { LoginPage } from '../../page-objects/LoginPage'

import { ObjectivePage } from '../../page-objects/ObjectivePage'

const username = "user01"
const password = "okr123456789!"

test.describe.parallel('Login / Logout Flow',() =>{

    let loginPage: LoginPage
    let objectivePage: ObjectivePage

    // Before Hook

    test.beforeEach(async ({page}) =>{

        loginPage = new LoginPage(page)

        objectivePage = new ObjectivePage(page)

        loginPage.visit()

    })

//negative tests

// Test #001
// testing with invalid username and password
// should not able to login
// should get an error message
    test('Negative scenario for the login test', async ({page}) =>{

        await loginPage.login("invalid","invalid")
        await loginPage.assertErrorMessage()


    })



//positive tests
// Test #002
// should able to log in
// should see the should see the objectives page url correctly
// The New OKR button should be visible
    test('Log in test', async ({page}) =>{

        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        await objectivePage.objectivesPageOKRButtonTest()



    })

  // Test #003
  // users should able to sign out from the top right

    test('sign out test (top)', async ({page}) =>{

        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        await objectivePage.signOutTestTop()

    })

    // Test #004
    // users should able to sign out from the left sidebar

    test('sign out test (left)', async ({page}) =>{

        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        await objectivePage.signOutTestLeft()

    })



})

