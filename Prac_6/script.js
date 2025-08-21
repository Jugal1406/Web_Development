const studentJSON=`[
{"Nmae" : "Jugal1","dept":"CSE","year":"2025"},
{"Nmae" : "Jugal2","dept":"CSE","year":"2025"},
{"Nmae" : "Jugal3","dept":"CSE","year":"2025"},
{"Nmae" : "Jugal4","dept":"CSE","year":"2025"},
{"Nmae" : "Jugal5","dept":"CSE","year":"2025"},
]`

const students=JSON.parse(studentJSON)
const studentContainer=document.getElementById('student-container')
const next=document.getElementById('next')
const prev=document.getElementById('prev')

let currentPage=1
const perPage=2
function pagination(array,page,perPage)
{
    const start=(page-1)*perPage
    return array.slice(start,start+perPage)
}
function stydentCard(student)
{
    const card=document.createElement('div')
    card.className='student-card'

}
function renderPage(){
    const pageData=pagination(students,currentPage,perPge)
    renderStudent(pagedData)
}
renderPage()