<template>
    <div :class="baseClass">
        {{ test }}
        {{ text }}
        <button @click="onClick()">
            ×
        </button>
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
    methods: {
        onClick() {
            this.$emit('close')
        },
    },
}
</script>

<style scoped>
.alert {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
button {
    background: black;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    cursor: pointer;
}
button:hover {
    background-color: white;
    color: black;
}
</style>