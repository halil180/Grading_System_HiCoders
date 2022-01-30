///class a 
const xValues = ["Math", "Physics", "Chemistry", "Geography", 'English'];
let yValues = [mathAverageA, PhysicsAverageA, chemistryAverageA, geographyAverageA, englishAverageA];
const barColors = ["#FFE74C", "#FF5964", "#3b9c4c", "#38618C", "#35A7FF"];
new Chart("classA", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: {
        display: false
        },
        title: {
        display: true,
        text: "Report of class A"
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }]
        }
    }
});
////class b baslangici
let y = [mathAverageB, PhysicsAverageB, chemistryAverageB, geographyAverageB, englishAverageB]; // y koordinatinda sirasiyla bbu not ortalamalari
new Chart("classB", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: y
        }]
    },
    options: {
        legend: {
        display: false
        },
        title: {
        display: true,
        text: "Report of class B"
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }]
        }
    }
});
//// class c baslangici
let valuesY = [mathAverageC, PhysicsAverageC, chemistryAverageC, geographyAverageC, englishAverageC]; 
new Chart("classC", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: valuesY
        }]
    },
    options: {
        legend: {
        display: false
        },
        title: {
        display: true,
        text: "Report of class C"
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }]
        }
    }
});
let yKoordinat = [mathAverageAll, physicsAverageAll, chemistryAverageAll, geographyAverageAll, englishAverageAll]; 
new Chart("allClasses", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yKoordinat
        }]
    },
    options: {
        legend: {
        display: false
        },
        title: {
        display: true,
        text: "Report of all classes"
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }]
        }
    }
});