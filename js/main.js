const navItem  = document.getElementById('ndpm')
const dpMenuList = document.getElementById('dp')
const navItemDelivery = document.getElementById('ndpm-del')

navItem.onclick = () => {
    
    if(navItem.classList.contains('active')){
        navItem.classList.remove('active')
        dpMenuList.classList.remove('dp-active')
    } else{
        navItem.classList.add('active')
        dpMenuList.classList.add('dp-active')
    }
}

navItemDelivery.onclick = () => {
    
    if(navItem.classList.contains('active')){
        navItem.classList.remove('active')
        dpMenuList.classList.remove('dp-active')
    } else{
        navItem.classList.add('active')
        dpMenuList.classList.add('dp-active')
    }

    
        
    
}

  