Array.from(temp1.querySelectorAll('tr')).forEach(el => {
    if (el.querySelector('.word')) {

    buff.push({
        word: el.querySelector('.word').innerText,
        phn: el.querySelector('.phn').innerText,
        trans: el.querySelector('.trans').innerText,
    });
    }
})

s.replace(/\n/g,' ').replace(/\d[^,]/g,`$&+`).split(' +')
