<template>
    <div>
        <pre>
            {{ $route.query.page }}
        </pre>
        Usuário <br>

        <button @click="login()">
            Login
        </button>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route);
        console.log(this.$router);
    },
    methods: {
        login() {
            // ajax login
            this.$router.push({ name: 'about' });
            console.log('chegou');
        }
    }
}
</script>