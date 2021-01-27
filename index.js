((document,window,$)=>{
    const arrs = [...document.querySelectorAll('img')];
    const phaseArr = [...document.querySelectorAll('.phase')];
    const details = [...document.querySelectorAll('.details__detail')];
    const cols = ['#fb6c61', '#d22ccda8', '#f3b749', '#673ab1bf', '#7ac77d', '#2196f3ad']
    const degs = [90, 180, 0, 180, 0, 270];

    function init() {
        arrs.forEach((el,idx)=>{
            el.style = `transform:rotate(${degs[idx]}deg)`
        })

        phaseArr.forEach((el,idx)=>{
            el.addEventListener('click', function() {
                let str = this.innerText.toLowerCase();
                hideOthers();
                document.getElementById(`${str}-detail`).classList.add("show-detail");
            })
            el.style.background = cols[idx];
            //     setting the colors for the details
            details[idx].style.background = cols[idx]
        })
    }

    function hideOthers() {
        details.forEach((el)=>{
            el.classList.remove('show-detail');
        })
    }
    
    init()
    
    $(document).ready(()=>{
        $('.model__detail').hide()
        $(document).on('click', '.model__header', function() {
            // it only works with the function key word, not ()=>{} !!
            $('.model__detail').slideUp()
            $(this).next('.model__detail').slideDown()
        })
    })
}
)(document, window, jQuery)
