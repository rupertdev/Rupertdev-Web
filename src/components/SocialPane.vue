<template>
    <b-container class="social-pane">
        <b-row>
            <b-col cols=3 class="sm-col">
                    <g-image src="~/images/ProfilePic.jpg" width="512" style="max-width:100%"/>
            </b-col>
            <b-col class="sm-col">
                <h4 class="name-text"><a style="color:black" href="">Michael Rupert</a></h4>
                <a href="https://twitter.com/Spoopert" class="sm-link">🐦&nbsp;Twitter</a>&nbsp;<a href="https://github.com/rupertdev" class="sm-link">⌨️&nbsp;Git</a>&nbsp;
                <a href="mailto:michaelrupert@fastmail.com">✉️&nbsp;michaelrupert@fastmail.com</a>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
</script>

<style>
.sm-col {
    padding: 5px
}
.social-pane {
    padding: 0;
    font-family: "Work Sans", sans-serif;
}
.pic-name-div {
    min-width: 100%;
}
.name-text {
    margin: auto;
    text-align: left;
    font-size: xx-large;
}
</style>
