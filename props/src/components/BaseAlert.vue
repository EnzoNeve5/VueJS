<template>
    <div :class="baseClass">
        {{ test }}
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        },
        test: {
            type: String,
            default: '',
        },
    },
    computed: {
        baseClass() {
            return {
                'alert': true,
                'alert-success': this.variant === 'success',
                'alert-alert': this.variant === 'alert',
                'alert-danger': this.variant === 'danger',
            };
        },
    },
}
</script>

<style scoped>
.alert {
    padding: 20px;
    border-radius: 15px;
    background-color: #333333;
    color: white;
    margin-bottom: 15px;
}
.alert-success {
    background-color: #0e5a11;
}
.alert-alert {
    background-color: #eeff00;
    color: black;
}
.alert-danger {
    background-color: #eb3434;
}
</style>