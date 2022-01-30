const classAverageCalculator = () => {
    
}

const averageMath = (className) =>{
    className = className.map((x) => x).map((x) => x.grades[0].math).filter(e => e)
    let classAverage = className.reduce((total,grade) => total + grade ,0)/className.length
    return classAverage
}
const averagePhysics = (className) => {
    className = className.map((x) => x).map((x) => x.grades[0].physics).filter(e => e)
    let classAverage = className.reduce((total,grade) => total + grade ,0)/className.length
    return classAverage
}
const averageChemistry = (className) =>{
    className = className.map((x) => x).map((x) => x.grades[0].chemistry).filter(e => e)
    let classAverage = className.reduce((total,grade) => total + grade ,0)/className.length
    return classAverage
    }
const averageGeography =(className) => {
    className = className.map((x) => x).map((x) => x.grades[0].geography).filter(e => e)
    let classAverage = className.reduce((total,grade) => total + grade ,0)/className.length
    return classAverage
}
const averageEnglish = (className) => {
    className = className.map((x) => x).map((x) => x.grades[0].english).filter(e => e)
    let classAverage = className.reduce((total,grade) => total + grade ,0)/className.length
    return classAverage
}
/////class a  average grades
let mathAverageA = Math.round(averageMath(classA)) /// a sinifinin math ortalamasini tutan degisken
let PhysicsAverageA = Math.round(averagePhysics(classA)) /// a sinifinin fizik ortalamasini tutan degisken
let chemistryAverageA = Math.round(averageChemistry(classA)) /// a sinifinin kimya ortalamasini tutan degisken
let geographyAverageA = Math.round(averageGeography(classA))   /// a sinifinin cografya ortalamasini tutan degisken
let englishAverageA = Math.round(averageEnglish(classA))   /// a sinifinin ingilizce ortalamasini tutan degisken
/////class b  average grades
let mathAverageB = Math.round(averageMath(classB)) 
let PhysicsAverageB = Math.round(averagePhysics(classB)) 
let chemistryAverageB = Math.round(averageChemistry(classB)) 
let geographyAverageB = Math.round(averageGeography(classB)) 
let englishAverageB = Math.round(averageEnglish(classB)) 
/////class c average grades
let mathAverageC = Math.round(averageMath(classC)) 
let PhysicsAverageC = Math.round(averagePhysics(classC)) 
let chemistryAverageC = Math.round(averageChemistry(classC)) 
let geographyAverageC = Math.round(averageGeography(classC))   
let englishAverageC = Math.round(averageEnglish(classC)) 
/////////all classes  --- average
const quantityOfClass = 3; // A, B ve C siniflari. Yeni sinif eklenirse sayi degistirilmelidir.
const mathAverageAll = Math.round((mathAverageA + mathAverageB + mathAverageC)/quantityOfClass)
const physicsAverageAll = Math.round((PhysicsAverageA + PhysicsAverageB + PhysicsAverageC)/quantityOfClass)
const chemistryAverageAll = Math.round((chemistryAverageA + chemistryAverageB + chemistryAverageC)/quantityOfClass)
const geographyAverageAll =Math.round((geographyAverageA + geographyAverageB + geographyAverageC)/quantityOfClass) 
const englishAverageAll = Math.round((englishAverageA + englishAverageB + englishAverageC)/quantityOfClass)