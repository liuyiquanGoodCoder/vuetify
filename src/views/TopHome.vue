<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
       :mini-variant.sync="mini"
      app
    >
    <v-list dense>
       <v-list-item-group>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            @click="none"
            
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
         </v-list-item-group>
      </v-list>
    </v-navigation-drawer> 

    <v-app-bar
      clipped-left
      app
      dark
      color="megHeader"
    >
      <v-toolbar-title
        style="width: 100%"
        class="mb-1 pl-0"
      >
        <v-app-bar-nav-icon  @click.stop="mini = !mini" small></v-app-bar-nav-icon>
      </v-toolbar-title>
       <v-btn
        icon
        small 
        class="mr-2 mb-1"
      >
        <v-icon>mdi-fullscreen</v-icon>
       </v-btn>
       <v-btn
        icon
        class="mr-2 mb-1"
      >
        <v-avatar  size="36">
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>
       </v-btn>
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
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
 import navigationDrawer from '../components/navigationDrawer'
  export default {
    props: {
      source: String,
    },
    components:{
        navigationDrawer
    },
    data: () => ({
      mini: false,
      items: [
        { icon: 'mdi-contacts', text: 'Contacts' },
        { icon: 'mdi-history', text: 'Frequently contacted' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-add', text: 'Create label' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-settings', text: 'Settings' },
        { icon: 'mdi-help', text: 'Help' },
        { icon: 'mdi-keyboard', text: 'Go to the old version' },
      ],
    }),
    methods:{
        none(){

        }
    }
  }
</script>
<style lang="scss" scoped>
  .megHeader{
    height: 56px;
    color: white;
    background:linear-gradient(to right, #21539B , #21d2b9);
  }
</style>