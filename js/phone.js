const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones =data.data;
    console.log(phones);
    displayPhones(phones);
}
// loadPhone() 
const displayPhones = phones =>{
    const phoneConatainer = document.getElementById('phone-container')
    phoneConatainer.textContent = '';
    phones.forEach(phone =>{
        console.log(phone)
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `
            <figure>
              <img class="my-4"
                src="${phone.image}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
        `
        phoneConatainer.appendChild(phoneCard);
    })
}

//handle search bar
const handleSearch = () =>{
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
}
// handleSearch();