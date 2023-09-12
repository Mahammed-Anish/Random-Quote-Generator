const url = "https://type.fit/api/quotes";
const btn = document.getElementById('new-quote-btn');
const quote = document.getElementById('quotes');

btn.addEventListener('click', () => {
    fetchData();
})

async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    let a = Math.floor(Math.random() * (data.length-0) + 0);
    quote.innerHTML = data[a].text;
}
