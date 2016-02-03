window.Links.components['link-todo'] = {

    link: {label: 'Anjey'},

    props: ['link'],

    data: function() {
        return {arrval: []};
    },

    created: function() {
        alert('this function create');
        this.$set('arrval', ['0', '1', '2']);
    },

    ready: function() {
        alert('this function ready');
        this.link = '@anjey_link';
    },

    filters: {
        filter_link: function(val) {return '@new_url_' + val;}
    },

    template:
        '<div class="uk-form-row">' + 
            '<label class="uk-form-label">Value array "arrval"</label>' +
            '<select class="uk-width-1-1" v-model="link">' +
                '<option v-for="item in arrval" :value="item | filter_link">{{item}}</option>' + 
            '</select>' +
        '</div>'
};
