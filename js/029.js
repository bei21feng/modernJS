const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
//clearBtn.addEventListener('click', runEvent);
//double click
//clearBtn.addEventListener('dblclick', runEvent);
//mousedown 长按
// clearBtn.addEventListener('mousedown', runEvent);
//mouseup 长按放开
//clearBtn.addEventListener('mouseup', runEvent);

//元素的子元素不算离开
//mouseenter 
//mouseleave 

//元素子元素算离开
//mouseover
//mouseout

//mousemove
//card.addEventListener('mousemove', runEvent);

//Event handler
function runEvent(e) {
    //console.log(`EVENT TYPE : ${e.type}`);
    heading.textContent = `mousex : ${e.offsetX} mouseY : ${e.offsetY}`
    //document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
};