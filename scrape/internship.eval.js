const findByQueryAndinnerText = (root=document, query, innerText) => {
    const elems = [...root.querySelectorAll(query)]
    const filtered = elems.filter(elem => elem.innerText == innerText)
    return filtered[0]
}

const internship = {}

const container = document.querySelector('div.detail_view')
internship["url"] = window.location.pathname
    internship["name"] = container.querySelector('.profile_on_detail_page').innerText
try {
    internship["company"] = container.querySelector('a.link_display_like_text.view_detail_button').innerText
} catch (e) {
    internship["company"] = undefined
}
try {
    internship["location"] = container.querySelector('a.location_link.view_detail_button').innerText
} catch (e) {
    internship["location"] = undefined
}
try {
    internship["duration"] = findByQueryAndinnerText(container, 'span', 'DURATION').parentNode.nextElementSibling.innerText
} catch (e) {
    internship["duration"] = undefined
}
try {
    internship["stipend"] = findByQueryAndinnerText(container, 'span', 'STIPEND').parentNode.nextElementSibling.innerText
} catch (e) {
    internship["stipend"] = undefined
}
try {
    internship["applications"] = container.querySelector('.applications_message').innerText
} catch (e) {
    internship["applications"] = undefined
}
try {
    internship["skills"] = [...findByQueryAndinnerText(container, '.section_heading.heading_5_5', 'Skill(s) required').nextElementSibling.querySelectorAll('.round_tabs')].map(elem => elem.innerText)
} catch (e) {
    internship["skills"] = []
}
try {
    internship["perks"] = [...findByQueryAndinnerText(container, '.section_heading.heading_5_5', 'Perks').nextElementSibling.querySelectorAll('.round_tabs')].map(elem => elem.innerText)
} catch (e) {
    internship["perks"] = []
}
try {
    internship["openings"] = findByQueryAndinnerText(container, '.section_heading.heading_5_5', 'Number of openings').nextElementSibling.innerText
} catch (e) {
    internship["openings"] = undefined
}
internship