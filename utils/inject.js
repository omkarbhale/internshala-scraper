const fs = require('fs')
const path = require('path')

const inject = async (page, filepath) => {
    // Convert to absolute filepath
    filepath = path.resolve(filepath)

    if(!fs.existsSync(filepath)) {
        throw new Error('Provided filepath does not exist')
    }

    if(!filepath.endsWith('.js')) {
        throw new Error('Provided filepath must have \'.js\' extension')
    }

    const code = fs.readFileSync(filepath, {encoding: 'utf-8'})
    return await page.evaluate(code)
}

module.exports = inject