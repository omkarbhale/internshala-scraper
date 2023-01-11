const specialCases = (categories) => {
    for(let i = 0; i < categories.length; i++) {
        if(categories[i] == 'UI/UX Design') {
            categories[i] = 'ui%2Fux'
        }
        if(categories[i] == 'Business/MBA') {
            categories[i] = 'mba'
        }
        if(categories[i] == 'ASP.NET Development') {
            categories[i] = 'asp.net'
        }
        if(categories[i] == "Biotechnology Engineering") {
            categories[i] = 'biotech'
        }
        if(categories[i] == "Electrical Engineering") {
            categories[i] = 'electrical'
        }
        if(categories[i] == "Electronics Engineering") {
            categories[i] = 'electronics'
        }
        if(categories[i] == 'Human Resources (HR)') {
            categories[i] = 'hr'
        }
        if(categories[i] == 'Java Development') {
            categories[i] = 'java'
        }
        if(categories[i] == 'Mechanical Engineering') {
            categories[i] = 'mechanical'
        }
        if(categories[i] == 'Product Management') {
            categories[i] = 'product'
        }
        if(categories[i] == 'Public Relations (PR)') {
            categories[i] = 'pr'
        }
        if(categories[i] == 'Python/Django Development') {
            categories[i] = 'python%2Fdjango'
        }
    }
    return categories
}

const CATEGORIES = specialCases([
    ".NET Development",
    "3D Printing",
    "Accounts",
    "Acting",
    "Agriculture & Food Engineering",
    "Analytics",
    "Anchoring",
    "Android App Development",
    "Angular.js Development",
    "Animation",
    "Architecture",
    "Artificial Intelligence (AI)",
    "ASP.NET Development",
    "Audio Making/Editing",
    "Automobile Engineering",
    "Backend Development",
    "Big Data",
    "Bioinformatics",
    "Biology",
    "Biotechnology Engineering",
    "Blockchain Development",
    "Blogging",
    "Brand Management",
    "Business/MBA",
    "CAD Design",
    "Campus Ambassador",
    "Chartered Accountancy (CA)",
    "Chemical Engineering",
    "Chemistry",
    "Cinematography",
    "Civil Engineering",
    "Client Servicing",
    "Cloud Computing",
    "Commerce",
    "Company Secretary (CS)",
    "Computer Science",
    "Computer Vision",
    "Content Writing",
    "Copywriting",
    "Creative Writing",
    "Culinary Arts",
    "Customer Service",
    "Cyber Security",
    "Data Entry",
    "Data Science",
    "Database Building",
    "Design",
    "Dietetics/Nutrition",
    "Digital Marketing",
    "Editorial",
    "Electrical Engineering",
    "Electronics Engineering",
    "Embedded Systems",
    "Engineering",
    "Engineering Design",
    "Engineering Physics",
    "Environmental Sciences",
    "Event Management",
    "Facebook Marketing",
    "Fashion Design",
    "Film Making",
    "Finance",
    "Flutter Development",
    "Front End Development",
    "Full Stack Development",
    "Fundraising",
    "Game Development",
    "General Management",
    "Government",
    "Graphic Design",
    "Hospitality",
    "Hotel Management",
    "Human Resources (HR)",
    "Humanities",
    "Image Processing",
    "Industrial & Production Engineering",
    "Industrial Design",
    "Information Technology",
    "Instrumentation & Control Engineering",
    "Interior Design",
    "Internet of Things (IoT)",
    "iOS App Development",
    "Java Development",
    "Javascript Development",
    "Journalism",
    "Law",
    "Legal Research",
    "Machine Learning",
    "Manufacturing Engineering",
    "Market/Business Research",
    "Marketing/Sales",
    "Material Science",
    "Mathematics",
    "Mechanical Engineering",
    "Mechatronics",
    "Media",
    "Medicine",
    "Merchandise Design",
    "Mobile App Development",
    "Motion Graphics",
    "Music",
    "Network Engineering",
    "NGO",
    "Node.js Development",
    "Operations",
    "Pharmaceutical",
    "Photography",
    "PHP Development",
    "Physics",
    "Political/Economics/Policy Research",
    "Product Management",
    "Programming",
    "Project Management",
    "Proofreading",
    "Psychology",
    "Public Relations (PR)",
    "Python/Django Development",
    "Recruitment",
    "Ruby on Rails",
    "Science",
    "Search Engine Optimization (SEO)",
    "Social Media Marketing",
    "Social Work",
    "Software Development",
    "Software Testing",
    "Statistics",
    "Strategy",
    "Subject Matter Expert (SME)",
    "Supply Chain Management (SCM)",
    "Talent Acquisition",
    "Teaching",
    "Telecalling",
    "Transcription",
    "Translation",
    "Travel & Tourism",
    "UI/UX Design",
    "Video Making/Editing",
    "Videography",
    "Volunteering",
    "Web Development",
    "Wordpress Development",
]).map(category => category.toLowerCase()).map(category => category.replaceAll(" ", "-")).map(category => category.replaceAll('&', 'and')).map(category => category.replaceAll("/", "%2F"))

module.exports = {
    CATEGORIES,
}