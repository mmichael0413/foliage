<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Welcome to Grails</title>
</head>

<h1>Checkin</h1>

<div class="module">
    <form>
        <p>This is the text for a question in a survey.</p>
        <input type="text" placeholder="Enter answer here."/>

        <p>This is another question</p>
        <textarea rows="4" placeholder="Enter answer here"></textarea>

        <p>Yes or no?</p>

        <div class="radio-group">
            <input type="radio" name="sex" value="yes" class="radio-inline">Yes
            <input type="radio" name="sex" value="no" class="radio-inline">No
        </div>

        <p>Upload File</p>
        <button class="btn primary">Choose File</button>
    </form>
</div>
</html>