import HomeNew from '@/components/home/homeNew.js';
import AboutNew from '@/components/about/aboutNew.js';
import AboutIndex from '@/components/about/aboutIndex.js';
import Test from '@/components/test/test.js';

let routes=[
  {
    path:"/",
    component:HomeNew,
    exact:true
  },
  {
    path:"/test",
    component:Test
  },
  {
    path: "/about",
    component: AboutNew,
    routes:[
      {
        path:"/about/aboutIndex",
        component:AboutIndex
      }
    ]
  }
]
export default routes;
