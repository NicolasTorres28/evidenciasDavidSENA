

function celcius(){
    //FORMULA    F =(9*C/5) +32
    var num1 = parseInt(document.getElementById("celsius_1").innerHTML)
    var resultado = (9 * num1 / 5)+32

    document.getElementById("fahr_1").innerHTML = resultado;

    var num2 = parseInt(document.getElementById("celsius_2").innerHTML)
    var resultado = (9 * num2 / 5)+32

    document.getElementById("fahr_2").innerHTML = resultado;

    var num3 = parseInt(document.getElementById("celsius_3").innerHTML)
    var resultado = (9 * num3 / 5)+32

    document.getElementById("fahr_3").innerHTML = resultado;

}

function estudiantes(){
    var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];

    var orden = [classification[classification.length -1] ,classification[classification.length -2] , classification[classification.length-3]  ];

    document.getElementById("best_students").innerHTML = orden;

}

function objeto(){
    var course = {
        'title': "Learn to Code in Python 3",
        'categories': ['programming', 'technology', 'python'],
        '5_stars_reviews': 420,
        '4_stars_reviews': 80,
        '3_stars_reviews': 33,
        '2_stars_reviews': 20,
        '1_stars_reviews': 4
    }

    document.getElementById("course_title").innerHTML = course.title
    document.getElementById("main_category").innerHTML = course.categories[0]

    var porcentaje = (420 * 100)/557 
    document.getElementById("reviews_5_stars").innerHTML = parseInt(porcentaje) + "%"


} 

function compras(){
    var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
    //mover del ultimo al primero 
    shoppingList.pop()
    shoppingList.unshift("Chocolate")
    
    //Agregar los elementos al final 
    shoppingList.push("Queso")
    shoppingList.push("Huevos")
    console.log(shoppingList)

}

