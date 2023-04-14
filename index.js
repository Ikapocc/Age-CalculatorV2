let dates = new Date() //Get current date 

let years = dates.getFullYear() //Current year 2023
let months = dates.getMonth() + 1//Current month april (4)

//My variables 
let littleh = $("h6") //Get all h6
let tags = $("span") //get all span tags
let divz = $(".date-child") //get all divs with the class date-child
let entry = $("input") //get all input tags

function isreal(day, month, year) {
    let daysmonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] //Array witth all days of the months

    if (isNaN(day) || isNaN(month)|| isNaN(year)) { //Check if 1 of 3 inputs is NaN
        divz.addClass("redroom") //Add class redroom
        entry.css("border-color", "red") //Change color of the input
        littleh.text("We need numbers") //Change text
        littleh.css("display", "block") //Change the display to block
        return false //Cut the flow
    }

    if (day < 1 || day > daysmonths[month]) { //Check the day and use the array
        littleh.eq(0).text("I need a real date")
        divz.eq(0).addClass("redroom")
        entry.eq(0).css("border-color", "red")
        littleh.eq(0).css("display", "block")
        return false
    }

    if (month > 12 || month < 1) { //Check months
        littleh.eq(1).text("I need a real month")
        divz.eq(1).addClass("redroom")
        entry.eq(1).css("border-color", "red")
        littleh.eq(1).css("display", "block")
        return false

    }
    
    if (year > years) { //check years
        littleh.eq(2).text("It must be in the past")
        divz.eq(2).addClass("redroom")
        entry.eq(2).css("border-color", "red")
        littleh.eq(2).css("display", "block")
        return false
    }
    
    //if everything is ok this should be execute if there was an error with the past operations
    divz.removeClass("redroom")
    entry.css("border-color", "black")
    littleh.css("display", "none")
    return true
}

$(".btn").click(añadir) //eventlistener click with my button

function añadir() { //add function
    let dia = parseInt($("#day").val(), 10) //turn the string into number and i used parseint to turn numbers like 00000004 or 00000030 into 4 and 30
    let mes = parseInt($("#month").val(), 10) //same here
    let año = parseInt($("#year").val(), 10) //and same here

    //day, month, year didnt come up with better variables this time
    if (isreal(dia, mes, año)) {//call the method is real and if everything is true can do the operations below
        tags.eq(2).text(31 - dia) //i know this one is bad but i dont really understand how to do it (day * months) - something maybe ? 
        tags.eq(0).text(years - año) 

        if (mes > months) {
            tags.eq(1).text(mes - months)
        }else{
            tags.eq(1).text(12 - (months - mes))
        }
    }
}