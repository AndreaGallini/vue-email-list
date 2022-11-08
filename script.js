const { createApp } = Vue

createApp({
    data() {
        return {
            mail: [],
        }
    },
    methods: {
        callApi() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    console.log(res.data.response)
                    this.mail.push(res.data.response);
                    console.log(this.mail)
                })
            }

        },
    },
    mounted() {
        this.callApi()
    }

}).mount('#app')