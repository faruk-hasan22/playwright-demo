import {
    expect, Locator, Page
} from '@playwright/test'

const pageTitle = 'Objectives and Key Results'
const okrButtonText = 'New OKR'
const logoutURL = "https://okr-test-1.okr.staging.digital.ai/"


export class ObjectivePage{

    // Define Selectors
    readonly page: Page
        readonly objectivePageLink: Locator
        readonly objectivePageTitle: Locator
        readonly okrButton: Locator
        readonly signOutButtonTop: Locator
        readonly signOutButtonLeft: Locator
        readonly userIcon: Locator
        readonly confirmSignOut: Locator
        readonly filter: Locator
        readonly description: Locator
        readonly descriptionField: Locator
        readonly descriptionSaveButton: Locator
        readonly title: Locator
        readonly titleField: Locator
        readonly titleSaveButton: Locator
        readonly okrMainSaveButton: Locator
        readonly cancel: Locator
        readonly sessionDropdown : Locator

        //11/6 need to go through and cleanup any duplicates from above
        readonly getTitleField: Locator
        readonly inputTitledata: Locator
        readonly getDescrField: Locator
        readonly inputDescrdata: Locator
        readonly chooseSession: Locator
        readonly sessionSelect: Locator
        readonly clickAway: Locator
        readonly newOKRSave: Locator




    // Init selectors using constructor
    //review to remove any duplicates

    constructor(page: Page){
        this.page = page
        this.objectivePageLink = page.getByText('Objectives').first()
        this.objectivePageTitle = page.getByText('Objectives and Key Results')
        this.okrButton = page.getByTestId('newOkrButton')
        this.userIcon = page.getByText("UU")
        this.signOutButtonLeft = page.getByText("SIgn Out")
        this.signOutButtonTop = page.getByText("SIgn Out").first()
        this.confirmSignOut = page.locator('#kc-logout')
        this.filter = page.locator('#search-text')
        this.title = page.getByTestId('undefined-header-content-title-view-mode-typography')
        this.titleField = page.getByTestId('undefined-header-content-title-input')
        this.titleSaveButton = page.getByTestId('undefined-header-content-title-save')
        this.description = page.getByTestId('undefined-main-description-view-mode-typography')
        this.descriptionField = page.getByTestId('undefined-main-description-input')
        this.descriptionSaveButton = page.getByTestId('undefined-main-description-save')
        this.okrMainSaveButton = page.getByTestId('undefined-main-save')
        this.cancel = page.getByTestId('session-cancel')
        this.sessionDropdown= page.getByTestId('session-selector-autocomplete-input')
        //Signout
        this.signOutButtonLeft = page.getByText("SIgn Out")
        this.signOutButtonTop = page.getByText("SIgn Out").first()
        this.confirmSignOut = page.locator('#kc-logout')
        //Session
        this.chooseSession = page.getByTestId('session-selector-autocomplete')
        this.sessionSelect = page.getByTestId('session-selector-autocomplete-input')
        //Title
        this.inputTitledata = page.getByTestId('undefined-header-content-title-input')
        //New OKR Description
        this.getDescrField = page.getByTestId('undefined-main-description')
        this.inputDescrdata = page.getByTestId('undefined-main-description-input')
        //clicking to a empty space on the new OKR page
        this.clickAway = page.getByTestId('detail-dialog')
        //Save
        this.newOKRSave = page.getByTestId('undefined-main-save')
    }




    async navigateObjectivesPageURL(){
        await this.objectivePageLink.click()
        await expect(this.page).toHaveURL("https://okr-test-1.okr.staging.digital.ai/objectives")
    }

    async objectivesPageTitleTest(){
        await this.objectivePageLink.click()
        await expect(this.objectivePageTitle).toHaveText(pageTitle)
    }

    async objectivesPageOKRButtonTest(){
        await this.objectivePageLink.click()
        await expect(this.okrButton).toHaveText(okrButtonText)
    }

    async signOutTestTop(){
        await this.objectivePageLink.click()
        await this.userIcon.click()
        await this.signOutButtonTop.click()
        await this.confirmSignOut.click()
        await expect(this.page).toHaveURL(logoutURL);
    }

    async signOutTestLeft(){
        await this.objectivePageLink.click()
        await this.signOutButtonLeft.click()
        await this.confirmSignOut.click()
        await expect(this.page).toHaveURL(logoutURL);
    }

    async filterExist(){
        await this.objectivePageLink.click()
        await this.filter.isVisible()
    }

    async newOKRrTitleExist(text:string){
        await this.objectivePageLink.click()
        await this.okrButton.click()
        await this.title.isEnabled()
        await expect(this.title).toHaveText(text)
        //await this.okrMainSaveButton.click()
    }

    async newOKRrCreationTest(){
        await this.objectivePageLink.click()
        await this.okrButton.click()
        await this.title.click()
        await this.titleField.fill("Faruk Test 8/28")
        await this.titleSaveButton.click()
        await this.description.click()
        await this.descriptionField.fill("This is a test")
        await this.descriptionSaveButton.click()
    }
    async sessionSelector(){
        await this.sessionDropdown.click()
        // for (let TRISTAN = 0; TRISTAN <= 5; TRISTAN++) {
        //     await this.sessionDropdown.press("ArrowDown")

        //   }
        await this.sessionDropdown.press("ArrowDown")
        await this.sessionDropdown.press("Enter")
    }

    //session add
    async SessionSelect(){
        await this.chooseSession.click()
        await this.sessionSelect.type('Q4.2024')
    }

    async TitleInput(){
        await this.inputTitledata.fill("Playwright OKR Demo Title")
    }

    async DescriptionInput(){
        await this.getDescrField.click()
        await this.inputDescrdata.fill("Playwright OKR Demo Description")
    }

    async NewOKRClickAway(){
        await this.clickAway.click()
    }

    async NewOKRSave(){
        await this.newOKRSave.click()
        //await expect(this.newOKRSave).toBeHidden()
    }








}