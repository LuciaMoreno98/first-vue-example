<template>
  <input type="text" v-model="searchCharacter">
  <table>
    <thead>
      <th>Nombre</th>
      <th>Gender</th>
      <th>Origin</th>
      <th>Image</th>
    </thead>
    <tbody v-for="character in charactersFiltered">
      <td>{{ character.name }}</td>
      <td>{{ character.gender }}</td>
      <td>{{ character.origin.name }}</td>
      <td><img :src="character.image" :alt="character.name"></td>
    </tbody>
  </table>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  name: 'DataTableComponent',
  props: [],
  data() {
    return {
      characters: [] as Character[],
      charactersFiltered: [] as Character[],
      info: {} as Info,
      searchCharacter: ''
    }
  },

  methods: {},

  computed: {},

  // LifeCycle: este life cycle se ejecuta al crear el componente
  created() {
    axios.get('https://rickandmortyapi.com/api/character')
    .then((responseFormatted: CharacterResponse) => {
        this.characters = responseFormatted.data.results
        this.charactersFiltered = this.characters
        this.info = responseFormatted.data.info
      })
      
    // fetch('https://rickandmortyapi.com/api/character')
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((responseFormatted: CharacterResponse) => {
    //     this.characters = responseFormatted.results
    //     this.info = responseFormatted.info
    //   })
  },
  
  watch: {
    searchCharacter() {
      // filtrado de datos
      this.charactersFiltered = this.characters.filter(character => {
        // convertimos los nombres de los personajes a minusculas
        const characterLowerCase = character.name.toLowerCase()
        // convertimos lo que escribio el usuario a minuscula
        const searchCharacterLowerCase = this.searchCharacter.toLowerCase()

        // revisamos si el en el nombre del personaje se incluye el texto que escribimos
        return characterLowerCase.includes(searchCharacterLowerCase)
      })

      /*
      [1, 2, 3, 4, 5, 6]
      quiero filtrar solo el 4
      entonces el filtro recibe lo siguiente:
      [false, false, false, true, false, false]
      ahora descarta los false y mantiene los true
      [ , , , 4, , ]
      [4]
      */
    }
  }
}
</script>
