let flag = true;
function display () {
    let block = document.getElementById('dropdown-content');
    let header = document.getElementById('sticky');
    let btn = document.getElementById('dropdown');
    if (flag) {
        block.classList.add('active');
        header.classList.add('act');
        btn.classList.add('active');
        document.getElementById('open').src="https://img.icons8.com/ios-glyphs/30/ffffff/delete-sign.png";
        flag = !flag;
    } else {
        block.classList.remove('active');
        header.classList.remove('act');
        btn.classList.remove('active');
        document.getElementById('open').src="https://img.icons8.com/ios-glyphs/30/ffffff/menu-rounded.png";
        flag = !flag;
    }
}
window.addEventListener("load", function() {    
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.getElementById('main-style').style.overflow= "auto";
        document.getElementById('main-style').style.maxHeight= "";
        document.getElementById('token2-id').classList.remove("token2-low");
        document.getElementById('token2-id').classList.add("token2");
    }, 500);
    const carouselImages = document.querySelector('.carousel__images');
    const images = document.querySelectorAll('.carousel__images img');
    const carouselImages2 = document.querySelector('.carousel__images2');
    const images2 = document.querySelectorAll('.carousel__images2 img');
    const numberOfImages2 = document.querySelectorAll('.carousel__images2 img').length;
    const carouselButtons2 = document.querySelectorAll('.carousel__button2');
    const carouselButtons = document.querySelectorAll('.carousel__button');
    const numberOfImages = document.querySelectorAll('.carousel__images img').length;
    let imageIndex = 2;
    let translateX = 0;
    let imageIndex2 = 2;
    let translateX2 = 0;

    carouselButtons2.forEach(button => {
        button.addEventListener('click', event => {
            if (event.target.id === 'previous2') {
                if (imageIndex2 !== 1) {
                    imageIndex2--;
                    translateX2 += 250;
                 
                }
            } else {
                if (imageIndex2 !== numberOfImages2) {
                    imageIndex2++;
                    translateX2 -= 250;
                    
                }
            }

            carouselImages2.style.transform = `translateX(${translateX2}px)`;
            images2.forEach((image, index) => {
                if (index === imageIndex2 - 1) {
                    image.classList.add('active');
                } else {
                    image.classList.remove('active');
                   
                }
            });
        });
    });
    carouselButtons.forEach(button => {
        button.addEventListener('click', event => {
            if (event.target.id === 'previous') {
                if (imageIndex !== 1) {
                    imageIndex--;
                    translateX += 250;
                }
            } else {
                if (imageIndex !== numberOfImages) {
                    imageIndex++;
                    translateX -= 250;
                }
            }

            carouselImages.style.transform = `translateX(${translateX}px)`;
            images.forEach((image, index) => {
                if (index === imageIndex - 1) {
                    image.classList.add('active');
                } else {
                    image.classList.remove('active');
                }
            });
        });
    });
    const canvases = document.querySelectorAll('.noise');
    function applyNoise(ctx) {
        const w = ctx.canvas.width,
            h = ctx.canvas.height,
            iData = ctx.createImageData(w, h),
            buffer32 = new Uint32Array(iData.data.buffer),
            len = buffer32.length;
        let i = 0;

        for(; i < len;i++)
            if (Math.random() < 0.5) buffer32[i] = 0xffffffff;
        ctx.putImageData(iData, 0, 0);
    }

    (function loop() {
        for (c of canvases) {
            applyNoise(c.getContext('2d'));
        }
        requestAnimationFrame(loop);
    })();
        
});
function SendEmail()
{        
    document.getElementById("email-adress").value = "";
    document.getElementById("email-adress-mobile").value = "";
}