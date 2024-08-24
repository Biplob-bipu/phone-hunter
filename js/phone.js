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
    //display show all button if there are more than 12 phones
      const showAll = document.getElementById('show-all');
      if(phones.length>12){
        showAll.classList.remove('hidden')
      }

    // display only first 12 phones
    phones = phones.slice(0,12);
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
    //hide loading spinner
    toogleSpinner(false)
}

//handle search bar
const handleSearch = () =>{
  toogleSpinner(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
}
// handleSearch();
// loading-spinner 
  const toogleSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
      loadingSpinner.classList.remove('hidden')
    // console.log('ami kisui dekha pain a')
    }
    else{
      loadingSpinner.classList.add('hidden');
    }
  }