<template>
    <div class="centered-nav">
        <b-nav vertical class="w-100">
            <b-nav-item>
                <g-link class="nav__link" to="/">
                    Home <label v-if="$route.path == '/'"> <<< </label>
                </g-link>
            </b-nav-item>
            <b-nav-item>
                <g-link class="nav__link" to="/about">
                    About <label v-if="$route.path == '/about'"> <<< </label>
                </g-link>
            </b-nav-item>
            <b-nav-item>
                <a class="nav__link" href="/rss.xml">RSS</a>
            </b-nav-item>
        </b-nav>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  props: ["pageTitle"],
};
</script>


<style>
    .centered-nav {
        font-family: 'Work Sans', sans-serif
    }
    .nav-link {
        padding: 1px;
        white-space: nowrap;
    }
    .nav__link {
        color: black;
        white-space: nowrap;
    }
    label {
        margin-bottom: 0px;
        padding-bottom: 0px;
    }
</style>
