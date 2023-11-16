'use strict'

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('focus', () => {
        console.log('focused')
    })

    window.addEventListener('blur', () => {
        console.log('unfocused')
    })

    window.addEventListener('error', () => {
        console.log('error')
    })

    window.addEventListener('resize', () => {
        console.log('resized')
    })

    window.addEventListener('pageshow', () => {
        console.log('page show')
    })

    const h1 = document.querySelector(".task2 h1")
    const h2 = document.querySelector(".task2 h2")
    const h3 = document.querySelector(".task2 h3")
    const input = document.querySelector(".task2 input")
    const button = document.querySelector(".task2 button")

    h1.addEventListener('mousemove', () => {
        console.log('h1')
    })
    h2.addEventListener('mouseenter', () => {
        console.log('h2')
    })
    h3.addEventListener('mouseleave', () => {
        console.log('h3')
    })

    input.addEventListener('change', (e) => {
        const val = e.target.value;
        button.addEventListener('click', () => {
            console.log(val)
        })
    })

    const forms = document.querySelectorAll('.task3 form')
    const task2_btn = document.querySelector('.task3 button')
    task2_btn.addEventListener('click', () => {
        console.log('form ammount: ',forms.length)
    })
    const img = document.querySelector('.task4 img')
    img.addEventListener('click', () => {
        if (img.style.cssText.match('1')) img.style = "width: 300px"
        else img.style = "width: 100px"
    })

    const textarea = document.querySelector('.task5 textarea')
    const task5_btn = document.querySelector('.task5 button')
    task5_btn.addEventListener('click', () => {
        console.log(textarea.value.match(/[к, о]/g))
    })
    const textarea2 = document.querySelector('.task6 textarea')
    const task6_btn = document.querySelector('.task6 button')
    task6_btn.addEventListener('click', () =>{
        const arr = textarea2.value.match(/0/gm);
        console.log(arr.length)
    })
})

