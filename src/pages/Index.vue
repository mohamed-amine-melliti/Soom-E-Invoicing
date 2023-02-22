<template>
  <q-page class="homePage flex flex-center bg-purple-2 q-pa-md">
    <q-card class="auth">
      <q-card-section :class="[isMobile? null: 'q-pa-xl', 'row']">
        <div :class="['col col-md-6 col-lg-6 col-sm-12 col-xs-12', isMobile? null : 'q-pa-lg']">
          <div class="login-form">

            <div id="app">
              <vue-particles
                color="#dedede"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
              >
              </vue-particles>
            </div>

            <div :class="['text-h6', isMobile? null: 'q-mt-xl']">Entrez votre email</div>
            <q-form
              @submit="onSubmit"
              class="q-gutter-md q-mt-md"
            >
              <q-input class="email" v-model="form.email" outlined dense type="text" label="Votre email" />
              <div>
                <q-btn class="full-width" label="Submit" type="submit" color="primary"/>
              </div>
            </q-form>
          </div>
        </div>
        <div class="col col-md-6 col-lg-6 col-sm-12 col-xs-12 desktop-only">
          <img class="side-image" width="300" src="ff.png"></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style lang="scss" scoped>
  .auth {
    width: 700px;
  }

</style>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      form: {
        email: '',
      },
    };
  },
  computed: {
    isMobile() {
      return this.$q.platform.is.mobile;
    },
  },
  methods: {
    async onSubmit() {
      const { email } = this.form;
      if (email) {
        try {
          this.$q.loading.show();
          await this.$store.dispatch('app/login', email);
          this.$router.replace({ name: 'Explore' });
          this.$q.loading.hide();
        } catch (e) {
          throw new Error(e.message);
        }
      }
    },
  },
});
</script>
