import {test,expect} from '@playwright/test'

import { LoginPage } from '../../page-objects/LoginPage'

import { ObjectivePage } from '../../page-objects/ObjectivePage'

const username = "user01"
const password = "okr123456789!"

test.describe.parallel('Objectives Page Tests',() =>{

    let loginPage: LoginPage
    let objectivePage: ObjectivePage


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

    test("New OKR Title Test",async ({page}) =>{
        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        await objectivePage.newOKRrTitleExist("New OKR")
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
  await page.getByTestId('session-selector-autocomplete-input').press('Enter');   */
    })

    test('OKR Search bar is visible on the page', async ({page}) =>{
        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        //allows the full page to render "Rows per Page"
        await page.waitForSelector('[id=":r9:"]')
        //await page.getByPlaceholder('Type to search')
        await expect(page.getByPlaceholder('Type to search')).toBeVisible()
    })

    //need to address the .type in session
    test('creating a new OKR via the new OKR button', async ({page}) =>{
        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        //await page.waitForSelector('[id=":r9:"]')
        await page.getByTestId('newOkrButton').click();
        // //wait for element to become available
        //await page.waitForSelector('[data-testid="session-cancel"]')
        //Adding a title (THIS WORKS)
        await objectivePage.TitleInput()
        //Adding a Description (THIS WORKS)
        await objectivePage.DescriptionInput()
        //session
        await page.getByTestId('session-selector-autocomplete').click
        await page.getByTestId('session-selector-autocomplete-input').fill('Q4.2024')
        await page.getByTestId('detail-dialog').click()
        //Saving
        await page.getByTestId('undefined-main-save').click()
        await expect(page.getByTestId('undefined-main-save')).toBeHidden()
        await expect(page.getByTestId('undefined-main-cancel')).toBeHidden()
    })

    test('creating a OKR with Page Object Model', async ({page}) =>{
        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        //await page.waitForSelector('[id=":r9:"]')
        await page.getByTestId('newOkrButton').click();
        // //wait for element to become available
        //await page.waitForSelector('[data-testid="session-cancel"]')
        //Title
        await objectivePage.TitleInput()
        //Description
        await objectivePage.DescriptionInput()
        //session
        await objectivePage.SessionSelect()
        await objectivePage.NewOKRClickAway()
        //Saving
        await objectivePage.NewOKRSave()
        await page.getByText('Save').dblclick()
        await page.waitForTimeout(3000);
        await expect(page.getByTestId('undefined-main-cancel')).toBeHidden()

    })

    test('closing the new OKR window clicking cancel', async ({page}) =>{
        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
         //waiting on full page to load
        await page.waitForSelector('[id=":r9:"]')
        await page.getByTestId('newOkrButton').click();
        await page.waitForSelector('[data-testid="undefined-main-cancel"]')
        await expect(page.getByText('Cancel')).toBeVisible()
        await page.getByText('Cancel').click()
        await expect(page.getByText('Cancel')).toBeHidden()
    })

    test('closing the new OKR window clicking the X', async ({page}) =>{
        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        await page.waitForSelector('[id=":r9:"]')
        await page.getByTestId('newOkrButton').click();
        await page.waitForSelector('[data-testid="undefined-main-cancel"]')
        await expect(page.getByText('Cancel')).toBeVisible()
        await page.getByTestId('button-icon-i').click()
        await expect(page.getByText('Cancel')).toBeHidden()
    })

    test('Opening the filter menu and close it clicking X', async ({page}) =>{
        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        await page.waitForSelector('[id=":r9:"]')
        await page.getByLabel('filter icon}').click();
       // await page.waitForSelector('[data-testid="undefined-main-cancel"]')
        await expect(page.getByTestId('filter-side-panel-owners-input')).toBeVisible()
        await page.getByLabel('close icon}').click()
        await expect(page.getByTestId('filter-side-panel-owners-input')).toBeHidden()
    })


//DISCUSS WITH FARUK IF NEEDED
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
