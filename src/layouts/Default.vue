<template>
  <b-container>
    <b-row class="body-row">
      <b-col cols=3 class="d-table">
        <SocialPane></SocialPane>
      </b-col>
        <b-col cols=8 class="col-xs-12">
        <div class="layout">
          <slot/>
        </div>
      </b-col>
      <b-col cols=.5>
        <SideNav></SideNav>
      </b-col>
    </b-row>
  </b-container>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import SideNav from "@/components/SideNav";
import SocialPane from "@/components/SocialPane"
export default {
    components: {
    SideNav,
    SocialPane
  },
}
</script>

<style>
template {
  font-family: 'Roboto', sans-serif;
}
body {
  font-family: "Roboto";
  margin:0;
  padding:0;
  line-height: 1.5;
}

.container {
  max-width: 90%;
}
.body-row {
  margin-top: 25px;
}

.layout {
  max-width: 90%;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

</style>
