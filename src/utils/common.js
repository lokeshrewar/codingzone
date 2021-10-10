import React from 'react';

export const dateFilter = (type) => {
    let date = new Date()
    let currentYear = date.getFullYear() 
    let currentMonth = null
    let currentDate = '1'
    if(type==='start_date'){
        currentMonth = date.getMonth()
    } else{
        currentMonth = date.getMonth()+1
        currentDate = date.getDate()
    }
    if(currentMonth<10){
        currentMonth = `0${currentMonth}`
    }
    if(currentDate<10){
        currentDate = `0${currentDate}`
    }


    let finalDate = `${currentYear}-${currentMonth}-${currentDate}`

    return finalDate
}

export const currentMonth = (type) => {
    let date = new Date()
    let currentYear = date.getFullYear() 
    let currentMonth = null
    let currentDate = '1'
    currentMonth = date.getMonth()+2
    if(type==='end_date'){
        currentDate = date.getDate()
    }
    if(currentMonth<10){
        currentMonth = `0${currentMonth}`
    }
    if(currentDate<10){
        currentDate = `0${currentDate}`
    }


    let finalDate = `${currentYear}-${currentMonth}-${currentDate}`

    return finalDate
}

export const lastMonth = (type) => {
    let date = new Date()
    let currentYear = date.getFullYear() 
    let currentMonth = date.getMonth()
    let currentDate = '1'
    if(type==='end_date'){
        currentDate = new Date(currentYear, currentMonth, 0).getDate()
    }
    if(currentMonth<10){
        currentMonth = `0${currentMonth}`
    }
    if(currentDate<10){
        currentDate = `0${currentDate}`
    }


    let finalDate = `${currentYear}-${currentMonth}-${currentDate}`

    return finalDate
}