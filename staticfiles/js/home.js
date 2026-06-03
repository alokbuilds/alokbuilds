/* =========================================
            TYPING EFFECT
========================================= */

const roles = [
    "Backend Developer",
    "Django Developer",
    "Problem Solver"
];


let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect(){
    const typingElement =
    document.getElementById(
        "typing"
    );

    if(!typingElement){
        return;
    }

    current = roles[i];

    if(!isDeleting){
        typingElement.innerHTML =
        current.substring(
            0,
            j++
        );

    }else{

        typingElement.innerHTML =
        current.substring(
            0,
            j--
        );

    }

    if(
        j === current.length
    ){

        isDeleting = true;

        setTimeout(
            typeEffect,
            1000
        );

        return;

    }

    if(j === 0){

        isDeleting = false;

        i = (
            i + 1
        ) % roles.length;

    }

    setTimeout(
        typeEffect,
        isDeleting
        ? 50
        : 100
    );

}

typeEffect();

function showProjectModal() {

    openModal(`
        <h2>MediConnect</h2>

        <p>
            Doctor Appointment Booking System
        </p>

        <a href="https://github.com/alokbuilds/MediConnect"
           target="_blank">
            GitHub
        </a>
    `);

}