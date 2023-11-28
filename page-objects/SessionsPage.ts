import {
    expect, Locator, Page
} from '@playwright/test'

const SessionPageURL = "https://okr-test-1.okr.staging.digital.ai/sessions"
const sessionPageTitle = "Sessions"

export class SessionsPage{


//Selectors
readonly page: Page
    readonly sessionPageLink: Locator
    readonly sessionPageTitle: Locator
    readonly sessionAddbutton: Locator


//Constructors
constructor(page: Page){
    this.page = page
    this.sessionPageLink = page.getByText('Sessions').first()
    this.sessionPageTitle = page.getByText('Sessions')
    this.sessionAddbutton = page.getByTestId('addSessionButton')
}

//async
    async SessionsPageURL(){
        await this.sessionPageLink.click()
        await expect(this.page).toHaveURL(SessionPageURL)
    }

    async SessionsTitle(){
        await this.sessionPageLink.click()
        await expect(this.sessionPageTitle).toHaveText(sessionPageTitle)
    }
    async SessionAdd(){
        await this.sessionPageLink.click()
        await this.sessionAddbutton.click()
    }
}