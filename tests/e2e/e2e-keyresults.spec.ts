import { test,expect } from '@playwright/test'
import {ObjectivePage} from "../../page-objects/ObjectivePage"
import { LoginPage } from "../../page-objects/LoginPage";

const username = "admin01"
const password = "okr123456789!"

test.describe.parallel('Key Results Test',() =>{

    let loginPage: LoginPage
    let objectivePage: ObjectivePage

    // Before Hook

    test.beforeEach(async ({page}) =>{
        loginPage = new LoginPage(page)
        objectivePage = new ObjectivePage(page)
        loginPage.visit()
    })


    //Need to fix save issue where Playwright is no longer selecting the save button
    test('Key Results No message found displays on New OKRs', async ({page}) =>{
        await loginPage.login(username,password)
        await objectivePage.navigateObjectivesPageURL()
        //await page.waitForSelector('[id=":r9:"]')
        await page.getByTestId('newOkrButton').click();
        // //wait for element to become available
        await page.waitForSelector('[data-testid="session-cancel"]')
        //Title
        await page.getByTestId('undefined-header-content-title-view-mode-typography').click()
        await objectivePage.TitleInput()
        //Description
        await objectivePage.DescriptionInput()
        //session
        await objectivePage.SessionSelect()
        await objectivePage.NewOKRClickAway()
        //Saving
        await objectivePage.NewOKRSave()
        //await expect(objectivePage.NewOKRSave)).toBeHidden()
        await expect(page.getByTestId('undefined-main-cancel')).toBeHidden()
        await expect(page.getByTestId("undefined-empty-key-results")).toContainText("No Key Results Found")
    })








})