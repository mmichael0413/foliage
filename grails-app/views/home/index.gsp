<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Welcome to Grails</title>
</head>





    <h1>This is a Header
        <div class="actions">
            <a href="#"><span class="fa-stack">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-search fa-stack-1x"></i>
            </span>
            </a>
            <a href="#"><span class="fa-stack">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-filter fa-stack-1x"></i>
            </span>
            </a>
        </div>
    </h1>

    <div class="table">
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>State</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            <g:each in="${0..10}" var="b" status="i">
                <tr>
                    <td><a href="#">Username</a></td>
                    <td>123 Street Avenue, Providence</td>
                    <td>MA</td>
                    <td>617.584.6701</td>
                </tr>
            </g:each>
            </tbody>
        </table>
    </div>


</html>