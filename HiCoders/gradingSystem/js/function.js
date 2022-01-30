let averageGrade = (pGradeContainer,math,physics,chemistry,geo,eng)  =>{
    pGradeContainer.innerHTML = `
    <span class="text-white fw-bold">Math</span> <span class="badge rounded-pill bg-success"> ${math}</span>
    <span class="text-white fw-bold">Physics</span> <span class="badge rounded-pill bg-success">${physics}</span>
    <span class="text-white fw-bold">Chemistry</span><span class="badge rounded-pill bg-success">${chemistry}</span>
    <span class="text-white fw-bold">Geometry</span><span class="badge rounded-pill bg-success">${geo}</span>
    <span class="text-white fw-bold">English</span><span class="badge rounded-pill bg-success">${eng}</span>
    `
}
averageGrade(averageGradeContainerA,mathAverageA,PhysicsAverageA,chemistryAverageA,geographyAverageA,englishAverageA)
averageGrade(averageGradeContainerB,mathAverageB,PhysicsAverageB,chemistryAverageB,geographyAverageB,englishAverageB)
averageGrade(averageGradeContainerC,mathAverageC,PhysicsAverageC,chemistryAverageC,geographyAverageC,englishAverageC)
let studentContainer = (pContainer,pClass) => {
    pContainer.innerHTML = pClass.map((x, index) => {
        return `  
            <div  class="card" style="width: 10rem;" >
            <img src="${pClass[index].profilePicture}" class="card-img-top" alt="...">
            <div class="card-body" >
                <h5 class="card-title text-info">${pClass[index].studentName}</h5>
                <p class="card-text"></p>
            </div>
            <ul id="grades" class="list-group list-group-flush">
            <li class="list-group-item">${(function subject() {
            return  Object.entries(pClass[index].grades[0]).map(e=> (e + '<br> <hr>').replace(',',':').toLocaleUpperCase()).join('')
            })()} 
            </li>
            </ul>
            </div>
        `
    }).join('')
}
studentContainer(aStudentContainer,classA)
studentContainer(bStudentContainer,classB)
studentContainer(cStudentContainer,classC)


