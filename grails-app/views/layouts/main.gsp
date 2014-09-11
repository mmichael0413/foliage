<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${resource(dir: 'css', file: 'styles.css')}"/>
  %{--  <link rel="stylesheet" href="${resource(dir: 'css/lib', file: 'buttons.css')}"/>--}%
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <g:layoutHead/>
</head>

<body>
<div id="site-wrapper">
    <div id="site-canvas">

        <div id="site-menu">

            <div class="navigation">
                <div class="logo">
                    <a href="/redesign/home/index">
                        <span class="tc-icons tc-icons_logo"></span>
                        <span class="third hidden-xs">
                            THIRD<span class="gray-regulartext channel">CHANNEL</span>
                        </span>
                    </a>
                </div>

                <div class="nav-item">
                    <a href="#" class="toggle-submenu">
                        <span class="fa-stack ">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-user fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="link">John Doe</span>
                    </a>
                </div>


                <div class="nav-item active">
                    <a href="/redesign/home/form">
                        <span class="fa-stack ">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-dashboard fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="link">Dashboard</span>
                    </a>
                </div>

                <div class="nav-item">
                    <a href="/redesign/home/form">
                        <span class="fa-stack ">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="link">Notifications</span>
                    </a>
                </div>

                <div class="nav-item">
                    <a href="/redesign/home/form">
                        <span class="fa-stack ">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="link">Activity Feed</span>
                    </a>
                </div>

                <div class="nav-item">
                    <a href="/redesign/home/form">
                        <span class="fa-stack ">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-area-chart fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="link">Reports</span>
                    </a>
                </div>

                <div class="nav-item">
                    <a href="/redesign/home/form">
                        <span class="fa-stack ">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-building fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="link">Stores</span>
                    </a>
                </div>

                <div class="nav-item">
                    <a href="/redesign/home/form">
                        <span class="fa-stack ">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-star fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="link">Field Team</span>
                    </a>
                </div>

                <div class="nav-item">
                    <a href="/redesign/home/form">
                        <span class="fa-stack ">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-list-alt fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="link">Resources</span>
                    </a>
                </div>

            </div>

            <div class="submenu">
                <a href="#" class="toggle-submenu close"><i class="fa fa-times"></i></a>

                <ul class="unstyled">
                    <li>
                        <span class="fa-stack ">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-user fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="link">John Doe</span>
                    </li>

                    <li><strong>Programs</strong></li>
                    <li class="menu-option">
                        <a href="#">#CosmoOnCampus</a>
                    </li>
                    <li><strong>Account</strong></li>
                    <li class="menu-option"><a href="#">Opportunities</a></li>
                    <li class="menu-option"><a href="#">Profile</a></li>
                    <li class="menu-option"><a href="#">Settings</a></li>
                    <li class="menu-option"><a href="#">Support</a></li>
                    <li class="menu-option"><a href="#">Contact Us</a></li>
                    <li class="menu-option"><a href="#">Sign Out</a></li>
                    <li class="menu-option return"><a href="#" class="toggle-submenu"><strong>Return to navigation</strong></a></li>
                </ul>
            </div>
        </div>



        <div id="mobile-header">
            <div id="lks">
                <a href="#" class="toggle-nav"><i class="fa fa-bars"></i></a>
                <i class="tc-icons tc-icons_logo"></i>
            </div>
        </div>

        <div class="clear"></div>

        <div class="content">
            <g:layoutBody/>
        </div>
    </div>

</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript">
    $(function () {
        $('.toggle-nav').click(function () {
            // Calling a function in case you want to expand upon this.
            toggleNav();
        });

        $('.toggle-submenu').click(function () {
            // Calling a function in case you want to expand upon this.
            toggleSubmenu();
        });
    });


    /*========================================
     =            CUSTOM FUNCTIONS            =
     ========================================*/
    function toggleNav() {
        if ($('#site-wrapper').hasClass('show-nav')) {
            // Do things on Nav Close
            $('#site-wrapper').removeClass('show-nav');
        } else {
            // Do things on Nav Open
            $('#site-wrapper').addClass('show-nav');
        }

        //$('#site-wrapper').toggleClass('show-nav');
    }

    function toggleSubmenu() {
        console.log('I got here');
        if ($('#site-menu').hasClass('show-submenu')) {
            // Do things on Nav Close
            $('#site-menu').removeClass('show-submenu');
        } else {
            // Do things on Nav Open
            $('#site-menu').addClass('show-submenu');
        }

        //$('#site-wrapper').toggleClass('show-nav');
    }
</script>

</body>
</html>
