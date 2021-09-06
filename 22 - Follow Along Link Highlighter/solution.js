let links = document.querySelectorAll('a');
let highlight = document.querySelector('.highlight');
links.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
       
       let link  = e.target
       let linkX = link.getBoundingClientRect().left + window.pageXOffset;
       let linkY = link.getBoundingClientRect().top + window.pageYOffset;

       let linkWidth = link.getBoundingClientRect().width;
       let linkHeight = link.getBoundingClientRect().height;

       highlight.style.top = linkY + "px";
       highlight.style.left = linkX + "px";

       highlight.style.width = linkWidth + "px";
       highlight.style.height = linkHeight + "px";

    });
   
})