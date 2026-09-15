import axios from 'axios'
import {create} from 'zustand'
const featureStore= create((set)=>({


featuresList: null, 
getFeaturesList:async()=>{
   let res=await axios.get('/api/featuresList')
    set({featuresList: res.data['data']})
    console.log(res.data.data)
},


}))


export default featureStore