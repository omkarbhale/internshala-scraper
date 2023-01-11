const fs = require('fs')

const saveCategory = (category, response) => {
    fs.writeFileSync(`data/${category}.json`, JSON.stringify(response), {encoding: 'utf-8'})
}

const checkCategory = (category) => {
    return fs.existsSync(`data/${category}.json`)
}

module.exports = {
    saveCategory,
    checkCategory
}