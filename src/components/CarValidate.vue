<template>
  <div>{{ showText }}</div>
  <br>
  <button @click="changeCar('Volvo')">Cambiar carro</button>
</template>

<script lang="ts">

export default {
  name: 'CarValidateComponent',
  props: ['plate'],
  // data: los datos del componente
  data() {
    return {
      car: 'Hyundai',
      owner: 'Daniel'
    }
  },
  // Los metodos son funciones que vamos a usar
  methods: {
    // Cambia el nombre del carro
    changeCar(name: string): void {
      this.car = name
    },
  },
  // Metodos que devuelven valores, se convierten en datos
  computed: {
    // Devuelve el texto a mostrar
    showText(): string {
      return `El dueño del ${this.car} con placa ${this.plate} es ${this.owner}`
    }
  },
  // Lyfecycles: metodos que son llamados en ciertos tiempo de ejecucion del componente
  // mounted: se ejecuta cuando el componente se renderiza
  mounted() {
    this.owner = 'Lucia'
  },
  // Observa cuando un dato cambia
  watch: {
    // El nombre de la funcion debe tener el mismo nombre de la variable que va a observar
    // Siempre se tiene un valor antiguo y uno nuevo para cualquier dato
    owner(newValue, oldValue) {
      // Cuando se cambia el valor haga algo
      console.log(`Oiga el dueño cambio de ${oldValue} a ${newValue}`)
    }
  },
}
</script>