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
        


       


    // Init selectors using constructor

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


  

   



}