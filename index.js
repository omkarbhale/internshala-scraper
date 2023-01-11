const puppeteer = require("puppeteer");
const pagepool = require('./utils/pagepool')
const { CATEGORIES } = require('./constants')
const { category: scrapeCategory } = require('./scrape')
const { saveCategory, checkCategory } = require('./utils/category')

const scrapeInternshipsOfCategory = async (category) => {

}

const start = async () => {
    const browser = await puppeteer.launch({})

    await pagepool.initialize(browser)

    for(let i = 0; i < CATEGORIES.length; i++) {
        if(checkCategory(CATEGORIES[i])) {
            // skip if already saved
            console.log(`Skipping category: ${CATEGORIES[i]} ${i+1}/${CATEGORIES.length}`)
            continue;
        }
        console.log(`Scraping category: ${CATEGORIES[i]} ${i+1}/${CATEGORIES.length}`)
        const response = await scrapeCategory(CATEGORIES[i], browser, 500)
        console.log(`Saving ${CATEGORIES[i]} ${i+1}/${CATEGORIES.length} to file`)
        saveCategory(CATEGORIES[i], response)
    }

    await browser.close()
}

start()
// https://internshala.com/internship/detail/backend-development-work-from-home-job-internship-at-clapingo-education1665154240