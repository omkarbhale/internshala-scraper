const fs = require('fs')
const random = (start, end) => {
    return Math.random() * (end-start) + start;
}
const corr = (applications, m) => {
    return applications * m;
}
const writer = fs.createWriteStream('./utils/fakedata.csv')

writer.write('Applications, Openings\n')
let m = 1;
for (let i = 0; i < 3000; i++) {
    m += random(-.04, .04);
    const applications = random(0, 2000);
    let openings = corr(applications, m);
    openings += openings * random(-.1, .1)
    writer.write(`${Math.floor(applications)},${Math.floor(openings)}\n`)
}