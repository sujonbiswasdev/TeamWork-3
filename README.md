### Project Name : Vehicle Rental System – Backend API

GitHub Repo: [Repo Link](https://github.com/sujonbiswasdev/TeamWork-3.git)
Figma Link : [Link](https://www.figma.com/design/TWC4L9nYAyMLqZq0OifQDz/Car-Rent-Website-Design---Pickolab-Studio--Community---Copy-?node-id=20-7510&t=AqOFGpX6zOZRF5HW-1)

### Setup & Usage Instructions
### Step 1. Clone the Repository
```bash
git clone https://github.com/sujonbiswasdev/TeamWork-3.git
cd TeamWork-3
```
### Step 2. Install Dependencies
```bash
npm install
npm install -D @tailwindcss/vite
```
### Step 3. switch branch
```bash
git checkout your_branch_name
```

### Step 4. Run Application
```bash
npm run dev
```



## উদাহরণ

```typescript
src/
│
├── assets/              →  আইকন, data
│
├── components/          → ছোট ছোট reusable কম্পোনেন্ট
│   ├── car/             → Car related component (CarCard, CarFilter, CarPrice etc.)
│   ├── common/          → Button, Input, Badge, Loader, etc.
│   └── layout/          → Navbar, Footer, Sidebar
│
├── pages/               → Page-level UI
│   ├── home/            → Home.jsx এর সেকশন যেমন Hero.jsx, Popular_car.jsx
│   ├── category/        → Category.jsx
│   └── Error.jsx        → Error page
├── App.jsx              → Main layout Wrapper
└── main.jsx             → ReactDOM entry





```


## get car

```
import axios from "axios";

  const [items,setitems]=useState([])
 useEffect(()=>{
   axios.get("https://teamwork-backend-lime.vercel.app/api/v1/cars")
    .then(res => {
      setitems(res.data.data)
    })
    .catch(err => {
      console.error(err);
    });
 },[])

```




## post car

```
import axios from "axios";
basically use input form data is title,sport other

const createHanlde = async () => {
    await axios.post("https://teamwork-backend-lime.vercel.app/api/v1/cars", {
    "title": "Toyota Corolla",
    "sport": "Sedan",
    "image": "https://example.com/images/corolla.jpg",
    "fuel": "Petrol",
    "peaple": "5",
    "price": 20000
  })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

```




## update car

```
import axios from "axios";
basically use input form data is title,sport other

const updatecar = async () => {
   axios.put(`https://teamwork-backend-lime.vercel.app/api/v1/cars/id`, {
price: 27000
})
.then(res => {
console.log(res.data);
})
.catch(err => {
console.error(err);
});

}


```




## delete car

```
import axios from "axios";

const deleteHanlde = async () => {
    await axios.delete(`https://teamwork-backend-lime.vercel.app/api/v1/cars/e680696e-34a7-4fae-a2f9-17eb1effe519`)
      .then(res => {
        alert("data delete sucessfully")
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

```