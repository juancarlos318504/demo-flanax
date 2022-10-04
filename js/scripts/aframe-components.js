AFRAME.registerComponent('go-to-url', {
    schema: {
        url: {type: 'string', default: ''}
    },

    init: function () {

        const url = this.data.url;

        this.el.addEventListener('click', function (evt) {
            window.open(url, '_blank');
        });

    }
});

AFRAME.registerComponent('open-modal-information', {

    init: function () {
        
        let modalElement = document.getElementById('Modal-Video');
        let modalVideo = new bootstrap.Modal(modalElement, {
            keyboard: false
        });

        this.el.addEventListener('click', function (evt) {
            // this.el.emit('targetLost');
            modalVideo.show();
        });

    }
});

AFRAME.registerComponent('mind-target-video', {
    schema: {
        video: {type: 'selector', default: ''},
        panelVideo: {type: 'selector'}
    },

    init: function () {

        const el = this.el;
        const data = this.data;

        console.log("data",data.panelVideo);

        this.el.addEventListener('targetFound', event => {
            data.video.currentTime = 0.1
            data.video.play();
            // data.panelVideo.classList.add("clickable");
        });
        this.el.addEventListener('targetLost', event => {
            data.video.pause();
            // data.panelVideo.classList.remove("clickable");
        });

        let modalElement = document.getElementById('Modal-Video');
        let modalVideo = new bootstrap.Modal(modalElement, {
            keyboard: false
        });

        // let videoPlayer = document.querySelector("#");

        // if(this.data.panelVideo){
        //     this.data.panelVideo.addEventListener('click', function (evt) {
        //         el.emit('targetLost');
        //         modalVideo.show();
        //     });
        // }
    }
});


