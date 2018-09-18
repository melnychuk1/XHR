function loadPost() {
    let url = 'https://jsonplaceholder.typicode.com/posts';

    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();

        xhr.addEventListener('load', () => {
            resolve(xhr.response)
        })
    })
}


