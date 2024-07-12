var cr;

const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

let farr = document.getElementsByClassName('opt');
for (let i = 0; i < farr.length; i++) {
    for (k in countryList) {
        farr[i].innerHTML += `<option value='${k}'>${k}</option>`
    }
    farr[i].addEventListener("change",(e)=>{
        console.log(e,e.target)
        updateFlage(e.target)
    })
}


function updateFlage(e){
    let curcode = e.value;
    console.log(curcode)
    let c = countryList[curcode]
    console.log(c)
    let nsrc = `https://flagsapi.com/${c}/flat/64.png`
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
                document.getElementById('inp').value = data.conversion_rates[t] * r;
            })
            .catch(err => console.log(err))
    }
})
// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
