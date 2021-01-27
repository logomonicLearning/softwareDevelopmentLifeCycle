
const arrs = [...document.querySelectorAll('img')];
const phaseArr = [...document.querySelectorAll('.phase')];
const details = [...document.querySelectorAll('.details__detail')];
const cols = ['#fb6c61', '#d22ccda8', '#f3b749', '#673ab1bf', '#7ac77d', '#2196f3ad']

const degs=[90,180,0,180,0,270];
arrs.forEach((el,idx)=>{
    el.style=`transform:rotate(${degs[idx]}deg)`
})

// arrs[0].style = "transform:rotate(90deg)"
// arrs[1].style = "transform:rotate(180deg)"
// arrs[2].style = "transform:rotate()"
// arrs[3].style = "transform:rotate(180deg)"
// arrs[4].style = "transform:rotate(90)"
// arrs[5].style = "transform:rotate(270deg)"

// phaseArr.forEach((el,idx)=>{
//     el.style.background=cols[idx]
// })

phaseArr.forEach((el,idx)=>{
    el.addEventListener('click', function() {
        let str = this.innerText.toLowerCase();
        hideOthers();
        document.getElementById(`${str}-detail`).classList.add("show-detail");
    })
    el.style.background=cols[idx];
//     setting the colors for the details
    details[idx].style.background=cols[idx]
})

// phaseArr[0].style.background = cols[0];
// phaseArr[1].style.background = cols[1];
// phaseArr[2].style.background = cols[2];
// phaseArr[3].style.background = cols[3];
// phaseArr[4].style.background = cols[4];
// phaseArr[5].style.background = cols[5];

// details[0].style.background = cols[0];
// details[1].style.background = cols[1];
// details[2].style.background = cols[2];
// details[3].style.background = cols[3];
// details[4].style.background = cols[4];
// details[5].style.background = cols[5];

function hideOthers() {
    details.forEach((el)=>{
        el.style = "display:none";
    }
    )
}



function hideOthers() {
    [...document.querySelectorAll('.details__detail')].forEach((el)=>{
        // el.style="display:none";
        el.classList.remove('show-detail');
    }
    )
}

// document.querySelectorAll('.phase').addEventListener('click',function(){
//     alert('hello')
// })



// $(document).ready(function(){
//   // $('.models-wrapper').accordion();

// })

$(document).ready(()=>{
    $('.model__detail').hide()
    $(document).on('click', '.model__header', function() {
        // it only works with the function key word, not ()=>{} !!
        $('.model__detail').slideUp()
        $(this).next('.model__detail').slideDown()
    })

})
