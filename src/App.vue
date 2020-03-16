<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Configurações</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-row>
        <v-col cols="1">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        </v-col>
        <v-col cols="10">
          <v-toolbar-title class="mt-2 text-center">Mastery</v-toolbar-title>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex md4>
          <v-card raised class="pa-4">
            <template>
              <v-text-field 
                v-model="invocador"
                placeholder="Nome de invocador"
                color="primary"
                :loading="loading"
              ></v-text-field>
            </template>
            <v-btn color="primary" large @click="buscaInvocador">Buscar</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-app>
</template>

<script>
  import Vue from 'vue'

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
      loading: false,
      invocador: null,
      dados: null
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
    methods: {
      async buscaInvocador() {
        if(!this.invocador) return false

        this.loading = true

        let options =  {
          headers : {
            "usuario": this.invocador
          }
        }
        
        Vue.axios.get("/", options).then((response) => {
          console.log(response)
        })
      }
    }
  }
</script>