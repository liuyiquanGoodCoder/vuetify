<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
         <v-list-item-group v-model="model">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="megHeader"
    >
      <!-- <v-app-bar-nav-icon  @click.stop="mini = !mini"></v-app-bar-nav-icon> -->
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <!-- <v-footer
      color="megHeader"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
  import navigationDrawer from '../components/navigationDrawer'
  export default {
    components:{
      //navigationDrawer
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: true,
        chevron_left:{icon:'chevron_left'},
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        model: 0,
        mini: false,
    }),
  }
</script>
<style lang="scss" scoped>
  .megHeader{
    color: white;
    background:linear-gradient(to right, #21539B , #21d2b9);
  }
</style>