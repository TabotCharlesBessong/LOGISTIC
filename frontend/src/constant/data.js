
import images from "./images";


const bus = [
  {
    id:1,
    origin:'Buea',
    destination:'Douala',
    price:'1500',
    capacity:20,
    agency:'musango',
    img:images.bus201,
    rating:4.4
  },

  {
    id:2,
    origin:'Buea',
    destination:'Yaounde',
    price:'5000',
    capacity:70,
    agency:'mondial',
    img:images.bus701,
    rating:3.2
  },

  {
    id:3,
    origin:'Douala',
    destination:'Buea',
    price:'1000',
    capacity:30,
    agency:'mondial',
    img:images.bus301,
    rating:2.5
  },

  {
    id:4,
    origin:'Douala',
    destination:'Yaounde',
    price:'3500',
    capacity:40,
    agency:'express',
    img:images.bus401,
    rating:4.6
  },

  {
    id:5,
    origin:'Buea',
    destination:'Douala',
    price:'1500',
    capacity:20,
    agency:null,
    img:images.bus1,
    rating:3.6
  },

  {
    id:6,
    origin:'Douala',
    destination:'Ngaoundere',
    price:'6000',
    capacity:100,
    agency:'mondial',
    img:images.bus101,
    rating:4.4
  },

  {
    id:7,
    origin:'Buea',
    destination:'Limbe',
    price:'600',
    capacity:70,
    agency:'musango',
    img:images.bus2,
    rating:3.2
  },

  {
    id:8,
    origin:'Buea',
    destination:'Douala',
    price:'1500',
    capacity:20,
    agency:'express',
    img:images.bus202,
    rating:2.5
  },

  {
    id:9,
    origin:'Buea',
    destination:'Yaounde',
    price:'5000',
    capacity:70,
    agency:'mondial',
    img:images.bus701,
    rating:4.6
  },

  {
    id:10,
    origin:'Douala',
    destination:'Buea',
    price:'1000',
    capacity:30,
    agency:'mondial',
    img:images.bus301,
    rating:3.6
  },

  {
    id:11,
    origin:'Douala',
    destination:'Yaounde',
    price:'3500',
    capacity:40,
    agency:'express',
    img:images.bus401,
    rating:4.4
  },

  {
    id:12,
    origin:'Douala',
    destination:'Buea',
    price:'1300',
    capacity:30,
    agency:null,
    img:images.bus303,
    rating:3.2
  },

  {
    id:13,
    origin:'Douala',
    destination:'Ngaoundere',
    price:'6000',
    capacity:100,
    agency:'mondial',
    img:images.bus101,
    rating:2.5
  },

  {
    id:14,
    origin:'Buea',
    destination:'Limbe',
    price:'600',
    capacity:70,
    agency:'mondial',
    img:images.bus704,
    rating:4.6
  },

  {
    id:15,
    origin:'Buea',
    destination:'Douala',
    price:'1500',
    capacity:20,
    agency:'musango',
    img:images.bus203,
    rating:3.6
  },

  {
    id:16,
    origin:'Buea',
    destination:'Yaounde',
    price:'5000',
    capacity:70,
    agency:'mondial',
    img:images.bus704,
    rating:4.4
  },

  {
    id:17,
    origin:'Douala',
    destination:'Buea',
    price:'1000',
    capacity:30,
    agency:'mondial',
    img:images.bus304,
    rating:3.2
  },

  {
    id:18,
    origin:'Douala',
    destination:'Yaounde',
    price:'3500',
    capacity:40,
    agency:'express',
    img:images.bus404,
    rating:2.5
  },

  {
    id:19,
    origin:'Buea',
    destination:'Douala',
    price:'1500',
    capacity:20,
    agency:null,
    img:images.bus204,
    rating:4.6
  },

  {
    id:20,
    origin:'Douala',
    destination:'Ngaoundere',
    price:'6000',
    capacity:100,
    agency:'mondial',
    img:images.bus103,
    rating:3.6
  },

  {
    id:21,
    origin:'Buea',
    destination:'Limbe',
    price:'600',
    capacity:70,
    agency:'musango',
    img:images.bus704,
    rating:4.4
  },

  {
    id:22,
    origin:'Buea',
    destination:'Douala',
    price:'1500',
    capacity:20,
    agency:'express',
    img:images.bus206,
    rating:3.2
  },

  {
    id:23,
    origin:'Buea',
    destination:'Yaounde',
    price:'5000',
    capacity:70,
    agency:'mondial',
    img:images.bus706,
    rating:2.5
  },

  {
    id:24,
    origin:'Douala',
    destination:'Buea',
    price:'1000',
    capacity:30,
    agency:'mondial',
    img:images.bus306,
    rating:4.6
  },

  {
    id:25,
    origin:'Douala',
    destination:'Yaounde',
    price:'3500',
    capacity:40,
    agency:'express',
    img:images.bus406,
    rating:3.6
  },

  {
    id:26,
    origin:'Douala',
    destination:'Buea',
    price:'1300',
    capacity:30,
    agency:null,
    img:images.bus306,
    rating:2.5
  

  },

  {
    id:27,
    origin:'Douala',
    destination:'Ngaoundere',
    price:'6000',
    capacity:100,
    agency:'mondial',
    img:images.bus104,
    rating:4.4
    

  },

  {
    id:28,
    origin:'Buea',
    destination:'Limbe',
    price:'600',
    capacity:70,
    agency:'mondial',
    img:images.bus703,
    rating:3.6

  },
]

const filters = [
  70,
  'musango',
  'express',
  50,
  80,
  'mondial',
  40,
  30,
  20
]

const news = [
  {
    logo:images.agent1,
    content:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis libero nam tempore, non ex, laudantium nisi numquam quas quaerat error molestiae sit.',
  },
  {
    logo:images.agent2,
    content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur temporibus, ea incidunt pariatur nulla earum quasi repudiandae ipsa voluptatibus ipsum.'
  },
  {
    logo:images.agent4,
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi aspernatur modi consectetur delectus.'
  },
  {
    logo:images.agent5,
    content:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis libero nam tempore, non ex, laudantium nisi numquam quas quaerat error molestiae sit.',
  },
  {
    logo:images.agent6,
    content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur temporibus, ea incidunt pariatur nulla earum quasi repudiandae ipsa voluptatibus ipsum.'
  },
  {
    logo:images.agent7,
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi aspernatur modi consectetur delectus.'
  },
  {
    logo:images.agent5,
    content:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis libero nam tempore, non ex, laudantium nisi numquam quas quaerat error molestiae sit.',
  },
  {
    logo:images.agent2,
    content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur temporibus, ea incidunt pariatur nulla earum quasi repudiandae ipsa voluptatibus ipsum.'
  },
  {
    logo:images.agent6,
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi aspernatur modi consectetur delectus.'
  },
  {
    logo:images.agent1,
    content:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis libero nam tempore, non ex, laudantium nisi numquam quas quaerat error molestiae sit.',
  },
  {
    logo:images.agent7,
    content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur temporibus, ea incidunt pariatur nulla earum quasi repudiandae ipsa voluptatibus ipsum.'
  },
  {
    logo:images.agent1,
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi aspernatur modi consectetur delectus.'
  },
]


export default {
  bus,
  filters,
  news
}