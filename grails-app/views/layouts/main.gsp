<!doctype html>
<html>
<head>

    <!-- Meta -->
    <meta charset="utf-8">
    <title>3C</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Styles -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
    <link rel="stylesheet" href="${resource(dir: 'css', file: 'styles.css')}"/>
    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

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
                    <a href="#" class="toggle-subnav">
                        <span class="fa-stack ">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-user fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="link">John Doe</span>
                        <i class="fa fa-angle-right pull-right"></i>
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
        </div>

        <div id="site-submenu">
            <a href="#" class="toggle-subnav close"><i class="fa fa-times"></i></a>

            <ul class="unstyled">
                <li class="visible-xs">
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
                <li class="menu-option"><a href="javascript:void(0);">Opportunities</a></li>
                <li class="menu-option"><a href="javascript:void(0);">Profile</a></li>
                <li class="menu-option"><a href="javascript:void(0);">Settings</a></li>
                <li class="menu-option"><a href="javascript:void(0);">Support</a></li>
                <li class="menu-option"><a href="javascript:void(0);">Contact Us</a></li>
                <li class="menu-option"><a href="javascript:void(0);">Sign Out</a></li>
                <li class="menu-option return"><a href="javascript:void(0);" class="toggle-subnav"><strong>Return to navigation</strong>
                </a></li>
            </ul>

        </div>

        <div id="site-filter">
            This is a filter
        </div>

        <div id="mobile-header">
            <div id="links">
                <a href="javascript:void(0);" class="toggle-nav"><i class="fa fa-bars"></i></a>
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
    });

    $(function () {
        $('.toggle-filter').click(function () {
            // Calling a function in case you want to expand upon this.
            toggleFilter();
        });
    });

    $(function () {
        $('.toggle-subnav').click(function () {
            // Calling a function in case you want to expand upon this.
            toggleSubnav();
        });
    });


    function toggleNav() {
        if ($('#site-wrapper').hasClass('show-nav')) {
            // Do things on Nav Close
            $('#site-wrapper').removeClass('show-nav');
            $('#site-submenu').removeClass('show-subnav');
        } else {
            // Do things on Nav Open
            $('#site-wrapper').addClass('show-nav');
        }
    }


    function toggleFilter() {
        if ($('#site-wrapper').hasClass('show-filter')) {
            // Do things on Nav Close
            $('#site-wrapper').removeClass('show-filter');
            $('.toggle-filter').removeClass('enabled');
        } else {
            // Do things on Nav Open
            $('#site-wrapper').addClass('show-filter');
            $('.toggle-filter').addClass('enabled');
        }
    }

    function toggleSubnav() {
        if ($('#site-submenu').hasClass('show-subnav')) {
            // Do things on Nav Close
            $('#site-submenu').removeClass('show-subnav');
        } else {
            // Do things on Nav Open
            $('#site-submenu').addClass('show-subnav');
        }
    }

</script>

</body>
</html>