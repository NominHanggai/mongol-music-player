export default {
    data() {
      return {
        count: 0,
        isMusicListShow: false,
      }
    },
    methods: {
      toggleMusicList() {
        console.log(this.isMusicListShow);
        this.isMusicListShow = !this.isMusicListShow;
      },
      log(a) {
        console.log(a);
      }
    },
    mounted() {
      
    },

    // template: `
    //   <button @click="count++">
    //     You clicked me {{ count }} times.
    //   </button>`
  }
  