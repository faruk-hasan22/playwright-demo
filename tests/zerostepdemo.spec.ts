import { test } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test.describe('Udemy Demo', () => {

  test.skip('demo', async ({ page }) => {
    await page.goto('https://www.msn.com/en-us');

    await ai('Click the "Sports" tab', { page, test });
    await ai('Search for "Caitlin Clark"', { page, test });

    await ai('select the first story about "Caitlin Clark"', { page, test });

    const title = await ai(`What is the title of the first organic story for "Caitlin Clark"?`, { page, test })

    console.log('First Caitlin Clark story is: ', title)
  });


  test.skip('search and verify the first organic search result', async ({ page }) => {
    const searchTerm = 'software testing'
    await page.goto('https://www.google.com')
    await ai(`Search for '${searchTerm}'`, { page, test })
    await ai('Hit enter', { page, test })

    await page.waitForURL('https://www.google.com/search**')

    const title = await ai(`What is the title of the first organic search result?`, { page, test })

    console.log('First organic search result is: ', title)
  })
})

