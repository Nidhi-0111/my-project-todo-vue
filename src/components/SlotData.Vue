<template>
 
    
    <div >
        <app-slot>
            <div slot="form-header">
                <h3>This is the Slot title </h3>
                <p>This is some slot info</p>
            </div>

            <div slot-scope="{data}">
              <span>{{data.name}}</span>
            </div>
           
        </app-slot>
    </div> 
    


  


  
  
</template>

<script>
import Slots from './components/Slots.vue'
 
export default {
  name:"slotsScope",
  components: {
    Header,
    'app-slot': Slots,
   
  },
   methods: {
       
    }
}
</script>


<style>
  
</style>
