<template>
    <div class="centered-nav">
        <b-nav vertical class="w-100">
            <b-nav-item>
                <g-link class="nav__link" to="/">
                    Home <t v-if="$route.path == '/'"> <<< </t>
                </g-link>
            </b-nav-item>
            <b-nav-item>
                <g-link class="nav__link" to="/about">
                    About <t v-if="$route.path == '/about'"> <<< </t>
                </g-link>
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
</style>
