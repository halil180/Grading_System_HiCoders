/**
 *  Not Görüntüleme Sistemi
 * -- Min. 3 sinif mevcut olmalidir.
 * -- Her sinifta ögrenciler listelenmelidir.
 * -- Her bir ögrencinin adi soyadi, aldigi dersleri ve puanlari gösterilmelidir.
 * -- Istenilen program okulun ve siniflarin not ortalamalarini ekranda gösterecektir.
 * -- Anasayfa da ise bu veriler grafiksel olarak gösterilecektir. (chart.js)
 * -- Proje ekte verilen Mockuplar esas alinarak yapilacaktir.
 * -- UI Design icin SPA destekleyen  bir kutuphane ve  dizayn icin bootstrap kullanilacak
 * 
 * 1.sinif objeleri olusturulup icinde ogrenci bilgileri tutulacak
 * 2.html de siniflar birbirinden ayrilip id verilerecek, id ler domdan alinacak
 * 3.map ile array icindeki obje donulecek, ve html e yazdirilacak
 * 4,ortalama innerHTMl ile htmle yazdirilacak
 * 5. ayni ortalama chart js de array icine atilacak (y ekseninde ortalamalar gozukmesini istiyoruz)
 */
let classA = [{
        studentName: "Alessandra",
        profilePicture: '../gradingSystem/imgs/classA/alessandra.png',
        grades: [{
            math: 80,
            chemistry: 60,
            physics: 90,
            geography: 78
        }]
    },
    {
        studentName: "Dominique",
        profilePicture: '../gradingSystem/imgs/classA/dominique.png',
        grades: [{
            math: 90,
            chemistry: 90,
            physics: 90,
            geography: 48,
            english: 100
        }]
    },
    {
        studentName: "Ellie",
        profilePicture: '../gradingSystem/imgs/classA/ellie.png',
        grades: [{
            math: 80,
            chemistry: 100,
            geography: 68,
            english: 90
        }]
    },
    {
        studentName: "Halil",
        profilePicture: '../gradingSystem/imgs/classA/halil.png',
        grades: [{
            math: 100,
            english: 90,
            geography: 61,
        }]
    },
    {
        studentName: "Hannah",
        profilePicture: '../gradingSystem/imgs/classA/hannah.png',
        grades: [{
            math: 70,
            chemistry: 60,
            physics: 90,
            geography: 67,
        }]
    },
    {
        studentName: "John",
        profilePicture: '../gradingSystem/imgs/classA/jhn.png',
        grades: [{
            math: 60,
            chemistry: 83,
            physics: 90
        }]
    },
    {
        studentName: "Julian",
        profilePicture: '../gradingSystem/imgs/classA/julian.png',
        grades: [{
            math: 72,
            chemistry: 77,
            physics: 90,
            geography: 68,
        }]
    },
    {
        studentName: "Layla",
        profilePicture: '../gradingSystem/imgs/classA/layla.png',
        grades: [{
            math: 90,
            chemistry: 89,
        }]
    }
]
//----------ClassB Object
let classB = [{
    studentName: "Emilia",
    profilePicture: '../gradingSystem/imgs/classB/emila.png',
    grades: [{
        math: 80,
        chemistry: 60,
        physics: 90,  
    }]
},
{
    studentName: "Noah",
    profilePicture: '../gradingSystem/imgs/classB/noah.png',
    grades: [{
        math: 70,
        chemistry: 80,
        physics: 95,
        geography: 88,
    }]
},
{
    studentName: "Emma",
    profilePicture: '../gradingSystem/imgs/classB/emma.png',
    grades: [{
        math: 50,
        chemistry: 70,
        geography: 98,
        english: 70
    }]
},
{
    studentName: "Matteo",
    profilePicture: '../gradingSystem/imgs/classB/Matteo.png',
    grades: [{
        math: 100,
        english: 50,
        geography: 82,
        chemistry: 70,
    }]
},
{
    studentName: "Amina",
    profilePicture: '../gradingSystem/imgs/classB/amina.png',
    grades: [{
        math: 60,
        chemistry: 80,
        physics: 96,
        geography: 57,
    }]
},
{
    studentName: "Paul",
    profilePicture: '../gradingSystem/imgs/classB/poul.png',
    grades: [{
        math: 60,
        chemistry: 83,
    }]
},
{
    studentName: "Marie",
    profilePicture: '../gradingSystem/imgs/classB/marie.png',
    grades: [{
        math: 90,
        chemistry: 89,
        english: 70,
        physics: 90,

    }]
}
]
////class c object
let classC = [{
    studentName: "Nathalie",
    profilePicture: '../gradingSystem/imgs/classC/nathalie.png',
    grades: [{
        math: 40,
        chemistry: 80,
        physics: 78,
        geography: 70
    }]
},
{
    studentName: "Michael",
    profilePicture: '../gradingSystem/imgs/classC/michael.png',
    grades: [{
        math: 70,
        chemistry: 80,
        physics: 95,
        geography: 78,
    }]
},
{
    studentName: "Nuri",
    profilePicture: '../gradingSystem/imgs/classC/nuri.png',
    grades: [{
        math: 80,
        chemistry: 70,
        geography: 70,
        english: 70
    }]
},
{
    studentName: "Stephen",
    profilePicture: '../gradingSystem/imgs/classC/stephen.png',
    grades: [{
        math: 100,
        english: 96,
        geography: 82,
        chemistry: 70,
    }]
},
{
    studentName: "Dylan",
    profilePicture: '../gradingSystem/imgs/classC/dylan.png',
    grades: [{
        math: 60,
        chemistry: 80,
        physics: 96,
        geography: 95,
    }]
},
{
    studentName: "Richard",
    profilePicture: '../gradingSystem/imgs/classC/richard.png',
    grades: [{
        math: 89,
        chemistry: 83,
        physics: 70,
        geography: 77,
    }]
},
{
    studentName: "Emmanuel",
    profilePicture: '../gradingSystem/imgs/classC/emmanuel.png',
    grades: [{
        math: 90,
        chemistry: 89,
        english: 70,
        physics: 90,

    }]
}
]
