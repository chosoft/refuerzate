const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', (e) =>{
        const id = card.attributes[1].value
        const toggle = (card.attributes[2].value === 'true') ? true : false
        if(toggle){
            
        }else{
            if(id === 'studentCard'){
                document.getElementById('teacherCard').style.zIndex = 1
                document.getElementById('teacherCard').setAttribute('toggle','false')
                document.getElementById(id).style.zIndex = 3
                document.getElementById(id).setAttribute('toggle','true') 

            }else{
                document.getElementById('studentCard').style.zIndex = 1
                document.getElementById('studentCard').setAttribute('toggle','false')
                document.getElementById(id).style.zIndex = 3
                document.getElementById(id).setAttribute('toggle','true') 
            }
        }
        console.log(toggle)
    })
})