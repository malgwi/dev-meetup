<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" class="info">Explore Meet Ups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/meetup/new" class="info">Organise Meet Ups</v-btn>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                    indeterminate
                    color="primary"
                    :width="7"
                    :size="70"
                    v-if="loading"
                >
                </v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2" v-if="!loading">
            <v-flex xs12>
                <v-carousel style="cursor: pointer;">
                    <v-carousel-item
                    v-for="meetup in meetups"
                    :key="meetup.id"
                    :src="meetup.imageUrl"
                    reverse-transition="fade"
                    transition="fade"
                    @click="onLoadMeetup(meetup.id)">
                    <div class="title">
                        {{meetup.title}}
                    </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12  class="text-xs-center">
               <p>Join Our Awesome Meetups!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {
        meetups () {
            return this.$store.getters.featuredMeetups
        },
        loading () {
            return this.$store.getters.loading
        }
    },
    methods: {
        onLoadMeetup (id) {
            this.$router.push('/meetups/' + id)
        }
    }
}
</script>

<style scoped>
    .title{
        position: absolute;
        bottom: 50px;
        background-color: rgba(0, 0,0, 0.5);
        color: white;
        font-size: 2em;
        font-style: oblique;
        padding: 20px;
    }
</style>

<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>



