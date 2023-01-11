const fs = require('fs');
const path = require('path')

const in_path = 'C:/Users/omkar/OneDrive/Desktop/internshala-scraper/data'
const out_path = 'C:/Users/omkar/OneDrive/Desktop/internshala-scraper/data.csv'

const fileNames = fs.readdirSync(in_path);
const writable = fs.createWriteStream(out_path);

writable.write('URL:Name:Category:Company:Location:Duration:Stipend:Applications:Skills:Perks:Openings\n');
fileNames.forEach((fileName, i) => {
    console.log(`${i+1}. ${fileName}`)
    const filepath = path.join(in_path, fileName)
    const internships = JSON.parse(fs.readFileSync(filepath, {encoding: 'utf-8'})).internships
    internships.forEach(internship => {
        writable.write(`"${internship.url}":"${internship.name}":"${fileName.split('.json')[0]}":"${internship.company}":"${internship.location}":"${internship.duration}":"${internship.stipend}":"${internship.applications}":"${arrToString(internship.skills)}":"${arrToString(internship.perks)}":"${internship.openings}"\n`)
    })
})
writable.close()

function arrToString(arr) {
    return arr.join(',')
}