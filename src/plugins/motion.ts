import { MotionPlugin } from "@vueuse/motion";
import { App } from "vue";

export default (app: App) => {
  app.use(MotionPlugin);
};
