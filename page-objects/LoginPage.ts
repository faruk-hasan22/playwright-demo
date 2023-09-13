import {
    expect, type Locator, type Page
} from '@playwright/test'

const okrurl = "https://okr-test-1.okr.staging.digital.ai/objectives"


export class LoginPage{

    
    // Define Selectors 
    readonly page: Page 
        readonly usernameInput: Locator 
        readonly passwordInput: Locator 
        readonly submitButton: Locator 
        readonly errorMessage: Locator 


    // Init selectors using constructor

    constructor(page: Page){
        this.page = page 
        this.usernameInput = page.locator("#username")
        this.passwordInput = page.locator("#password")
        this.submitButton = page.locator("#kc-login")
        this.errorMessage = page.locator("#input-error")
    }

    // Define login page methods

    async visit(){
        await this.page.goto(okrurl)
    }


    async login(username: string,password: string){
        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        await this.submitButton.click()
    }


    async assertErrorMessage(){

        await expect(this.errorMessage).toContainText("Invalid username or password.")
    }

   



}