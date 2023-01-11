const maxpages = 20
const pages = []

const pageReqQueue = []

const initialize = async (browser) => {
    (await browser.pages()).forEach(page => {
        pages.push({ page, used: false })
    })
}

const getPage = async (browser) => {
    const p = pages.find(page => !page.used)
    if(p != null) {
        p.used = true
        return p.page
    }

    if((await browser.pages()).length < maxpages) {
        const page = await browser.newPage()
        pages.push({ page, used: true })
        return page
    }

    return new Promise((res, rej) => {
        pageReqQueue.push(res)
    })
}

const freePage = async (browser, page) => {
    if(!(await browser.pages()).includes(page)) {
        throw new Error("Page is not open in given browser")
    }

    const p = pages.find(p => p.page == page)
    if(p == null) {
        throw new Error("Page was not created by getPage method")
    }

    if(pageReqQueue.length == 0) {
        p.used = false
        return
    }

    const res = pageReqQueue.shift()
    res(p)
}

module.exports = {
    initialize,
    getPage,
    freePage
}