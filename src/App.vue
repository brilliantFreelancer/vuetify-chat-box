<template>
    <v-app>
    <v-container fluid fill-height>

    </v-container>
        <ChatComponent/>

    </v-app>
</template>

<script>
    import ChatComponent from './components/ChatComponent';

    export default {
        name: 'App',

        components: {
            ChatComponent: ChatComponent,
        },

        data: () => ({
            //
        }),
    };
</script>
<style>

</style>
