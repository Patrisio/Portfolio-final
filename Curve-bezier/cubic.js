function init() {
  let circles = document.querySelectorAll("circle"),
    lines = document.querySelectorAll("line"),
    path = document.querySelector("path"),
    inputGroup = document.querySelectorAll('.input-group'),
    span = document.querySelectorAll('.current-info table tbody tr td span'),

    x1 = document.querySelector('.x1').value,
    y1 = document.querySelector('.y1').value,
    x2 = document.querySelector('.x2').value,
    y2 = document.querySelector('.y2').value,
    x3 = document.querySelector('.x3').value,
    y3 = document.querySelector('.y3').value,
    drag, 

    d = {
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      x3: x3,
      y3: y3
    },
    ln1Data = {
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2
    },
    ln2Data = {
      x1: x2,
      y1: y2,
      x2: x3,
      y2: y3
    };


  function enterData() {
    inputGroup.forEach.call(inputGroup, (item) => {
      function actionForChange() {
        if(item.classList[0] === 'x1') {
          x1 = item.value;
          d.x1 = item.value;
          ln1Data.x1 = item.value;
          span[0].textContent = x1;
        } else if(item.classList[0] === 'y1') {
          y1 = item.value;
          d.y1 = item.value;
          ln1Data.y1 = item.value;
          span[1].textContent = y1;
        } else if(item.classList[0] === 'x2') {
          x2 = item.value;
          d.x2 = item.value;
          ln1Data.x2 = item.value;
          ln2Data.x1 = item.value;
          span[2].textContent = x2;
        } else if(item.classList[0] === 'y2') {
          y2 = item.value;
          d.y2 = item.value;
          ln1Data.y2 = item.value;
          ln2Data.y1 = item.value;
          span[3].textContent = y2;
        } else if(item.classList[0] === 'x3') {
          x3 = item.value;
          d.x3 = item.value;
          ln2Data.x2 = item.value;
          span[4].textContent = x3;
        } else if(item.classList[0] === 'y3') {
          y3 = item.value;
          d.y3 = item.value;
          ln2Data.y2 = item.value;
          span[5].textContent = y3;
        }
      
        path.setAttribute('d', `M${x1} ${y1} Q ${x2} ${y2} ${x3} ${y3}`);
      
        for(let i = 0; i < Object.keys(ln1Data).length; i++) {
          lines[0].setAttribute(Object.keys(ln1Data)[i], ln1Data[Object.keys(ln1Data)[i]]);
        }
      
        for(let i = 0; i < Object.keys(ln2Data).length; i++) {
          lines[1].setAttribute(Object.keys(ln2Data)[i], ln2Data[Object.keys(ln2Data)[i]]);
        }
        
        circles[0].setAttribute('cx', x1);
        circles[0].setAttribute('cy', y1);
        circles[1].setAttribute('cx', x2);
        circles[1].setAttribute('cy', y2);
        circles[2].setAttribute('cx', x3);
        circles[2].setAttribute('cy', y3);
      }
      item.addEventListener('change', actionForChange);
      function clearFields() {
        item.value = '';
      }
      item.addEventListener('focus', clearFields)
      function fillFields() {
        if(item.value === '' && item.classList[0] === 'x1') {
          item.value = d.x1;
        } else if(item.value === '' && item.classList[0] === 'y1') {
          item.value = d.y1;
        } else if(item.value === '' && item.classList[0] === 'x2') {
          item.value = d.x2;
        } else if(item.value === '' && item.classList[0] === 'y2') {
          item.value = d.y2;
        } else if(item.value === '' && item.classList[0] === 'x3') {
          item.value = d.x3;
        } else if(item.value === '' && item.classList[0] === 'y3') {
          item.value = d.y3;
        } 
      }
      item.addEventListener('blur', fillFields)
    });
  }
    
  enterData();

  window.addEventListener("mousedown", setupListeners);

  function setupListeners(e){
    if(e.target instanceof SVGCircleElement){
      drag = e.target;
      drag.x = e.target.getAttribute("cx");
      drag.y = e.target.getAttribute("cy");
      drag.clientX = e.clientX;
      drag.clientY = e.clientY;
      
      window.addEventListener("mousemove", actionForMove);
      window.addEventListener("mouseup", removeListeners);
    }
  }

  function actionForMove(e){
    drag.setAttribute("cx", e.clientX - (drag.clientX - drag.x));
    drag.setAttribute("cy", e.clientY - (drag.clientY - drag.y));

    switch (drag) {
      case circles[0]:
        d.x1 = drag.getAttribute('cx');
        d.y1 = drag.getAttribute('cy');
        x1 = d.x1;
        y1 = d.y1;
        ln1Data.x1 = drag.getAttribute('cx');
        ln1Data.y1 = drag.getAttribute('cy'); break;
      case circles[1]:
        d.x2 = drag.getAttribute('cx');
        d.y2 = drag.getAttribute('cy');
        x2 = d.x2;
        y2 = d.y2;
        ln1Data.x2 = drag.getAttribute('cx');
        ln1Data.y2 = drag.getAttribute('cy');
        ln2Data.x1 = drag.getAttribute('cx');
        ln2Data.y1 = drag.getAttribute('cy'); break;
      case circles[2]:
        d.x3 = drag.getAttribute('cx');
        d.y3 = drag.getAttribute('cy');
        x3 = d.x3;
        y3 = d.y3;
        ln2Data.x2 = drag.getAttribute('cx');
        ln2Data.y2 = drag.getAttribute('cy'); break;
    }

    for(let i = 0; i < span.length; i++) {
      span[i].textContent = d[Object.keys(d)[i]];
    }

    path.setAttribute('d', `M${d.x1} ${d.y1} Q ${d.x2} ${d.y2} ${d.x3} ${d.y3}`);

    for(let i = 0; i < Object.keys(ln1Data).length; i++) {
      lines[0].setAttribute(Object.keys(ln1Data)[i], ln1Data[Object.keys(ln1Data)[i]]);
      lines[1].setAttribute(Object.keys(ln2Data)[i], ln2Data[Object.keys(ln2Data)[i]]);
    }
  }

  function removeListeners(){
    window.removeEventListener("mousemove", actionForMove);
    window.removeEventListener("mouseup", removeListeners);
  }
}

init();