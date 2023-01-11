const inject = require('../utils/inject')
const pagepool = require('../utils/pagepool')

const scrapeInternship = async (page) => {
    // await page.waitForNavigation()
    await page.waitForSelector('div.detail_view')
    const internship = await inject(page, 'scrape/internship.eval.js')
    return internship
}

const scrapeSearchResults = async (page) => {
    await page.waitForSelector('div.internship_list_container')
    const links = await inject(page, 'scrape/searchresults.eval.js')
    return links
}

const category = async (category, browser, timeout) => {
    const page = await pagepool.getPage(browser)
    await page.goto(`https://internshala.com/internships/${category}-internship/`)
    await page.waitForSelector('div.brand_container')
    const heading = await inject(page, 'scrape/getHeading.eval.js')
    if(heading.includes("total")) {
        throw new Error(`Category: ${category} does not exist`)
    }
    const links = await scrapeSearchResults(page)
    console.log(`Found ${links.length} links`)
    const internships = []
    let success = 0, failed = 0;
    for(let i = 0; i < links.length; i++) {
        const page = await pagepool.getPage(browser)
        await page.goto(links[i])
        try {
            console.log(`\tScraping page: ${i+1}/${links.length}`)
            const internship = await scrapeInternship(page)
            internships.push(internship)
            success++
            await new Promise((res, rej) => {
                setTimeout(res, timeout)
            })
        } catch(e) {
            console.log(`\t${i+1}. Failed`)
            failed++
        } finally {
            pagepool.freePage(browser, page)
        }
    }
    pagepool.freePage(browser, page)
    return {
        success,
        failed,
        internships
    }
}

module.exports = {
    scrapeSearchResults,
    scrapeInternship,
    category
}