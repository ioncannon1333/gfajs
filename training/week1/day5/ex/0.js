function miao(obj) {
    this.name = obj.name ? obj.name : 'default name'
}

miao({
    name: 'miao'
})

axios({
    method: 'post',
    header: {
        'user-agent': 'chrome'
    },

})