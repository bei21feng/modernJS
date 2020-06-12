document.querySelector('#button').addEventListener('click', loadData);;

function loadData() {
    //create an XHR object
    const xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET', 'data.txt', true); //true : async

    // Optional - used for spinners/loaders
    xhr.onprogress = function () {
        console.log('ReadyState', xhr.readyState);
        // 3: processing request
    }

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
    }

    xhr.onerror = function () {
        console.log('Request error...');

    }

    xhr.send();
}