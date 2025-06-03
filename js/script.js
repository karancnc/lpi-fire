var $ = jQuery.noConflict();

$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  function bodypad(){
    $('body').css('padding-top',$('header').outerHeight());
  }
  bodypad();
$(document).ready(function(){
    bodypad();
      // lenis scroll start
    // if(!("ontouchstart" in document.documentElement)) {
    //     document.documentElement.className += " no-touch";
    //     } else {
    //         document.documentElement.className += " touch";
    //     }
    //     if($('html').hasClass('no-touch')){
    //     const lenis = new Lenis({
    //         autoRaf: true,
    //     });
    // };
    
    $('.mid_header .cart_bag').click(function(){
        $('.overlay,.mini_cart').addClass('open');
    });
    $('.mini_cart_header .cart_close,.overlay').click(function(){
        $('.overlay,.mini_cart').removeClass('open');
    });

    if($(window).width() < 1280){
        $('.bottom_header .navigation>li>a').before('<span class="arrow"></span>');
        $('.hambarger,.mobile_search').click(function(){
            $('.bottom_header').addClass('open');
        });
        $('.mobile_header .back').click(function(){
            $('.bottom_header').removeClass('open');
            $('.bottom_header .navigation>li.drop_menu').removeClass('open');
            $('.mega_menu').slideUp();
        });
        $('.bottom_header .navigation>li.drop_menu>a').click(function(){
            var _this = $(this);

            if(!_this.parent('.drop_menu').hasClass('open')){
                $('.bottom_header .navigation>li.drop_menu').removeClass('open');
                $('.mega_menu').slideUp();

                _this.parent('.drop_menu').addClass('open');
                _this.next().slideDown();
                // _this.children('.mega_menu').slideDown();

            }else{

                _this.parent('.drop_menu').removeClass('open');
                _this.next().slideUp();
            }

        });
        
        if($(window).width() < 1023){
            $('.bottom_header .navigation').before($('.mid_header .search_col').clone());
        }



    };

    if($(window).width() < 767){
        $('.mid_header .my_account_user .user').click(function(){
            $('.my_account_dropdown,.overlay1').addClass('open');
        });
         $('.my_account_dropdown .back,.overlay1').click(function(){
            $('.my_account_dropdown, .overlay1').removeClass('open');
        });
    };
    



    if($('.ticker').length > 0){
        const tickers = $('.ticker ul');
        let current = 0;
        const total = tickers.length;
    
        function showNextTicker() {
            // Current active ticker
            const currentTicker = tickers.eq(current);    
            // Prepare next ticker index
            const next = (current + 1) % total;
            const nextTicker = tickers.eq(next);
            // Animate current out
            currentTicker.removeClass('active').addClass('done');
            // Prepare next ticker to come in
            nextTicker.removeClass('done finish').addClass('active');
            // Reset old ticker after animation delay
            setTimeout(() => {
                currentTicker.removeClass('done').addClass('finish');
            }, 600); // Match CSS transition time
            // Set the new current index
            current = next;
            setTimeout(showNextTicker, 3000); // Duration each ticker is shown
        }
        setTimeout(showNextTicker, 3000);
    };
    if(jQuery('.banner').length > 0 ){
        new Swiper('.banner .swiper-container', {
            //loop: true,           
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 0,           
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination1',
                clickable: true
            },  
       });
    };
    if(jQuery('.product_highlights').length > 0 ){
        new Swiper('.product_highlights .swiper-container', {
              //loop: true,           
              slidesPerView:5.4,
              spaceBetween:16, 
              paginationClickable: true,
              navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
              },
              pagination: {
                  el: '.swiper-pagination1',
                  clickable: true
              },  
               breakpoints: {
                1600: {
                    slidesPerView: 5.4,
                    spaceBetween: 10
                },
                1400: {
                    slidesPerView: 3.6,
                    spaceBetween: 10
                },                
                1280: {
                    slidesPerView: 3.5,
                    spaceBetween: 16
                },
                1024: {
                    slidesPerView: 2.8,
                    spaceBetween: 12
                },
                768: {
                    slidesPerView: 3.2,
                    spaceBetween: 10,
                    centeredSlides: false ,
                    loop: false,   
                },
                0: {
                    spaceBetween: 16,
                    centeredSlides: true ,
                    loop: true,   
                    slidesPerView: 'auto',
                }
            }
        });
    };

    if($('.counter').length > 0){
        $('.counter').each(function () {
            const $counter = $(this);
            const $input = $counter.find('input.qty');
            const min = parseInt($input.attr('min'));
            const max = parseInt($input.attr('max'));
            const step = parseInt($input.attr('step')) || 1;
    
            $counter.find('.increment').click(function () {
            let val = parseInt($input.val());
            if (val < max) {
                $input.val(val + step);
            }
            });
    
            $counter.find('.decrement').click(function () {
            let val = parseInt($input.val());
            if (val > min) {
                $input.val(val - step);
            }
            });
        });
    };
    
    
    $('.filter_sidebar .colin .title').click(function(){
        var _this = $(this);
        if(!_this.hasClass('open')){
            _this.addClass('open');
            _this.next().slideDown();
        }else{
            _this.removeClass('open');
            _this.next().slideUp();
        }
    });
    if(jQuery('#price-slider').length > 0){
        const minPrice = 49;
        const maxPrice = 1449;
        jQuery("#price-slider").slider({
             range: true,
             min: minPrice,
             max: maxPrice,
             values: [49, 1035],
             slide: function (event, ui) {
                     jQuery("#min-price").val(`$${ui.values[0]}`);
                     jQuery("#max-price").val(`$${ui.values[1]}`);
             }
        });
        // Sync input to slider
        jQuery("#min-price, #max-price").on("change", function () {
             let min = parseInt(jQuery("#min-price").val().replace(/\D/g, '')) || minPrice;
             let max = parseInt(jQuery("#max-price").val().replace(/\D/g, '')) || maxPrice;
             if (min < minPrice) min = minPrice;
             if (max > maxPrice) max = maxPrice;
             if (min > max) min = max;
             jQuery("#price-slider").slider("values", [min, max]);
             jQuery("#min-price").val(`$${min}`);
             jQuery("#max-price").val(`$${max}`);
        });
    };

    $('.result_dropdown .result_dropdown_title').click(function(){
        var _this = $(this);
        if(!_this.hasClass('open')){
            _this.addClass('open');
            _this.next().slideDown();
        }else{
            _this.removeClass('open');
            _this.next().slideUp();
        };
    });
    $('.result_dropdown ul li').click(function(){
            // $('.result_dropdown .result_dropdown_title').removeClass('open');
            // $('.result_dropdown ul').slideUp();
              var selectedContent = $(this).html();

            $('.result_dropdown .result_dropdown_title').html(selectedContent);

            $('.result_dropdown .result_dropdown_title').removeClass('open');
            $('.result_dropdown ul').slideUp();
            $(this).addClass('active').siblings().removeClass('active');
    });
    $('.wishlist').click(function(){
        $(this).toggleClass('active');
    });
    $('.categories_results_title .filter_mobile').click(function(){
        $('.filter_sidebar').addClass('open');
    }); 
    $('.filter_sidebar_header .back').click(function(){
        $('.filter_sidebar').removeClass('open');
    }); 

    if(jQuery('.product_categories_slider').length > 0 ){
        new Swiper('.product_categories_slider .swiper-container', {
              //loop: true,           
              
              paginationClickable: true,
                //centeredSlides: true ,
                //loop: true,   
                //slidesPerView: 'auto',
              navigation: {
                  nextEl: '.product_categories_slider .swiper-button-next',
                  prevEl: '.product_categories_slider .swiper-button-prev',
              },
              pagination: {
                  el: '.product_categories_slider .swiper-pagination',
                  clickable: true
              },  
               breakpoints: {
                1700: {
                    slidesPerView: 6.9,
                    spaceBetween: 32
                },
                1600: {
                    slidesPerView: 6.2,
                    spaceBetween: 30
                },
                1400: {
                    slidesPerView: 5.3,
                    spaceBetween: 30
                },                
                1280: {
                    slidesPerView: 5.5,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3.2,
                    spaceBetween: 10,
                    centeredSlides: false ,
                    loop: false,   
                },
                0: {
                    spaceBetween: 16,
                    //centeredSlides: true ,
                    loop: true,   
                    slidesPerView: 'auto',
                }
            }
        });
    };

    if($(window).width() < 768){
        if(jQuery('.filter_containt .product_categories').length > 0 ){
           new Swiper('.filter_containt .product_categories  .swiper-container', {
                 //loop: true,           
               paginationClickable: true,
               spaceBetween: 0,
               //centeredSlides: true ,
               loop: false,   
               slidesPerView: 'auto',
                 navigation: {
                     nextEl: '.filter_containt .product_categories .swiper-button-next',
                     prevEl: '.filter_containt .product_categories .swiper-button-prev',
                 },                        
           });
       };
    };

    if($('.single_product_slider').length > 0){
        var galleryThumbs = new Swiper('.single_product_slider_thumbs', {
            spaceBetween: 0,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
             breakpoints: {
                0: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 5
                }
            }
        });
    
        // Initialize the main slider and link it to the thumbnail slider
        var galleryTop = new Swiper('.single_product_slider', {
            spaceBetween: 0,
            zoom: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });

    };
 if($('.magnific_popup').length > 0){

     $('.magnific_popup').magnificPopup({
         type: 'image',
         mainClass: 'mfp-with-zoom', 
         gallery:{
                     enabled:true
                 },
 
         zoom: {
             enabled: true, 
 
             duration: 300, // duration of the effect, in milliseconds
             easing: 'ease-in-out', // CSS transition easing function
 
             opener: function(openerElement) {
 
                 return openerElement.is('img') ? openerElement : openerElement.find('img');
             }
         }
     });
 };

    $('.details_single_product .title li a[href*=\\#]').on('click', function(event){ 
        event.preventDefault(); 
        var target = this.hash.substr(1); 
        $('html, body').animate({
            scrollTop: $('.' + target).offset().top - 175
        }, 500);
    });

  
        if($('#uploadLabelBtn').length > 0){

            // Click button to open file dialog
            $('#uploadLabelBtn').on('click', function () {
                $('#uploadLabelInput').click();
            });
    
            // Handle label upload
            $('#uploadLabelInput').on('change', function () {
                const file = this.files[0];
                if (!file) return;
    
                const validTypes = ['image/png', 'image/jpeg'];
                if (!validTypes.includes(file.type)) {
                alert('Only PNG or JPEG files allowed.');
                return;
                }
    
                if (file.size > 2 * 1024 * 1024) {
                alert('File size exceeds 2MB limit.');
                return;
                }
    
                const reader = new FileReader();
                reader.onload = function (e) {
                $('#labelImage').attr('src', e.target.result);
                };
                reader.readAsDataURL(file);
            });
        };


    if($('#logo-upload').length > 0){
        const $uploadArea = $('.upload-area');
        const $input = $('#logo-upload');

    // Handle click
    $uploadArea.on('click', function () {
        $input.click();
    });

    // Drag & drop
    $uploadArea.on('dragover', function (e) {
        e.preventDefault();
        $uploadArea.addClass('dragover');
    });

    $uploadArea.on('dragleave', function () {
        $uploadArea.removeClass('dragover');
    });

    $uploadArea.on('drop', function (e) {
        e.preventDefault();
        $uploadArea.removeClass('dragover');
        const file = e.originalEvent.dataTransfer.files[0];
        handleFile(file);
    });

    $input.on('change', function () {
        const file = this.files[0];
        handleFile(file);
    });

    function handleFile(file) {
        if (!file) return;

        const validTypes = ['image/png', 'image/jpeg'];
        if (!validTypes.includes(file.type)) {
            alert('Invalid file type. Only PNG or JPEG allowed.');
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert('File is too large. Max 2MB allowed.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            $('.company_logo span').html(`<img src="${e.target.result}" alt="Logo" style="max-height:40px;">`);
        };
        reader.readAsDataURL(file);
    }

    // Handle text input updates
    $('.product_info input, .product_info select').on('input change', function () {
        const companyName = $('input[placeholder="Company Name"]').val();
        const city = $('select.city').val();
        const state = $('select.state').val();
        const zip = $('input[placeholder="Zip"]').val();
        const phone = $('input[placeholder="Phone Number"]').val();
        const permit = $('input[placeholder="Permit Number"]').val();

        $('.company_name').text(companyName || 'Company Name');
        $('.company_location .city').text(city || 'City');
        $('.company_location .state').text(state || 'State');
        $('.company_location .zip').text(zip || 'Zip');
        $('.company_contact .phone_number').text(phone || 'Phone number');
        $('.company_contact .permit strong').text(permit || '');
    });

    // Clear fields
       toggleClearButton();
    $('.clear_fields').on('click', function (e) {
        e.preventDefault();

        // If button is disabled, do nothing
        if ($(this).hasClass('disble')) {
            return;
        }

        // Clear all values
        $('.product_info input').val('');
        $('.product_info select').val('');

        // Reset preview content
        $('.company_logo span').text('Company logo');
        $('.company_name').text('Company Name');
        $('.company_location .city').text('City');
        $('.company_location .state').text('State');
        $('.company_location .zip').text('Zip');
        $('.company_contact .phone_number').text('Phone number');
        $('.company_contact .permit strong').text('');

        // Re-disable the button after clearing
        $(this).addClass('disble');
    });

    $('.product_info input, .product_info select').on('input change', function () {
        toggleClearButton();
    });
    function toggleClearButton() {
        let allFilled = true;

        $('.product_info input, .product_info select').each(function () {
            if ($(this).val().trim() === '') {
                allFilled = false;
                return false; // exit loop early
            }
        });

        if (allFilled) {
            $('.clear_fields').removeClass('disble');
        } else {
            $('.clear_fields').addClass('disble');
        }
    }
        // Print
        $('.Print').on('click', function (e) {
            e.preventDefault();
            printLabel();
        });

        function printLabel() {
            const content = document.querySelector('.label_preview').html();
            const printWindow = window.open('', '', 'height=600,width=800');
            printWindow.document.write('<html><head><title>Print Label</title>');
            printWindow.document.write('<style>body{margin:0;font-family:sans-serif;} @media print { body { margin: 0; } }</style>');
            printWindow.document.write('</head><body>');
            printWindow.document.write(content);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        }
    };
    // faq section
    $('.faq_sec .colin .title').click(function(){
        var _this = $(this);
        if(!_this.parent().hasClass('open')){
            _this.parent().addClass('open');
            _this.next().slideDown();
        }else{
            _this.parent().removeClass('open');
            _this.next().slideUp();
        };
    });
    $('[data-popup="sign-in"]').click(function(){
        $('.overlay,.login_popup').addClass('open');
    });
    $('.comman_popup .close_popup,.overlay').click(function(){
        $('.overlay,.login_popup').removeClass('open');
    });
    $(document).on('change', '.verify_radio input[type="radio"]', function () {
        const selected = $(this).attr('id');

        if (selected === 'emailradio') {
            $('.verify_email').addClass('active');
            $('.verify_phone').removeClass('active');
        } else if (selected === 'phoneradio') {
            $('.verify_phone').addClass('active');
            $('.verify_email').removeClass('active');
        }
    });







});


