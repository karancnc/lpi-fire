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

    //  product-details page start

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

    
        $('.customize_product_details').each(function () {
            const $section = $(this);

            // Elements specific to this section
            const $uploadArea = $section.find('.upload-area');
            const $input = $section.find('.logo-upload');
            const $filenameBox = $section.find('.upload-box .upload_filename');
            const $filenameText = $filenameBox.find('.nameu');
            const $removeFilename = $filenameBox.find('.remove_filename');
            const $logoPreview = $section.find('.company_logo span');

            // ---- Upload Logic ----

            // Trigger input on area click
            $uploadArea.on('click', function () {
                $input.click();
            });

            // Drag & drop handling
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
                if (!file) {
                    $filenameBox.hide();
                } else {
                    $filenameText.text(file.name);
                    $filenameBox.show();
                }
            });

            $filenameBox.hide(); // Initially hide

            // File input change
            $input.on('change', function () {
                const file = this.files[0];
                handleFile(file);
                if (!file) {
                    $filenameBox.hide();
                } else {
                    $filenameText.text(file.name);
                    $filenameBox.show();
                }
            });

            // Remove filename and logo preview
            $removeFilename.on('click', function () {
                $filenameText.text('');
                $filenameBox.hide();
                $logoPreview.text('Company logo');
                $input.val(''); // Clear input file
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
                    $logoPreview.html(`<img src="${e.target.result}" alt="Logo" style="max-height:40px;">`);
                };
                reader.readAsDataURL(file);
            }

            // ---- Input/Preview Binding ----

            function toggleClearButton() {
                let allFilled = true;

                $section.find('.product_info input, .product_info select').each(function () {
                    if ($(this).val().trim() === '') {
                        allFilled = false;
                        return false;
                    }
                });

                if (allFilled) {
                    $section.find('.clear_fields').removeClass('disble');
                } else {
                    $section.find('.clear_fields').addClass('disble');
                }
            }

            $section.find('.product_info input, .product_info select').on('input change', function () {
                const companyName = $section.find('input[placeholder="Company Name"]').val();
                const city = $section.find('select.city').val();
                const state = $section.find('select.state').val();
                const zip = $section.find('input[placeholder="Zip"]').val();
                const phone = $section.find('input[placeholder="Phone Number"]').val();
                const permit = $section.find('input[placeholder="Permit Number"]').val();

                $section.find('.company_name').text(companyName || 'Company Name');
                $section.find('.company_location .city').text(city || 'City');
                $section.find('.company_location .state').text(state || 'State');
                $section.find('.company_location .zip').text(zip || 'Zip');
                $section.find('.company_contact .phone_number').text(phone || 'Phone number');
                $section.find('.company_contact .permit strong').text(permit || '');

                toggleClearButton();
            });

            // Clear Fields Handler
            $section.find('.clear_fields').on('click', function (e) {
                e.preventDefault();
                const $btn = $(this);
                if ($btn.hasClass('disble')) return;

                $section.find('.product_info input').val('');
                $section.find('.product_info select').val('');
                $filenameText.text('');
                $filenameBox.hide();
                $logoPreview.text('Company logo');
                $section.find('.company_name').text('Company Name');
                $section.find('.company_location .city').text('City');
                $section.find('.company_location .state').text('State');
                $section.find('.company_location .zip').text('Zip');
                $section.find('.company_contact .phone_number').text('Phone number');
                $section.find('.company_contact .permit strong').text('');

                $btn.addClass('disble');
            });

            toggleClearButton(); // Run on init
        });

        // popup 
        $('.mini_cart .mini_cart_item .edit_delete_btn .mini_edit').click(function(e){
            e.preventDefault();
            $('.customize_product_details_popup ,.overlay1').addClass('open');
        });
        $('.customize_product_details_popup.comman_popup .close_popup1 ,.overlay1').click(function(){
            $('.customize_product_details_popup , .overlay1').removeClass('open');            
        });


    //  product-details page end




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

    if($('.checkout_nav').length > 0){
        // $('.checkout_nav li a[href*=\\#]').on('click', function(event){ 
        $('.checkout_nav li a[href*="#"]').on('click', function(event){ 
            event.preventDefault(); 
            var _this = $(this);
            $('.checkout_nav li').removeClass('active');
            _this.parent().addClass('active');
            
            if(!_this.hasClass('payment_method_link')){
                $('.checkout_wrap ,.payment_sec').removeClass('open');

                var target = this.hash.substr(1); 
                console.log(target);
                $('html, body').animate({
                    scrollTop: $('#'+target).offset().top - 130
                }, 500);

            }else{
                $('.checkout_wrap ,.payment_sec').addClass('open');
            }

        });
    };

    $('.payment_select_wrap a').click(function(e){
        e.preventDefault();
        var _this = $(this);
        $('.payment_select_wrap a').removeClass('active');
        _this.addClass('active');

        if($('.payment_select_wrap .pay_card_link').hasClass('active')){
             $('.pay_bank_transfer').removeClass('open');
            $('.notesee,.pay_credit_card').addClass('open');
        }

        if($('.payment_select_wrap .pay_bank_link').hasClass('active')){
            $('.pay_credit_card').removeClass('open');
            $('.notesee,.pay_bank_transfer').addClass('open');
        }

    });

    // order page
    $('.order_link_list a.order_details').click(function(e){
        e.preventDefault();
        $('.my_order_sec , .my_order_details').addClass('open');
    });
    // $('.my_order_sec:not(.my_order_details) .order_had h3').click(function(e){
    //     e.preventDefault();
    //     var _this = $(this);
    //     if(!_this.hasClass('open')){
    //         _this.addClass('open');
    //         _this.parent().next().find('.my_cart_inner').slideDown();
    //     }else{
    //         _this.removeClass('open');
    //         _this.parent().next().find('.my_cart_inner').slideUp();
    //     };
    // });

    $('.my_order_sec:not(.my_order_details) .order_results .order_had h3').click(function (e) {
        e.preventDefault();

        var _this = $(this);
        var $orderResults = _this.closest('.order_results');
        var $cartInner = $orderResults.find('.my_cart_inner');

        if (!_this.hasClass('open')) {
            _this.addClass('open');
            $cartInner.slideDown();
        } else {
            _this.removeClass('open');
            $cartInner.slideUp();
        }
    });

    // my_address_sec
    $('.my_address_sec .order_link_list a.add_edit').click(function (e) {
        e.preventDefault();
       $('.my_address_sec ,.my_address_edit_sec').addClass('open');
    });
    // my_profile_sec
    $('.my_profile_sec .order_link_list a.add_edit').click(function (e) {
        e.preventDefault();
       $('.my_profile_edit_sec ,.my_profile_sec').addClass('open');
    });
    // tracking_number
    $('.order_Shipping_date_status li .tracking_number').click(function (e) {
        e.preventDefault();
       $('.status_tracking,.overlay').addClass('open');
    });
    $('.overlay,.comman_popup .close_popup').click(function (e) {
        e.preventDefault();
       $('.status_tracking,.overlay').removeClass('open');
    });


});


