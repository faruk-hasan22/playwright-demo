import {test,expect} from '@playwright/test'

import { LoginPage } from '../../page-objects/LoginPage'

import { ObjectivePage } from '../../page-objects/ObjectivePage'

const username = "user01"
const password = "okr123456789!"

test.describe.parallel('Objectives Page Tests',() =>{

    let loginPage: LoginPage
    let objectivePage: ObjectivePage

    // Before Hook

    test.beforeEach(async ({page}) =>{

        loginPage = new LoginPage(page)

        objectivePage = new ObjectivePage(page)

        loginPage.visit()

    })

// Test #100
// users should see the correct url on the Objectives page
    test('Objectives Page URL test', async ({page}) =>{

        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        


    })
    // Test #101
    // The title of the Objectives page should be displayed and spelled correctly

    test('Objectives Page title test', async ({page}) =>{

        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        await objectivePage.objectivesPageTitleTest()
        

    })

    // Test #102
    // The OKR Button should be presen and display the button text correctly

    test('Objectives Page OKR button test', async ({page}) =>{

        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        await objectivePage.objectivesPageOKRButtonTest()
        
    })

    test('Objectives Page Filter is displayed', async ({page}) =>{

        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        await objectivePage.filterExist()
        
        
    })

    test("New OKR Title and Description",async ({page}) =>{

        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        await objectivePage.newOKRrCreationTest()
        await objectivePage.sessionSelector();
        await page.waitForTimeout(2000);
        /*
 await page.getByTestId('newOkrButton').click();
  await page.getByTestId('session-date-range-begin-input').getByTestId('dot-date-picker-input').click();
  await page.getByTestId('session-date-range-begin-input').getByTestId('date-picker-open-btn').click();
  await page.getByRole('gridcell', { name: '31' }).click();
  await page.getByTestId('session-date-range-begin-input').getByTestId('date-picker-open-btn').click();
  await page.getByLabel('Previous month').click();
  await page.getByRole('gridcell', { name: '31' }).click();
  await page.getByTestId('session-selector-autocomplete-input').click();
  await page.getByTestId('session-selector-autocomplete-input').press('ArrowDown');
  await page.getByTestId('session-selector-autocomplete-input').press('Enter');
        */


    })

    test("New OKR Title Test",async ({page}) =>{

        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        await objectivePage.newOKRrTitleExist("New OKR")
        


    })

   

    /*
    import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://okr-test-1.okr.staging.digital.ai/objectives');
  await page.goto('https://identity-01.staging.digital.ai/auth/realms/okr-test-1/protocol/openid-connect/auth?client_id=dai-svc-consumer&redirect_uri=https%3A%2F%2Fokr-test-1.okr.staging.digital.ai%2Fobjectives&state=21c281d0-f55c-44cc-8961-717c78b79d78&response_mode=fragment&response_type=code&scope=openid&nonce=fbb3cec9-1380-41e8-8725-475f103f32cb');
  await page.getByPlaceholder('Username or email').click();
  await page.getByPlaceholder('Username or email').fill('user01');
  await page.getByPlaceholder('Username or email').press('Tab');
  await page.getByPlaceholder('Password').fill('okr123456789!');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByTestId('newOkrButton').click();
  await page.getByTestId('undefined-main-description-view-mode-typography').click();
  await page.getByTestId('undefined-main-description-input').fill('This is a test');
  await page.getByTestId('undefined-main-description-save').click();
  await page.getByTestId('undefined-header-content-title-view-mode-typography').click();
  await page.getByTestId('undefined-header-content-title-input').fill('Faruk Test');
  await page.getByTestId('undefined-header-content-title-save').click();
});

    */





})
