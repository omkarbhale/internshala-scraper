const links = [...document.querySelectorAll('a.view_detail_button')].filter(e => e.href.startsWith('https://internshala.com/internship/')).map(e => e.href)
;[...new Set(links)]