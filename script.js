let farr = document.getElementsByClassName('opt');
//accessing the select tag

//inside those tag adding option tag with value and options
for (let i = 0; i < farr.length; i++) {
    for (k in countryList) {
        farr[i].innerHTML += `<option value='${k}'>${k}</option>`
    }
    //on both the select tags adding an eventlistener of change so that the flag icon changes accordingly
    farr[i].addEventListener("change",(e)=>{
        updateFlage(e.target) //updating the icon
        //here e is target element in this case it is select tag
    })
}


function updateFlage(e){
    let curcode = e.value; //accessing the value of the target
    let c = countryList[curcode] //accessing the code for flag icon
    let nsrc = `https://flagsapi.com/${c}/flat/64.png`//flag icon
    let i = e.parentElement.querySelector('img')
    i.src = nsrc
}

document.getElementById('inp').addEventListener('input', () => {
    var f = document.getElementById('from').value;
    var t = document.getElementById('to').value;
    var n = document.getElementById('inp').value;
    if (n == '')
        document.getElementById('res').value = '';
    else {
        fetch(`https://v6.exchangerate-api.com/v6/58a6f91afd412435e54792c6/latest/${f}`)
            .then(res => {
                if (!res.ok) throw new Error('Request Declined')
                return res.json()
            })
            .then(data => {
                document.getElementById('res').value = data.conversion_rates[t] * n;
            })
            .catch(err => console.log(err))
    }
})

document.getElementById('res').addEventListener('input', () => {
    var f = document.getElementById('from').value;
    var t = document.getElementById('to').value;
    var r = document.getElementById('res').value;
    if (r == '')
        document.getElementById('inp').value = '';
    else {
        fetch(`https://v6.exchangerate-api.com/v6/58a6f91afd412435e54792c6/latest/${f}`)
            .then(res => {
                if (!res.ok) throw new Error('Request Declined')
                return res.json()
            })
            .then(data => {
                document.getElementById('inp').value = data.conversion_rates[f] * r;
            })
            .catch(err => console.log(err))
    }
})


document.getElementById('year').textContent = new Date().getFullYear();
