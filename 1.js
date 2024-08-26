let subpages = document.getElementsByClassName('subpage')
let subpage = document.getElementById('subpage1')
let color_of_subpages_list = ['gray','pink','yellow','lightgreen']
let navbar = document.getElementById('navbar')

for(let i=0;i<subpages.length;i++){
    subpages[i].style.zIndex = i+1
    subpages[i].style.background = color_of_subpages_list[i%4]
    console.log('WORKING')

    // Height of subpage

    subpages[i].style.height = `${window.innerHeight - 50}px`
}

// REMOVE THESE

let textsamples = document.getElementsByClassName('textsample')

for(let i=0;i<textsamples.length;i++){
    textsamples[i].innerText = `SubPage-${i+1}`
}
