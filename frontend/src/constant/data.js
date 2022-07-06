
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

const branches = [
  {
    location:'Douala',
    adminName:'Mohamed',
    email:'mohamed@gmail.com',
    password:'123456',
    id:1
  },
  {
    location:'Buea',
    adminName:'Yimnai',
    email:'yimnai@gmail.com',
    password:'234165',
    id:2
  },
  {
    location:'Limbe',
    adminName:'Charles',
    email:'charles@gmail.com',
    password:'623451',
    id:3
  },
  {
    location:'Yaounde',
    adminName:'Espoir',
    email:'espoir@gmail.com',
    password:'325614',
    id:4
  },
  {
    location:'Douala',
    adminName:'Mohamed',
    email:'mohamed@gmail.com',
    password:'123456',
    id:5
  },
  {
    location:'Buea',
    adminName:'Yimnai',
    email:'yimnai@gmail.com',
    password:'234165',
    id:6
  },
  {
    location:'Limbe',
    adminName:'Charles',
    email:'charles@gmail.com',
    password:'623451',
    id:7
  },
  {
    location:'Yaounde',
    adminName:'Espoir',
    email:'espoir@gmail.com',
    password:'325614',
    id:8
  }
]

const branchesHeadCells = [
  {id:'location',label:'Branch Location'},
  {id:'name',label:'Admin Name'},
  {id:'email',label:'admin email'},
  {id:'password',label:'Account password'},
  {id:'action',label:'Actions',disableSorting:true}
]

const busInfo = [
  {
    licenscePlate:'LT341XF',
    capacity:30,
    branchName:'Douala',
    id:1
  },
  {
    licenscePlate:'CE625AJ',
    capacity:70,
    branchName:'Yaounde',
    id:2
  },
  {
    licenscePlate:'SW610LI',
    capacity:20,
    branchName:'Buea',
    id:3
  },
  {
    licenscePlate:'AD091BH',
    capacity:80,
    branchName:'Ngaoundere',
    id:4
  },
  {
    licenscePlate:'CE625AJ',
    capacity:50,
    branchName:'Yaounde',
    id:5
  },
  {
    licenscePlate:'SW610LI',
    capacity:60,
    branchName:'Limbe',
    id:6
  },
  {
    licenscePlate:'LT341XF',
    capacity:30,
    branchName:'Douala',
    id:7
  },
  {
    licenscePlate:'CE625AJ',
    capacity:70,
    branchName:'Yaounde',
    id:8
  },
  {
    licenscePlate:'NW610LI',
    capacity:100,
    branchName:'Bamenda',
    id:9
  },
  {
    licenscePlate:'NO091KH',
    capacity:20,
    branchName:'NgaouMaroua',
    id:10
  },
  {
    licenscePlate:'CE625AJ',
    capacity:50,
    branchName:'Yaounde',
    id:11
  },
  {
    licenscePlate:'SW410LI',
    capacity:60,
    branchName:'Limbe',
    id:12
  },
]

const busHeaderCells = [
  {id:'plate',label:'Licensce Plate'},
  {id:'capacity',label:'Bus Capacity'},
  {id:'branch',label:'Branch Name'},
  {id:'action',label:'Actions',disableSorting:true}
]

const bookingClient = [
  {
    id:1,
    fullName:'Erandana Mohamed',
    origin:'Goa',
    destination:'Douala',
    busNo:4,
    price:8000,  
  },
  {
    id:2,
    fullName:'Yimnai Nerus Zaumu',
    origin:'Buea',
    destination:'Nschnag',
    busNo:89,
    price:3200
  },
  {
    id:3,
    fullName:'Balemba Junior',
    origin:'Kumba',
    destination:'Muntengene',
    busNo:1,
    price:2300
  },
  {
    id:4,
    fullName:'Tabot Charles Bessong',
    origin:'Douala',
    destination:'Limbe',
    busNo:63,
    price:1800 
  }
]

const clientHeaderCells = [
  {id:'name',label:'Full Name(As in NIC)'},
  {id:'origin',label:'Origin'},
  {id:'destination',label:'Destination'},
  {id:'bus',label:"Bus No"},
  {id:'price',label:'Trip Price'},
  {id:'action',label:'Actions',disableSorting:true}
]

const mailInfo = [
  {
    id:1,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:2,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:3,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:4,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },

  {
    id:5,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:6,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:7,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:8,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },

  {
    id:9,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:10,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:11,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:12,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },

  {
    id:13,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:14,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:15,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:16,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },

  {
    id:17,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:18,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:19,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
  {
    id:20,
    senderName:'Charles',
    senderPhone:'620161833',
    receiverPhone:'673461722',
    receiverName:'Bessong',
    origin:'Buea',
    destination:'Douala',
    package:'Laptop'
  },
]

const mailHeaderCells = [
  {id:'sName',label:'Sender Name'},
  {id:'sPhone',label:'Sender Mobile'},
  {id:'rName',label:'Receiver Name'},
  {id:'rPhone',label:'Receiver Mobile'},
  {id:'origin',label:'Origin'},
  {id:'destination',label:'Destination'},
  {id:'package',label:'Package'},
  {id:'action',label:'Actions',disableSorting:true}
]


export default {
  bus,
  filters,
  news,
  branches,
  branchesHeadCells,
  busInfo,
  busHeaderCells,
  bookingClient,
  clientHeaderCells,
  mailInfo,
  mailHeaderCells
}