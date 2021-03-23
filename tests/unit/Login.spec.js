import { shallowMount } from "@vue/test-utils";
import Home from "../../src/views/Home";

describe("Home.vue", () => {
    it("renders auth form with login and register buttons", () => {
        const wrapper = shallowMount(Home);

        expect(wrapper.text()).toMatch("Login");
        expect(wrapper.text()).toMatch("Register");
    })
})