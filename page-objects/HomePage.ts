import {
    expect, Locator, Page
} from '@playwright/test'

const HomePageURL = "https://okr-test-1.okr.staging.digital.ai"
const HomePageTitle = "Lorem ipsum fauxlatinum..."

export class HomePage{


    //Selectors
    readonly page: Page
        readonly homePageLink: Locator
        readonly homePageTitle: Locator


    //Constructors
    constructor(page: Page){
        this.page = page
        this.homePageLink = page.getByLabel('home icon}')
        this.homePageTitle = page.getByText('Lorem ipsum fauxlatinum...')
    }

    //async
        async HomePageURL(){
            await this.homePageLink.click()
            await expect(this.page).toHaveURL(HomePageURL)
        }

        async HomePageTitle(){
            await this.homePageLink.click()
            await expect(this.homePageTitle).toHaveText(HomePageTitle)
        }



    }