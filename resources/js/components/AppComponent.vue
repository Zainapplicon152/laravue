<template>
    <!--<div>
        <v-container>
            <v-alert type="success"> Admin Component</v-alert>
            <v-btn link to="/foo">Foo</v-btn>
            <v-btn link to="/bar">Bar</v-btn>
            <v-btn link to="/user/zain">user</v-btn>
        </v-container>
        <v-content>-->
            <router-view></router-view>
       <!-- </v-content>
    </div>
-->
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
